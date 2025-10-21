import { Metadata } from 'next';
import { SEOData } from '@/data/seo';

export function generatePageMetadata(seoData: SEOData, pathname: string = '/'): Metadata {
  const baseUrl = 'https://camiavize.com';
  const url = `${baseUrl}${pathname}`;

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    authors: [{ name: 'Tavcam' }],
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: url,
      siteName: 'Tavcam Cami Avizesi',
      images: seoData.ogImage ? [
        {
          url: seoData.ogImage,
          width: 1200,
          height: 630,
          alt: seoData.title,
        }
      ] : [],
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      images: seoData.ogImage ? [seoData.ogImage] : [],
    },
    alternates: {
      canonical: url,
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
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tavcam Cami Avizesi',
    url: 'https://camiavize.com',
    logo: 'https://camiavize.com/images/logos/logo.png',
    description: '38 yıllık tecrübesiyle Türkiye\'nin önde gelen cami avizesi üreticisi',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Esentepe Mahallesi Avizeciler Sanayi Sitesi 2970 Sokak No:2/4',
      addressLocality: 'Sultangazi',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-444-88-26',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    },
    sameAs: [
      'https://facebook.com/tavcamistanbul',
      'https://instagram.com/tavcamistanbul',
      'https://youtube.com/tavcamistanbul',
      'https://twitter.com/tavcamistanbul',
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://camiavize.com${item.url}`,
    })),
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://camiavize.com${product.image}`,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Tavcam',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Tavcam',
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://camiavize.com',
    name: 'Tavcam Cami Avizesi',
    image: 'https://camiavize.com/images/logos/logo.svg',
    description: '38 yıllık tecrübesiyle Türkiye\'nin önde gelen cami avizesi üreticisi',
    url: 'https://camiavize.com',
    telephone: '+90-444-88-26',
    email: 'info@tavcamavize.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Esentepe Mahallesi Avizeciler Sanayi Sitesi 2970 Sokak No:2/4',
      addressLocality: 'Sultangazi',
      addressRegion: 'İstanbul',
      postalCode: '34265',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.096413,
      longitude: 28.882915,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    sameAs: [
      'https://facebook.com/tavcamistanbul',
      'https://instagram.com/tavcamistanbul',
      'https://youtube.com/tavcamistanbul',
      'https://twitter.com/tavcamistanbul',
    ],
  };
}
