import { Meta, StoryObj } from '@storybook/react'
import Button from '.'
import { ButtonProps } from './types'
import styles from './styles.module.css'

export default {
    title: 'Components/Atoms/Button',
    component: Button,

    decorators: [
        (Story) => (
            <div className={styles.stories}>
                <Story />
            </div>
        ),
    ],

    tags: ['autodocs'],
} as Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Default: Story = {
    args: {
        children: 'Default',
    },
}

export const AsChild: Story = {
    args: {
        asChild: true,
        children: (
            <a
                href='https://google.com/'
                target='_blank'
            >
                AsChild
            </a>
        ),
    },
}
