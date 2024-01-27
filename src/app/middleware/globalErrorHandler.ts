import { ErrorRequestHandler } from 'express'

import { ZodError } from 'zod'
import config from '../config'
import handleZodError from '../errors/handleZodError'
import handleCastError from '../errors/handleCastError'
import handleDuplicateError from '../errors/handleDuplicateError'
import AppError from '../errors/AppError'
import {
  TCastErrorDetails,
  TCommonErrorDetails,
  TValidationError,
  TZodValidationErrorDetails,
} from '../interface/errors'

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // Default values
  let statusCode = 500
  let message = error.message || 'Internal Server Error'
  let errorMessage: string = ''
  let errorDetails:
    | TCastErrorDetails
    | TValidationError
    | TCommonErrorDetails
    | TZodValidationErrorDetails = {
    issues: [],
    name: '',
  }

  // Handle specific error types
  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
    errorDetails = simplifiedError.errorDetails
  } else if (error.name === 'ValidationError') {
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
    errorDetails = simplifiedError.errorDetails
  } else if (error.name === 'CastError') {
    const simplifiedError = handleCastError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
    errorDetails = simplifiedError.errorDetails
  } else if (error?.code === 11000) {
    const simplifiedError = handleDuplicateError(error)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorMessage = simplifiedError?.errorMessage
    errorDetails = simplifiedError?.errorDetails
  } else if (error instanceof AppError) {
    statusCode = error.statusCode
    message = error.message
    errorMessage = error.errorMessage
    errorDetails = {
      issues: [],
      name: '',
    }
  } else if (error instanceof Error) {
    message = error.message
    errorMessage = error.message
    errorDetails = {
      issues: [],
      name: '',
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    errorDetails,
    stack: config.node_env === 'production' ? error?.stack : null,
  })
}

export default globalErrorHandler
