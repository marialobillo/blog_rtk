import { IComment } from "../interfaces/comment.interface"
import CommentModel from "../models/Comment"

const insertComment = async (commentData: IComment) => {
    const responseInsertComment = await CommentModel.create(commentData)
    return responseInsertComment
}

const getCommentsByBlogId = async (blogId: string) => {
    const responseGetCommentsByBlogId = await CommentModel.find({ blogId })
    return responseGetCommentsByBlogId
}

const updateComment = async (commentId: string, commentData: IComment) => {
    const responseUdpateComment = await CommentModel.findOneAndUpdate(
        { _id: commentId },
        commentData,
        { new: true }
    )
    return responseUdpateComment
}

const deleteComment = async (commentId: string) => {
    const responseDeleteComment = await CommentModel.findOneAndDelete({ _id: commentId })
    return responseDeleteComment
}

export {
    insertComment,
    getCommentsByBlogId,
    updateComment,
    deleteComment
}