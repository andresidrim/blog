'use client'

import clsx from 'clsx'
import { FormProps } from '../types'
import styles from '../styles.module.css'
import { useState, FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { Button, Input } from '@/components/atoms'

export const SignIn = ({ className, ...props }: FormProps) => {
    const [usrLogin, setUsrLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        setLoading(true)

        signIn('credentials', {
            redirect: false,
            login: usrLogin,
            password,
        })

        setLoading(false)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={clsx(styles.form, className)}
            {...props}
        >
            <Input
                placeholder='Email or Username'
                value={usrLogin}
                onChange={(e) => setUsrLogin(e.target.value)}
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
                Sign In
            </Button>
            {/* <Link href='/signup'>Does not have an account? Sign up</Link> */}
        </form>
    )
}
