import { Metadata } from 'next'
import { ReactNode } from 'react'

import '@/app/globals.css'

export const metadata: Metadata = {}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}
