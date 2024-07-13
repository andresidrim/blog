import { FormHTMLAttributes } from 'react'

export type FormProps = {
    variant?: 'signin' | 'signup'
} & FormHTMLAttributes<HTMLFormElement>
