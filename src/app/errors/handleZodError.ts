import { ZodError, ZodIssue } from 'zod'
import { TGenericErrorResponse } from '../interface/errors'

type IZodErrorDetail = {
  expected?: string
  received?: string
  code: string
  path: string[]
  message: string
}
const handleZodError = (error: ZodError): TGenericErrorResponse => {
  const statusCode = 400

  const message = 'Validation Error'

  const errorMessage = error.issues
    ?.map((issue: ZodIssue) => {
      const fieldName = issue.path[issue.path.length - 1]
      return `${fieldName} ${issue.message}`
    })
    .join('. ')

  const errorDetails = {
    issues: error.issues?.map((issue: ZodIssue): IZodErrorDetail => {
      const detail: IZodErrorDetail = {
        code: issue.code,
        path: issue.path.map(String),
        message: issue.message,
      }

      if ('expected' in issue) {
        detail.expected = issue.expected
          ? JSON.stringify(issue.expected)
          : undefined
      }

      if ('received' in issue) {
        detail.received = issue.received
          ? JSON.stringify(issue.received)
          : undefined
      }

      return detail
    }),
    name: 'ZodError',
  }

  const stack = error.stack || ''

  return {
    statusCode,
    message,
    errorMessage,
    errorDetails,
    stack,
  }
}

export default handleZodError
