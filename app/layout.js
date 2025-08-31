import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CartProvider } from '../context/CartContext'
import { ToastProvider } from '../components/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EchoShop - Modern E‑commerce',
  description: 'A sleek, animated e‑commerce experience built with Next.js, Tailwind, and Framer Motion.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  keywords: ['ecommerce', 'nextjs', 'tailwind', 'framer motion', 'shop', 'modern ui'],
  applicationName: 'EchoShop',
  authors: [{ name: 'Bhavya Agrawal' }],
  creator: 'Bhavya Agrawal',
  publisher: 'Bhavya Agrawal',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'EchoShop - Modern E‑commerce',
    description: 'A sleek, animated e‑commerce experience built with Next.js, Tailwind, and Framer Motion.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'EchoShop preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EchoShop - Modern E‑commerce',
    description: 'A sleek, animated e‑commerce experience built with Next.js, Tailwind, and Framer Motion.',
    images: ['/og-image.svg']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {try {const ls = localStorage.getItem('theme'); const mql = window.matchMedia('(prefers-color-scheme: dark)'); const dark = ls ? ls === 'dark' : mql.matches; const c = document.documentElement.classList; dark ? c.add('dark') : c.remove('dark');} catch (e) {}})();`
          }}
        />
      </head>
      <body>
        <ToastProvider>
          <CartProvider>
            <Navbar />
            <main className="container-padding min-h-[70vh]">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
