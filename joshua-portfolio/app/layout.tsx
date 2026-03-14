import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Joshua Alana | IT Consultant & M&E Specialist',
  description: 'Technology Consultant driving agricultural transformation and development impact across Africa. IT Consultant at AGRA, Software Engineer, M&E Specialist.',
  keywords: ['IT Consultant', 'AGRA', 'M&E', 'Agricultural Technology', 'Africa', 'Data Systems'],
  openGraph: {
    title: 'Joshua Alana | IT Consultant & M&E Specialist',
    description: 'Technology Consultant driving agricultural transformation and development impact across Africa.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
