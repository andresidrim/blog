import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { forwardRef, Ref } from 'react'
import { ButtonProps } from './types'
import styles from './styles.module.css'

const Button = forwardRef(
    (
        { asChild, children, google = false, className, ...props }: ButtonProps,
        ref: Ref<HTMLButtonElement>
    ) => {
        const Component = asChild ? Slot : 'button'

        return (
            <Component
                ref={ref}
                className={clsx(
                    styles.button,
                    google && styles.login,
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        )
    }
)

Button.displayName = 'Button'

export default Button
