import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BEFAC | Bachillerato Formal de Adultos del Cauca',
  description: 'Termina tu bachillerato y abre nuevas oportunidades con BEFAC. Educación que transforma historias en el Cauca.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BEFACLogo-vRpZ4Po3wmRnlRVfesTBGoYVgVNznG.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BEFACLogo-vRpZ4Po3wmRnlRVfesTBGoYVgVNznG.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
