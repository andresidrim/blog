import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await getToken({ req, secret })

    if (!token) {
        res.status(401).json({ message: 'Unauthorized Token' })
        return
    }

    res.status(200).json({ token })
}
