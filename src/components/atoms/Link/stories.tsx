import { Meta, StoryObj } from '@storybook/react'
import Link from '.'
import { LinkProps } from './types'
import styles from './styles.module.css'

export default {
    title: 'Components/Atoms/Link',
    component: Link,

    decorators: [
        (Story) => (
            <div className={styles.stories}>
                <Story />
            </div>
        ),
    ],

    tags: ['autodocs'],
} as Meta<LinkProps>

type Story = StoryObj<LinkProps>

export const Default: Story = {
    args: {
        children: 'Default',
        href: 'https://google.com/',
    },
}

export const AsChild: Story = {
    args: {
        asChild: true,
        children: <button>As Child</button>,
    },
}
