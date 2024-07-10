'use client'

import clsx from 'clsx'
import { FormProps } from './types'
import styles from './styles.module.css'
import { useState } from 'react'

import { Button, TextArea } from '@/components/atoms'

const Form = ({ className, ...props }: FormProps) => {
    const [text, setText] = useState<string>('')

    return (
        <form
            className={clsx(styles.form, className)}
            {...props}
        >
            <TextArea
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button className={styles.button}>Enviar</Button>
        </form>
    )
}

export default Form
