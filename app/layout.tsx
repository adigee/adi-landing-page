import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aditya',
  description: 'Welcome to my corner of the internet. I build things and explore ideas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
