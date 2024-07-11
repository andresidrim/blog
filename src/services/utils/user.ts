import { users } from '@/data/db'
import { User } from '@/data/types'

export const getUserById = (id: number): Omit<User, 'password'> | null => {
    const fullUser = users.find((user) => +user.id === id)

    if (!fullUser) {
        console.error('User not found')
        return null
    }

    const { password, ...user } = fullUser
    return user
}

export const getUserByUsername = (
    username: string
): Omit<User, 'password'> | null => {
    const fullUser = users.find((user) => user.username === username)

    if (!fullUser) {
        console.error('User not found')
        return null
    }

    const { password, ...user } = fullUser
    return user
}
