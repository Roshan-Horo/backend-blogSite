import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler} from './middlewares/errorMiddleware.js'
//Routes
import userRoutes from './routes/userRoute.js'



const app = express()
dotenv.config()
app.use(express.json())

// call the database
connectDB()

// API end Points

app.use('/api/users', userRoutes)


app.get('/', (req,res) => {
    res.send('API is running')
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline.bold))