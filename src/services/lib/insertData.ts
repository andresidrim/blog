import { supabase } from './supabaseClient'
import bcrypt from 'bcryptjs'
import { getApiUsers, getApiPosts } from './axios'
import { Category } from '@/data/types'

export const addUser = async (
    name: string,
    email: string,
    username: string,
    password: string
) => {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    const { error } = await supabase.from('users').insert({
        name,
        email,
        username,
        password: hashedPassword,
        updatedAt: new Date(),
    })

    if (error) {
        console.error(error.message)
        return
    }

    console.log('User Created')
}

export const addPostByUserId = async (
    userId: number,
    title: string,
    description: string,
    category: Category[]
) => {
    const { error } = await supabase
        .from('posts')
        .insert({
            title,
            description,
            category,
            userId,
            updatedAt: new Date(),
        })
        .eq('userId', userId)

    if (error) {
        console.error(error.message)
        return
    }

    console.log('Post Created')
}

export const addApiUsers = async () => {
    const users = await getApiUsers()

    users.forEach(async (user) => {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(user.password, salt)

        const { error } = await supabase.from('users').insert({
            name: user.name,
            email: user.email,
            username: user.username,
            password: hashedPassword,
            updatedAt: new Date(),
        })

        if (error) {
            console.error(error.message)
            return
        }
    })

    console.log('Users Created')
}

export const addApiPosts = async () => {
    const categories: Category[] = [
        'Art',
        'Games',
        'Tech',
        'Software',
        'AI',
        'Coding',
    ]

    const posts = await getApiPosts()

    posts.forEach(async (post) => {
        post.userId = Math.floor(Math.random() * 47) + 7

        const amount = Math.floor(Math.random() * categories.length) + 1

        for (let i: number = 0; i < amount; i++) {
            post.category.push(
                categories[Math.floor(Math.random() * categories.length)]
            )
        }

        const { error } = await supabase.from('posts').insert({
            title: post.title,
            description: post.description,
            category: post.category,
            userId: post.userId,
            updatedAt: new Date(),
        })

        if (error) {
            console.error(error.message)
            return
        }
    })

    console.log('Posts Created')
}
