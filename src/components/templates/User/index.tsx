'use client'

import clsx from 'clsx'
import { UserProps } from './types'
import styles from './styles.module.css'
import { getUserByUsername, getPostsByUserId } from '@/services/lib/fetchData'
import { useState, useEffect } from 'react'
import { Form } from '@/components/molecules'
import { Post, User } from '@/data/types'

const UserPage = ({ username, className, ...props }: UserProps) => {
    const [user, setUser] = useState<{
        valid: boolean
        message?: string
        user?: User
    }>()
    const [posts, setPosts] = useState<{
        valid: boolean
        message: string
        posts?: Post[]
    }>()

    useEffect(() => {
        const fetchUser = async () => {
            const result = await getUserByUsername(username)

            if (!result.valid || !result.user) {
                return <div>asdasd</div>
            }

            setUser(result)
        }

        const fetchPosts = async () => {
            if (!user || !user.user) return

            const posts = await getPostsByUserId(user.user.id)

            if (!posts.valid || !posts.posts) {
                return <div>postsnotfound</div>
            }

            setPosts(posts)
        }

        if (!user) fetchUser()
        else fetchPosts()
    }, [username, user])

    if (!user?.user) return <div>asdasd</div>

    return (
        <section
            className={clsx(styles.user, className)}
            {...props}
        >
            <h1>{user.user.username}</h1>
            <span>{user.user.name}</span>
            <Form variant='post' />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5rem',
                }}
            >
                {posts && posts.valid && posts.posts
                    ? posts.posts.map((post, idx) => (
                          <div
                              key={idx}
                              style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '1rem',
                              }}
                          >
                              <div>Category: {post.category + ' '}</div>
                              <div>Title: {post.title}</div>
                              <div>Description: {post.description}</div>
                              <div>User ID: {post.userId}</div>
                          </div>
                      ))
                    : posts && posts.message}
            </div>
        </section>
    )
}

export default UserPage
