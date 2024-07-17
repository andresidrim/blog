import { User } from '@/components/templates'

export default function UserPage({ params }: { params: { slug: string } }) {
    return <User username={params.slug} />
}
