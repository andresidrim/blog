import { Meta, StoryObj } from '@storybook/react'
import TextArea from '.'
import { TextAreaProps } from './types'
import styles from './styles.module.css'

export default {
    title: 'Components/Atoms/TextArea',
    component: TextArea,

    decorators: [
        (Story) => (
            <div className={styles.stories}>
                <Story />
            </div>
        ),
    ],

    tags: ['autodocs'],
} as Meta<TextAreaProps>

type Story = StoryObj<TextAreaProps>

export const Default: Story = {
    args: {
        placeholder: 'Placeholder',
    },
}
