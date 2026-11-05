import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://kh-negafa-toulouse-2.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "K.H Négafa Toulouse — Negafa & Location Robes Traditionnelles",
    template: "%s | K.H Négafa Toulouse",
  },
  description:
    "Prestataire Negafa haut de gamme à Toulouse. Location de caftans, takchitas et karakous pour mariages maghrébins. Sur rendez-vous uniquement. ☎ 07 44 73 38 11",
  keywords: [
    'negafa toulouse', 'negafa', 'negafa toulouse mariage',
    'location caftan toulouse', 'location takchita toulouse',
    'location robe mariage maghrébin toulouse',
    'robe mariée algérienne toulouse', 'robe mariée marocaine toulouse',
    'karakou toulouse', 'caftan toulouse', 'takchita toulouse',
    'prestataire negafa toulouse', 'coiffure negafa toulouse',
    'mariage maghrébin toulouse', 'location robe traditionnelle toulouse',
  ],
  authors: [{ name: 'K.H Négafa Toulouse' }],
  creator: 'K.H Négafa Toulouse',
  publisher: 'K.H Négafa Toulouse',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'K.H Négafa Toulouse',
    title: "K.H Négafa Toulouse — Negafa & Location Robes Traditionnelles",
    description:
      "Prestataire Negafa haut de gamme à Toulouse. Location de caftans, takchitas et karakous pour mariages maghrébins. Sur rendez-vous uniquement.",
    images: [{ url: '/images/logo-kh-negefa.png', width: 400, height: 400, alt: 'K.H Négafa Toulouse' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "K.H Négafa Toulouse — Negafa & Location Robes Traditionnelles",
    description: "Prestataire Negafa haut de gamme à Toulouse. Location de caftans, takchitas et karakous.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'K.H Négafa Toulouse',
  description: 'Prestataire Negafa haut de gamme et location de robes traditionnelles maghrébines à Toulouse.',
  url: siteUrl,
  telephone: '+33744733811',
  email: 'kreri.ridwane31@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toulouse',
    addressRegion: 'Occitanie',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.6047,
    longitude: 1.4442,
  },
  areaServed: { '@type': 'City', name: 'Toulouse' },
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    description: 'Sur rendez-vous uniquement',
  },
  serviceType: ['Prestation Negafa', 'Location de robes de mariée', 'Location caftan', 'Location takchita', 'Location karakou'],
  image: `${siteUrl}/images/logo-kh-negefa.png`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-dark antialiased">{children}</body>
    </html>
  );
}
