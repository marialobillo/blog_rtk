import { Schema, model } from "mongoose"
import { IComment } from "../interfaces/comment.interface"

const CommentSchema: Schema = new Schema<IComment>(
    {
        message: { type: String, required: true },
        authorId: { type: String, required: true },
        blogId: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const CommentModel = model<IComment>("Comment", CommentSchema)

export default CommentModel
