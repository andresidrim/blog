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
} as Meta<FormProps>

type Story = StoryObj<FormProps>

export const Default: Story = {}
