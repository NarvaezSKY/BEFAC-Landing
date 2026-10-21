import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { siteName, siteUrl } from '@/lib/seo'
import './globals.css'

const description =
  'Bachillerato formal de adultos del Cauca en Popayán y El Tambo. Con BEFAC termina tu bachillerato: más de 30 años formando jóvenes y adultos. Inscripciones abiertas.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'BEFAC | Bachillerato Formal de Adultos del Cauca – Popayán y El Tambo',
  description,
  keywords: [
    'befac',
    'bachillerato de adultos del cauca',
    'befac popayan',
    'bachillerato formal de adultos del cauca',
    'bachillerato adultos popayán',
    'bachillerato adultos el tambo',
    'bachillerato nocturno popayán',
    'educación de adultos cauca',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: siteUrl,
    siteName,
    locale: 'es_CO',
    type: 'website',
    title: 'BEFAC | Bachillerato Formal de Adultos del Cauca',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEFAC | Bachillerato Formal de Adultos del Cauca',
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5f1',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Bachillerato Formal de Adultos del Cauca',
  alternateName: 'BEFAC',
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    'Institución educativa mixta, privada y sin ánimo de lucro, fundada en junio de 1993 en Popayán. Ofrece bachillerato formal de adultos del Cauca en modalidad presencial y virtual para jóvenes mayores de 15 años y adultos.',
  foundingDate: '1993-06-01',
  founder: {
    '@type': 'Person',
    name: 'Jaime Giraldo Arbeláez',
  },
  telephone: '+573102324481',
  email: 'basededatosbefac@gmail.com',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Cauca, Colombia',
  },
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Popayán',
      addressRegion: 'Cauca',
      addressCountry: 'CO',
      streetAddress:
        'Avenida Aeropuerto, Colegio INEM Francisco José de Caldas',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'El Tambo',
      addressRegion: 'Cauca',
      addressCountry: 'CO',
    },
  ],
  sameAs: [
    'https://www.facebook.com/befacpopayan.befac',
    'https://www.tiktok.com/@befacsedeeltambo',
    'https://www.instagram.com/befactambo/',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
