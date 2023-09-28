import 'dotenv/config'
import express, { json, urlencoded } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { categoryRouter } from './routes/category.router'
import { newsRouter } from './routes/news.router'
import { commentRouter } from './routes/comment.router'
import { authRouter } from './routes/auth.router'

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors())

app.use('/category', categoryRouter)
app.use('/news', newsRouter)
app.use('/comment', commentRouter)
app.use('/auth', authRouter)

const startServer =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        app.listen(Number(process.env.APP_PORT), () => {
            console.log(`Server started on posrt: 8080...`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()

