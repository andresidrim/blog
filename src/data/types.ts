export type User = {
    id: number
    createdAt: Date
    name: string
    email: string
    username: string
    updatedAt: Date
    password: string
}

export type Post = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    category: string[]
    userId: number
}

export type Category = 'Art' | 'Games' | 'Tech' | 'Software' | 'AI' | 'Coding'
