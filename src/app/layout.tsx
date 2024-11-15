import './globals.css'
import { Space_Mono } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import Head from 'next/head'

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "IMAGEAT AI Coming Soon! - Image Generation Tool",
  description: 'We are building a SaaS product to help game developers for their image generation needs.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body className={`${spaceMono.className} bg-gray-200 min-h-screen dark:bg-[#0d1117]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>          
          <main className='main'>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
