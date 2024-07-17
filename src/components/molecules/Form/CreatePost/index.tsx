'use client'

import clsx from 'clsx'
import { FormProps } from '../types'
import styles from '../styles.module.css'
import { useState, FormEvent } from 'react'
import { Button, Input } from '@/components/atoms'
import { Category } from '@/data/types'
import { useSession } from 'next-auth/react'
import { addPostByUserId } from '@/services/lib/insertData'
import { getUserByEmail } from '@/services/lib/fetchData'
import { useRouter } from 'next/navigation'

const CreatePost = ({ className, ...props }: FormProps) => {
    const router = useRouter()

    const { data } = useSession()

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([])

    const categories: Category[] = [
        'Art',
        'Games',
        'Tech',
        'Software',
        'AI',
        'Coding',
    ]

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        if (!title) {
            alert('Post needs a title')
            return
        }

        if (!description) {
            alert('Post needs a description')
            return
        }

        if (selectedCategories.length < 1) {
            alert('Select at least one category')
            return
        }

        setLoading(true)

        if (!data || !data?.user || !data.user.email) return

        const userId = (await getUserByEmail(data.user.email)).user?.id

        if (!userId) return

        await addPostByUserId(userId, title, description, selectedCategories)

        setLoading(false)

        location.reload()
    }

    const handleCategoryChange = (category: Category) => {
        const isSelected = selectedCategories.includes(category)
        if (isSelected) {
            setSelectedCategories(
                selectedCategories.filter((c) => c !== category)
            )
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={clsx(styles.form, className)}
            {...props}
        >
            <Input
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <h1>Select Categories</h1>
            {categories.map((category, idx) => (
                <label key={idx}>
                    {category}{' '}
                    <input
                        type='checkbox'
                        checked={selectedCategories?.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                    />
                </label>
            ))}
            <Button
                type='submit'
                loading={loading}
            >
                Post
            </Button>
        </form>
    )
}

export default CreatePost
