import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KMTravelAgency',
  description: 'We make you go somewhere',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      </body>
    </html>
  )
}
