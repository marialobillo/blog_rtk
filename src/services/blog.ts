import { IBlog } from '../interfaces/blog.interface'
import BlogModel from '../models/Blog'

const insertBlog = async (blogData: IBlog) => {
    const responseInsertBlog = await BlogModel.create(blogData)
    return responseInsertBlog
}

const getBlogs = async () => {
    const responseGetBlogs = await BlogModel.find()
    return responseGetBlogs
}

const getBlogsByAuthorId = async (authorId: string) => {
    const responseGetBlogsByAuthorId = await BlogModel.find({ authorId })
    return responseGetBlogsByAuthorId
}

const updateBlog = async (blogId: string, blogData: IBlog) => {
    const responseUdpateBalance = await BlogModel.findOneAndUpdate(
        { _id: blogId },
        blogData,
        { new: true }
    )
    return responseUdpateBalance
}

const deleteBlog = async (blogId: string) => {
    const responseDeleteBlog = await BlogModel.findOneAndDelete({ _id: blogId })
    return responseDeleteBlog
}

export {
    insertBlog,
    getBlogs,
    getBlogsByAuthorId,
    updateBlog,
    deleteBlog
}