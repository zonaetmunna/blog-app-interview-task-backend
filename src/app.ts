import cors from 'cors'
import express, { Application } from 'express'
// import cookieParser from 'cookie-parser'
import notFound from './app/middleware/notFound'
import router from './app/routes'
import globalErrorHandler from './app/middleware/globalErrorHandler'

// create express app
const app: Application = express()

// application level parse middleware
app.use(express.json())
// app.use(cookieParser)
app.use(cors()) //corse parse frontend base url request

// application routes
app.use('/api/v1', router)

// global error handler
app.use(globalErrorHandler)

//Not Found
app.use(notFound)

export default app
