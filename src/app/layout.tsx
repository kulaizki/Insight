import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Header } from '@/components/ui/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Insight',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col items-center gap-20 px-8'>
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
