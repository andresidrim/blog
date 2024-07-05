import clsx from 'clsx'
import { FormProps } from './types'
import styles from './styles.module.css'

const Form = ({ className, ...props }: FormProps) => {
    return (
        <form
            className={clsx(styles.form, className)}
            {...props}
        ></form>
    )
}

export default Form
