'use client'

import { Button } from '@/components/atoms'
import { addApiUsers, addApiPosts } from '@/services/lib/insertData'

const Teste = () => {
    return <Button onClick={async () => addApiPosts()}>Add API Users</Button>
}

export default Teste
