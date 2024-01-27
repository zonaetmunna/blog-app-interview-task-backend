// zod validation error details
export type TZodValidationErrorDetails = {
  issues: {
    expected?: string
    received?: string | undefined
    code: string
    path: string[]
    message: string
  }[]
  name: string
}

// cast error details
export type TCastErrorDetails = {
  stringValue: string
  valueType: string
  kind: string
  value: string
  path: string
  reason?: string
  name: string
  message: string
}

// need to validation error details for mongoose
export type TValidationError = {
  errorDetails: {
    issues: {
      expected?: string
      received?: string
      code: string
      path: string[]
      message: string
    }[]
    name: string
  }
}

// Common structure for error details
export type TCommonErrorDetails = {
  message: string
  path: string
}

// Type for the generic error response
export type TGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessage: string
  errorDetails:
    | TZodValidationErrorDetails
    | TValidationError
    | TCastErrorDetails
    | TCommonErrorDetails
  stack?: string
}
