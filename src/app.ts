import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import connectDB from './config/connectionDB'


const PORT = process.env.PORT || 3040   
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())


const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`*** Server is running on port ${PORT} ***`)
        })
    } catch (error) {
        console.log("/// Error during connection: ", error)
    }
}

start()
