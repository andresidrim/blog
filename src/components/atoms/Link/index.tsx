import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { forwardRef, Ref } from 'react'
import { LinkProps } from './types'
import styles from './styles.module.css'

const Link = forwardRef(
    (
        { asChild, children, className, ...props }: LinkProps,
        ref: Ref<HTMLAnchorElement>
    ) => {
        const Component = asChild ? Slot : 'a'

        return (
            <Component
                ref={ref}
                href=''
                className={clsx(styles.link, className)}
                {...props}
            >
                {children}
            </Component>
        )
    }
)

Link.displayName = 'Link'

export default Link
