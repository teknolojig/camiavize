import { generatePageMetadata, generateLocalBusinessSchema } from '@/lib/metadata';
import { seoData } from '@/data/seo';
import HomePage from '@/components/HomePage';

export const metadata = generatePageMetadata(seoData.home, '/');

export default function Page() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HomePage />
    </>
  );
}
