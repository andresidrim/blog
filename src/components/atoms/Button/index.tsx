import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { forwardRef, Ref } from 'react'
import { ButtonProps } from './types'
import styles from './styles.module.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Button = forwardRef(
    (
        {
            asChild,
            children,
            loading = false,
            className,
            ...props
        }: ButtonProps,
        ref: Ref<HTMLButtonElement>
    ) => {
        const Component = asChild ? Slot : 'button'

        return (
            <Component
                ref={ref}
                className={clsx(
                    styles.button,
                    loading && styles.loading,
                    className
                )}
                {...props}
            >
                {loading ? (
                    <AiOutlineLoading3Quarters
                        size={26}
                        className={styles['loading-animation']}
                    />
                ) : (
                    children
                )}
            </Component>
        )
    }
)

Button.displayName = 'Button'

export default Button
