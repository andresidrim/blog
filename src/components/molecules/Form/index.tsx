'use client'

import clsx from 'clsx'
import { FormProps } from './types'
import styles from './styles.module.css'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button, Input } from '@/components/atoms'
import { getToken } from 'next-auth/jwt'

const Form = ({ variant = 'signin', className, ...props }: FormProps) => {
    const [usrLogin, setUsrLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async () => {
        setLoading(true)
        await signIn('credentials', {
            redirect: false,
            usrLogin,
            password,
        }).finally(() => setLoading(false))
    }

    // console.log(getToken())

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
        </form>
    )
}

export default Form
