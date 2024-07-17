import { Meta, StoryObj } from '@storybook/react'
import User from '.'
import { UserProps } from './types'

export default {
    title: 'Components/Templates/User',
    component: User,
} as Meta<UserProps>

type Story = StoryObj<UserProps>

export const Default: Story = {}
