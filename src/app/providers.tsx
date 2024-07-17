'use client'

import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        <SessionProvider refetchOnWindowFocus={false}>
            {children}
        </SessionProvider>
    </QueryClientProvider>
)
