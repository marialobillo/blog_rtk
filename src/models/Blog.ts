import { Schema, model } from 'mongoose'
import { IBlog } from '../interfaces/blog.interface'

const BlogSchema: Schema = new Schema<IBlog>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        authorId: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const BlogModel = model<IBlog>('Blog', BlogSchema)

export default BlogModel