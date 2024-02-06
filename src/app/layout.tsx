import '@/app/globals.css'

import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}
