'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from './atoms'
import { getUserById, getUserByUsername } from '@/services/utils/user'
import {
    getUserPostById,
    getUserPostByUsername,
    getAllUserPostsById,
    getAllUserPostsByUsername,
} from '@/services/utils/posts'

const Teste = () => {
    const { data } = useSession()

    // console.log(
    //     // data,
    //     'Get User By Id: ',
    //     getUserById(1),
    //     getUserByUsername('andresidrim'),
    //     getUserPostById(1, 1),
    //     getUserPostByUsername('andresidrim', 1),
    //     getAllUserPostsById(1),
    //     getAllUserPostsByUsername('andresidrim')
    // )

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
