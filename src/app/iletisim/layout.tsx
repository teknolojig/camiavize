import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { seoData } from '@/data/seo';

export const metadata: Metadata = generatePageMetadata(seoData.contact, '/iletisim');

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
