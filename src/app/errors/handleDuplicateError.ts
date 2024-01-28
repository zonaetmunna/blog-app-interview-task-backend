/* eslint-disable @typescript-eslint/no-explicit-any */

import { TGenericErrorResponse } from '../interface/errors'

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const statusCode = 400

  const message = 'Invalid ID'

  const math = err.message.match(/"([^"]*)"/)
  const extractedMessage = math && math[1]
  const errorMessage = `${extractedMessage} already exists`

  const errorDetails: any = {
    path: err.path,
    name: err.name,
    code: err.code,
    message: `${extractedMessage} already exists`,
  }

  return {
    statusCode,
    message,
    errorMessage,
    errorDetails,
  }
}

export default handleDuplicateError
