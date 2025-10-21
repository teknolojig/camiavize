import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/metadata';
import { seoData } from '@/data/seo';
import { references } from '@/data/references';

export const metadata = generatePageMetadata(seoData.references, '/referanslar');

export default function ReferencesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Referanslarımız', url: '/referanslar' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#252d5e] to-[#1a2045] text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cami Avizesi Referanslarımız
            </h1>
            <p className="text-xl text-gray-200">
              Türkiye genelinde tamamladığımız cami avizesi projeleri ve başarılı işlerimiz
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              38 yıllık tecrübemizle İstanbul başta olmak üzere Türkiye&apos;nin dört bir yanında
              500&apos;den fazla cami avizesi projesi tamamladık. Her biri özenle tasarlanmış ve
              üretilmiş projelerimizden bazılarını aşağıda görebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {references.map((project) => (
              <Link
                key={project.id}
                href={`/referanslar/${project.slug}`}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-72 bg-gray-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-[#252d5e] text-white text-xs px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#252d5e] mb-2 group-hover:text-[#C91E38] transition">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <span>📍</span> {project.location}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#252d5e] to-[#1a2045] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Cami Avizesi Projelerimizde Rakamlar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg text-gray-200">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">38</div>
                <div className="text-lg text-gray-200">Yıllık Tecrübe</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">%100</div>
                <div className="text-lg text-gray-200">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#252d5e] mb-4">
            Cami Avizesi Projeniz İçin Teklif Alın
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Özel tasarım cami avizesi ve aydınlatma çözümleri için hemen bizimle iletişime geçin.
            Ücretsiz keşif ve danışmanlık hizmetimizden faydalanın.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-[#C91E38] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a01829] transition"
            >
              Ücretsiz Teklif Al
            </Link>
            <Link
              href="/hakkimizda"
              className="bg-[#252d5e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a2045] transition"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
