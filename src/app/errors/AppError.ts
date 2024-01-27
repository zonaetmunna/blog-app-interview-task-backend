class AppError extends Error {
  public statusCode: number
  public errorMessage: string
  public errorDetails: string | null

  constructor(
    statusCode: number,
    message: string,
    errorMessage: string,
    stack = '',
  ) {
    super(message)
    this.statusCode = statusCode
    this.errorMessage = errorMessage
    this.errorDetails = null

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export default AppError
