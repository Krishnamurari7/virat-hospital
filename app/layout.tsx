import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Virat Life Hospital Patna',
  description: 'Official website of Virat Life Hospital Patna - Healthcare and Medical Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
} 