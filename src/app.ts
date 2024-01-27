import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import notFound from './app/middleware/notFound'

// create express app
const app: Application = express()

// application level parse middleware
app.use(express.json())
app.use(cookieParser)
app.use(cors({ origin: ['http://localhost:5173'] })) //corse parse frontend base url request

const test = (req: Request, res: Response) => {
  const a = 10
  res.json(a)
}

app.get('/', test)

//Not Found
app.use(notFound)

export default app
