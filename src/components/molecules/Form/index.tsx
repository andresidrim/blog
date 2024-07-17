'use client'

import { FormProps } from './types'

import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import CreatePost from './CreatePost'

const Form = ({
    className,
    variant,
}: FormProps & { variant: 'signin' | 'signup' | 'post' }) =>
    variant === 'signin' ? (
        <SignIn className={className} />
    ) : variant === 'signup' ? (
        <SignUp className={className} />
    ) : (
        <CreatePost className={className} />
    )

export default Form
