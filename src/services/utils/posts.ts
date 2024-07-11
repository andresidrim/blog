import { users } from '@/data/db'
import { Post } from '@/data/types'

export const getUserPostById = (
    userId: number,
    postId: number
): Post | null => {
    const user = users.find((user) => +user.id === userId)

    if (!user) {
        console.error('User not found')
        return null
    }

    if (!user.posts) {
        console.error('User does not have any posts')
        return null
    }

    const post = user.posts.find((post) => post.userPostId === postId)

    if (!post) {
        console.error('Post not found')
        return null
    }

    return post
}

export const getUserPostByUsername = (
    username: string,
    postId: number
): Post | null => {
    const user = users.find((user) => user.username === username)

    if (!user) {
        console.error('User not found')
        return null
    }

    if (!user.posts) {
        console.error('User does not have any posts')
        return null
    }

    const post = user.posts.find((post) => post.userPostId === postId)

    if (!post) {
        console.error('Post not found')
        return null
    }

    return post
}

export const getAllUserPostsById = (userId: number): Post[] | null => {
    const user = users.find((user) => +user.id === userId)

    if (!user) {
        console.error('User not found')
        return null
    }

    if (!user.posts) {
        console.error('User does not have any posts')
        return null
    }

    const post = user.posts

    return post
}

export const getAllUserPostsByUsername = (username: string): Post[] | null => {
    const user = users.find((user) => user.username === username)

    if (!user) {
        console.error('User not found')
        return null
    }

    if (!user.posts) {
        console.error('User does not have any posts')
        return null
    }

    const post = user.posts

    return post
}
