import { Inter, Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Wayne Enterprises — Professional Email Infrastructure',
  description:
    'Google Workspace and Microsoft 365 account setup, DNS, SPF, DKIM, and DMARC — handled end-to-end by experienced professionals.',
  themeColor: '#f4f1ea',
  openGraph: {
    title: 'Wayne Enterprises — Professional Email Infrastructure',
    description:
      'Google Workspace and Microsoft 365 account setup, DNS, SPF, DKIM, and DMARC — handled end-to-end by experienced professionals.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${plexMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
