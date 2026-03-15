import { Providers } from './providers'
import AppLayout from '@/components/AppLayout'
import './globals.css'

export const metadata = {
  title: 'FlexFlow Studio — Transform Your Fitness Journey',
  description: 'FlexFlow Studio brings you the perfect blend of in-person training and online flexibility.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  )
}
