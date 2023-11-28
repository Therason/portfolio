import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ravigsfen = localFont({
  src: '../public/ZTRavigsfen-Regular.otf',
  display: 'swap',
  variable: '--font-ravigsfen',
})
const oskon = localFont({
  src: '../public/ZTBrosOskon90s-Regular.otf',
  display: 'swap',
  variable: '--font-oskon',
})

export const metadata: Metadata = {
  title: 'TGB',
  description: "Thomas Gerritt Broadwater's portfolio.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${ravigsfen.variable} ${oskon.variable}`}
    >
      <body className={oskon.className}>{children}</body>
    </html>
  )
}
