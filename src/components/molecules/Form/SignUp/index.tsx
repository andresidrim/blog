'use client'

import clsx from 'clsx'
import { FormProps } from '../types'
import styles from '../styles.module.css'
import { useState, FormEvent } from 'react'
import { Button, Input } from '@/components/atoms'
import { addUser } from '@/services/lib/insertData'

export const SignUp = ({ className, ...props }: FormProps) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setLoading(true)

        await addUser(name, email, username, password)

        setLoading(false)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={clsx(styles.form, className)}
            {...props}
        >
            <Input
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                placeholder='********'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type='submit'
                loading={loading}
            >
                Sign Up
            </Button>
        </form>
    )
}
