'use client'

import { Button } from '@/components/atoms'
import styles from './styles.module.css'
import clsx from 'clsx'
import { HeroProps } from './types'
import { Form } from '@/components/molecules'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

const Hero = ({ className, ...props }: HeroProps) => {
    const [form, setForm] = useState<boolean>(false)

    const { data } = useSession()

    console.log(data)

    return (
        <section
            className={clsx(styles.home)}
            {...props}
        >
            <div className={styles['content-container']}>
                <div
                    className={clsx(
                        styles['get-started'],
                        form && styles['opacity-0'],
                        !form && styles['z-10']
                    )}
                >
                    {/* <h1 className={styles.title}>SanderoVerse</h1>
                    <p className={styles.desc}>
                        Discover new universes at the speed of a Sandero RS
                    </p> */}
                    <Button onClick={() => setForm(true)}>Get Started!</Button>
                </div>
                <div
                    className={clsx(
                        styles.form,
                        !form && styles['opacity-0'],
                        form && styles['z-10']
                    )}
                >
                    <Form variant='signup' />
                </div>
            </div>
            {/* <div
                onClick={() => setForm(false)}
                className={styles.bg}
            /> */}
            <Button onClick={() => signOut()}>Sign Out</Button>
        </section>
    )
}

export default Hero
