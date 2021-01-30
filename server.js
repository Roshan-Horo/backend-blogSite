import express from 'express'
import path from 'path'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler} from './middlewares/errorMiddleware.js'
//Routes
import userRoutes from './routes/userRoute.js'
import postsRoutes from './routes/postsRoute.js'
import uploadRoutes from './routes/uploadRoutes.js'


const app = express()
dotenv.config()
app.use(express.json())

// call the database
connectDB()

// API end Points

app.use('/api/users', userRoutes)
app.use('/api/posts', postsRoutes)
app.use('/api/upload', uploadRoutes)


app.get('/', (req,res) => {
    res.send('API is running')
})

const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline.bold))