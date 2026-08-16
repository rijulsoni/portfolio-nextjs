import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import '@/app/globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rijul Soni',
  jobTitle: 'Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Jungleworks',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'ABV Government Institute of Engineering & Technology, Shimla',
  },
  url: 'https://rijul.dev',
  sameAs: [
    'https://github.com/rijulsoni',
    'https://www.linkedin.com/in/rijulsoni31/',
    'https://www.instagram.com/rijulsonii/',
  ],
  knowsAbout: [
    'Node.js',
    'MySQL',
    'Next.js',
    'Ruby on Rails',
    'Payment integrations',
    'Worldpay Access',
    'Tokenized recurring payments',
    'Quick-commerce platforms',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rijul.dev'),
  title: 'Rijul Soni — Software Engineer (Node.js · MySQL · Payments)',
  description:
    'Backend engineer building quick-commerce and delivery systems. Cut delivery-assignment latency 35% on Yelo, wired tokenized card payments across two processors, shipped enterprise SaaS on Rails + React.',
  keywords: [
    'Rijul Soni',
    'software engineer',
    'Node.js',
    'MySQL',
    'Flutter',
    'Next.js',
    'payment integrations',
    'quick-commerce',
  ],
  openGraph: {
    title: 'Rijul Soni — Software Engineer',
    description: 'Backend engineer: quick-commerce, tokenized payments, Node.js + MySQL.',
    type: 'website',
    url: 'https://rijul.dev',
    siteName: 'rijul.dev',
  },
  twitter: {
    card: 'summary',
    title: 'Rijul Soni — Software Engineer',
    description: 'Backend engineer: quick-commerce, tokenized payments, Node.js + MySQL.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/profile.jpg',
    apple: '/profile.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          geistSans.variable,
          jetbrainsMono.variable,
          'font-sans antialiased'
        )}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}