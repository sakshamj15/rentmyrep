import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RentMyRep — Human Reps for Email Infrastructure Setup',
  description:
    'White-label human reps for Google Workspace & Microsoft 365 account setup. DNS, SPF, DKIM, DMARC — handled end-to-end at scale.',
  themeColor: '#0A1628',
  openGraph: {
    title: 'RentMyRep — Human Reps for Email Infrastructure Setup',
    description:
      'White-label human reps for Google Workspace & Microsoft 365 account setup. DNS, SPF, DKIM, DMARC — handled end-to-end at scale.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
