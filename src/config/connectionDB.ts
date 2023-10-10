import 'dotenv/config'
import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || ''

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log(`*** Connected to MongoDB: ${MONGO_URI} ***`)
    } catch (error) {
        console.log("/// Error during connection to MongoDB: ", error)
    }
}

export default connectDB