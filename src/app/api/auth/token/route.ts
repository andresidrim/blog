import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXTAUTH_SECRET as string

export async function GET(req: NextRequest) {
    try {
        const token = await getToken({ req, secret, raw: true })
        if (token) {
            // Send the raw JWT token back to the client
            return NextResponse.json({ token })
        } else {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            )
        }
    } catch (error) {
        console.error('Error fetching token:', error)
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
