'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from './atoms'

const Teste = () => {
    const { data } = useSession()

    console.log(data)

    return (
        <div>
            <Button onClick={() => signIn('credentials', { redirect: false })}>
                Sign In
            </Button>
            <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
    )
}

export default Teste
