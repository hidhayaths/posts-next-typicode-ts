import axios from "axios"
import { CommentType, PostType, UserType } from "./types"

export const getUser = async(id:number) =>{
    const response = await axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`)

    return response.data
}


export const getPosts = async()=>{
    const response = await axios.get<PostType[]>('https://jsonplaceholder.typicode.com/posts')

    return response.data
}

export const getPost = async(id:number)=>{
    const response = await axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.data
}

export const getUserPosts =async (userId:number) => {
    const response = await axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return response.data
}

export const getPostComments = async(postId:number)=>{
    const response = await axios.get<CommentType[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return response.data
}