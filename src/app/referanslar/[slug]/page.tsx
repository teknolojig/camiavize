import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { references } from '@/data/references';
import { generateBreadcrumbSchema, generateProductSchema } from '@/lib/metadata';
import ReferenceDetail from '@/components/ReferenceDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return references.map((ref) => ({
    slug: ref.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const reference = references.find((ref) => ref.slug === slug);

  if (!reference) {
    return {
      title: 'Proje Bulunamadı | Tavcam',
    };
  }

  return {
    title: `${reference.title} - Cami Avizesi Projesi | Tavcam`,
    description: reference.description,
    keywords: [
      'cami avizesi',
      'cami avize',
      reference.title,
      reference.location || '',
      'cami aydınlatma',
      'tavcam'
    ].filter(Boolean),
    openGraph: {
      title: `${reference.title} - Cami Avizesi Projesi`,
      description: reference.description,
      images: [reference.image],
      type: 'article',
    },
  };
}

export default async function ReferenceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const reference = references.find((ref) => ref.slug === slug);

  if (!reference) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Referanslarımız', url: '/referanslar' },
    { name: reference.title, url: `/referanslar/${reference.slug}` },
  ]);

  const productSchema = generateProductSchema({
    name: reference.title,
    description: reference.description,
    image: reference.image,
    category: reference.category,
  });

  // Get related projects
  const relatedProjects = references
    .filter((ref) => ref.id !== reference.id)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <ReferenceDetail reference={reference} relatedProjects={relatedProjects} />
    </>
  );
}
