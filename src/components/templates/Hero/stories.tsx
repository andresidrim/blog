import { Meta, StoryObj } from '@storybook/react'
import Hero from '.'
import { HeroProps } from './types'

export default {
    title: 'Components/Templates/Hero',
    component: Hero,
} as Meta<HeroProps>

type Story = StoryObj<HeroProps>

export const Default: Story = {}
