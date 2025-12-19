import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Partners for — Sofinnova Partners',
  description: 'This is a project for a new website for Cornerstone Health Community and Dr. Christopher Mote.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/SuisseIntl-Book.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SuisseIntl-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Manrope-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

