import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chouten - Open Source Multi Media Consumption App',
  description: 'Chouten is a free, open-source multi-media consumption app offering a seamless experience for various content types.',
  keywords: 'Chouten, open source, multimedia, app, free, content consumption',
  authors: [{ name: 'Chouten Team' }],
  creator: 'Chouten Team',
  publisher: 'Chouten Team',
  openGraph: {
    title: 'Chouten - Open Source Multi Media Consumption App',
    description: 'Discover Chouten: Your free, open-source solution for seamless multi-media content consumption.',
    url: 'https://www.chouten.app',
    siteName: 'Chouten',
    locale: 'en_US',
    type: 'website',
    images: [], // TODO: Add images here
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chouten - Open Source Multi Media Consumption App',
    description: 'Explore Chouten: The free, open-source app for all your multi-media content needs.',
    images: [], // TODO: Add images here
  },
  robots: 'index, follow',
  applicationName: 'Chouten',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/Icon.png',
    apple: '/Icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}