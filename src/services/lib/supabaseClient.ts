import { createBrowserClient } from '@supabase/ssr'

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseURL) throw new Error('Missing supabase URL')
if (!supabaseKey) throw new Error('Missing supabase Key')

export const supabase = createBrowserClient(supabaseURL, supabaseKey)
