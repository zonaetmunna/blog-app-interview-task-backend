import mongoose from 'mongoose'
import { TCastErrorDetails, TGenericErrorResponse } from '../interface/errors'

const handleCastError = (
  error: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorMessage = `${error.value} is not a valid ID!`

  let reason: string | undefined

  if (typeof error.reason === 'string') {
    reason = error.reason
  } else if (error.reason instanceof Error) {
    reason = error.reason.message
  }

  const errorDetails: TCastErrorDetails = {
    stringValue: error.value,
    valueType: error.kind,
    kind: error.kind,
    value: error.value,
    path: error.path,
    reason: reason || 'Unknown Reason',
    name: 'CastError',
    message: error.message || 'Unknown CastError',
  }

  const stack = error.stack || ''

  return {
    statusCode: 400,
    message: 'Invalid ID',
    errorMessage,
    errorDetails,
    stack,
  }
}

export default handleCastError
