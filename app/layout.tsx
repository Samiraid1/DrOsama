import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr Osama Abu taha',
  description: 'Created By Sami',
  generator: 'dev',
   icons: {
    icon: '/syrings.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
