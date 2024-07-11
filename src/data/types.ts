import { ReactNode } from 'react'

export type User = {
    id: string
    name: string
    email: string
    username: string
    password: string
    posts?: Post[]
}

export type Post = {
    id: number
    title: string
    description?: string
    content: ReactNode
    upvotes: number
    createdAt: Date

    userPostId: number

    userId: number
}
