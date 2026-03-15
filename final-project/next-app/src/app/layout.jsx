import { Providers } from './providers'
import AppLayout from '@/components/AppLayout'
import './globals.css'

export const metadata = {
  title: 'The Less — Next.js',
  description: 'Simplicity is the Ultimate Sophistication.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  )
}
