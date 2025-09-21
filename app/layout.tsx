import { Inter, JetBrains_Mono } from 'next/font/google'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: 'Pavel Tagiev | Portfolio',
  description: '17-year-old vibe-coder, AI-enthusiast, and ex-pat exploring the world through code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
} 