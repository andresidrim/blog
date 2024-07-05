import { Meta, StoryObj } from '@storybook/react'
import Input from '.'
import { InputProps } from './types'
import styles from './styles.module.css'

export default {
    title: 'Components/Atoms/Input',
    component: Input,

    decorators: [
        (Story) => (
            <div className={styles.stories}>
                <Story />
            </div>
        ),
    ],

    tags: ['autodocs'],
} as Meta<InputProps>

type Story = StoryObj<InputProps>

export const Default: Story = {
    args: {
        placeholder: 'Placeholder',
    },
}
