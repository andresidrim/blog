import { Meta, StoryObj } from '@storybook/react'
import Form from '.'
import { FormProps } from './types'
import styles from './styles.module.css'

export default {
    title: 'Components/Molecules/Form',
    component: Form,

    decorators: [
        (Story) => (
            <div className={styles.stories}>
                <Story />
            </div>
        ),
    ],

    tags: ['autodocs'],
} as Meta<FormProps & { variant: 'signin' | 'signup' }>

type Story = StoryObj<FormProps & { variant: 'signin' | 'signup' }>

export const SignIn: Story = {
    args: {
        variant: 'signin',
    },
}

export const SignUp: Story = {
    args: {
        variant: 'signup',
    },
}
