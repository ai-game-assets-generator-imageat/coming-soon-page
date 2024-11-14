import './globals.css'
import { Space_Mono } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import Head from 'next/head'

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "Home - IMAGEAT AI Coming Soon!",
  description: 'We are building a SaaS product to help game developers for their image generation needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <body className={`${spaceMono.className} bg-gray-200 min-h-screen dark:bg-[#0d1117]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>          
          <main className='main'>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
