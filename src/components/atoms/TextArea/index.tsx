import clsx from 'clsx'
import { TextAreaProps } from './types'
import { forwardRef, Ref } from 'react'
import styles from './styles.module.css'

const TextArea = forwardRef(
    (
        { children, className, ...props }: TextAreaProps,
        ref: Ref<HTMLTextAreaElement>
    ) => {
        return (
            <textarea
                ref={ref}
                name=''
                id=''
                className={clsx(styles.textarea, className)}
                {...props}
            >
                {children}
            </textarea>
        )
    }
)

TextArea.displayName = 'TextArea'

export default TextArea
