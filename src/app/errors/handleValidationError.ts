import mongoose from 'mongoose'
import { TGenericErrorResponse, TValidationError } from '../interface/errors'

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse & {
  errorDetails: TValidationError['errorDetails']
} => {
  const statusCode = 400

  const message = 'Validation Error'

  const errorMessage = Object.values(err.errors)
    .map(val => val.message)
    .join('. ')

  const errorDetails: TValidationError['errorDetails'] = {
    issues: Object.values(err.errors).map(val => ({
      expected: 'kind' in val ? val.kind : undefined,
      received: undefined, // You may need to modify this based on the actual Mongoose error structure
      code: 'invalid_type', // Modify this based on the actual code from the Mongoose error
      path: Array.isArray(val.path) ? val.path.map(String) : [String(val.path)], // Ensure path is an array
      message: val.message,
    })),
    name: 'MongooseValidationError',
  }

  return {
    statusCode,
    message,
    errorMessage,
    errorDetails,
    stack: err.stack || '',
  }
}

export default handleValidationError
