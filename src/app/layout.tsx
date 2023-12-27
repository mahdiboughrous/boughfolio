import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'

const inter = Inter({ 
  weight: ["400", "700","800", "900"],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Mahdi Boughrous',
  description: 'Mahdi Boughrous is a software engineer based in Morocco.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
