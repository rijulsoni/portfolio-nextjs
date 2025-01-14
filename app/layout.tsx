import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Rijul Soni - Software Engineer',
  description: 'Portfolio of Rijul Soni, a passionate software engineer specializing in web development.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>

      </head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
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

