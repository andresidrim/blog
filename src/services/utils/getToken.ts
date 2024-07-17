export const getToken = async () => {
    const res = await fetch('/api/auth/token', {
        method: 'GET',
    })

    if (!res.ok) throw new Error('Failed to fetch JWT Token')

    const { token } = await res.json()
    return token
}
