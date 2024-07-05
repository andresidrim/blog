import clsx from 'clsx'
import { InputProps } from './types'
import styles from './styles.module.css'
import { forwardRef, Ref } from 'react'

const Input = forwardRef(
    ({ className, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
        return (
            <input
                ref={ref}
                type='text'
                className={clsx(styles.input, className)}
                {...props}
            />
        )
    }
)

Input.displayName = 'Input'

export default Input
