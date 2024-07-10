import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { users } from '@/data/users'

const handler = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const user = users.find(
                    (user) =>
                        (user.email === credentials?.email ||
                            user.username === credentials?.username) &&
                        user.password === credentials.password
                )

                if (!user) return null

                return user
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    },
})

export { handler as GET, handler as POST }
