import axiosInstance from './axiosInstance'
import { User, Post } from '@/data/types'

export const getApiUsers = async (): Promise<User[]> => {
    const response = await axiosInstance.get<User[]>('/users')
    return response.data
}

export const getApiPosts = async (): Promise<Post[]> => {
    const response = await axiosInstance.get<Post[]>('/posts')
    return response.data
}
