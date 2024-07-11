import { User } from './types'

export const users: User[] = [
    {
        id: '1',
        email: 'andrecorreasidrim@gmail.com',
        name: 'André Sidrim',
        username: 'andresidrim',
        password: 'senha123',

        posts: [
            {
                id: 1,
                title: 'Teste Title',
                description: 'Teste Description',
                upvotes: 3,
                content: <div>Teste Content</div>,
                userPostId: 1,
                userId: 1,
                createdAt: new Date(),
            },
        ],
    },
]
