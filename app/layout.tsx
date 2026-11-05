import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "K.H Négafa Toulouse — L'art et le prestige de sublimer votre union",
  description:
    'Prestation Negafa premium et location de robes de mariées traditionnelles maghrébines. Caftans, takchitas, karakous et parures d\'exception pour votre grand jour.',
  keywords:
    'negafa, caftan, takchita, karakou, robe mariage maghrébin, algérien, marocain, location robe mariée, parure bijoux, amaria',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-cream text-dark antialiased">{children}</body>
    </html>
  );
}
