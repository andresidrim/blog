import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
    asChild?: boolean
    google?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
