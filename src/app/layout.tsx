import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { generateOrganizationSchema } from "@/lib/metadata";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://camiavize.com'),
  title: {
    default: 'Cami Avizesi | Tavcam',
    template: '%s | Tavcam'
  },
  description: "Türkiye'nin önde gelen cami avizesi üreticisi. 38 yıllık tecrübe ile cami avize modelleri, özel tasarım ve uygun fiyatlar.",
  keywords: ['cami avizesi', 'cami avize', 'cami avizeleri', 'cami avize modelleri', 'cami aydınlatma', 'tavcam', 'cami avize fiyatları'],
  authors: [{ name: 'Tavcam' }],
  creator: 'Tavcam',
  publisher: 'Tavcam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://camiavize.com',
    siteName: 'Tavcam Cami Avizesi',
    title: 'Cami Avizesi | Tavcam',
    description: "Türkiye'nin önde gelen cami avizesi üreticisi. 38 yıllık tecrübe ile cami avize modelleri, özel tasarım ve uygun fiyatlar.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cami Avizesi | Tavcam',
    description: "Türkiye'nin önde gelen cami avizesi üreticisi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${openSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
