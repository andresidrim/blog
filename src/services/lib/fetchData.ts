import { Post, User } from '@/data/types'
import { supabase } from './supabaseClient'
import bcrypt from 'bcryptjs'

export const getUsers = async (): Promise<{
    valid: boolean
    message?: string
    user?: User[]
}> => {
    const { data, error } = await supabase.from('users').select().single()

    if (error) {
        console.error(error.message)
        return { valid: false, message: error.message }
    }

    if (!data) {
        console.error('No Users Found')
        return { valid: false, message: 'No Users Found' }
    }

    console.log('Users found', data)
    return { valid: true, user: data }
}

export const getUserByUsername = async (
    username: string
): Promise<{
    valid: boolean
    message?: string
    user?: User
}> => {
    const { data, error } = await supabase
        .from('users')
        .select()
        .eq('username', username)
        .single()

    if (error) {
        console.error(error.message)
        return { valid: false, message: error.message }
    }

    if (!data) {
        console.error('User Not Found')
        return { valid: false, message: 'User Not Found' }
    }

    console.log('User ' + username + ' found', data)
    return { valid: true, user: data }
}

export const getUserByEmail = async (
    email: string
): Promise<{
    valid: boolean
    message?: string
    user?: User
}> => {
    const { data, error } = await supabase
        .from('users')
        .select()
        .eq('email', email)
        .single()

    if (error) {
        console.error(error.message)
        return { valid: false, message: error.message }
    }

    if (!data) {
        console.error('User Not Found')
        return { valid: false, message: 'User Not Found' }
    }

    console.log('User ' + data.username + ' found')
    return { valid: true, user: data }
}

export const validateUser = async (
    login: string,
    password: string
): Promise<{
    valid: boolean
    message?: string
    user?: User
}> => {
    const { data, error } = await supabase
        .from('users')
        .select()
        .or(`email.eq.${login},username.eq.${login}`)
        .single()

    if (error) {
        console.error(error.message)
        return { valid: false, message: error.message }
    }

    if (!data) {
        console.error('User not found')
        return { valid: false, message: 'User not found' }
    }

    const validPassword = await bcrypt.compare(password, data.password)

    if (!validPassword) {
        console.error('Invalid Password')
        return { valid: false, message: 'Invalid Password' }
    }

    return { valid: true, user: data }
}

export const getPostsByUserId = async (
    userId: number
): Promise<{
    valid: boolean
    message: string
    posts?: Post[]
}> => {
    const { data, error } = await supabase
        .from('posts')
        .select()
        .eq('userId', userId)

    if (error) {
        console.error(error.message)
        return { valid: false, message: error.message }
    }

    if (!data) {
        console.error('Posts not found')
        return { valid: false, message: 'Posts not found' }
    }

    console.log('Posts found')
    console.log(data)
    return { valid: true, posts: data, message: 'Posts found' }
}
