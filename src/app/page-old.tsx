import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { seoData } from '@/data/seo';
import { features, testimonials, companyInfo } from '@/data/company';
import { references } from '@/data/references';

export const metadata = generatePageMetadata(seoData.home, '/');

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#252d5e] to-[#1a2045] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cami Avizesi ile Estetiği ve İşlevselliği Birleştiriyoruz
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {companyInfo.experience} yıllık tecrübemizle, cami avizesi tasarımı ve üretiminde Türkiye&apos;nin öncü firmasıyız
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-[#C91E38] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a01829] transition"
              >
                Ücretsiz Teklif Al
              </Link>
              <Link
                href="/referanslar"
                className="bg-white text-[#252d5e] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
              >
                Referanslarımız
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#252d5e] mb-6">
              Cami Avizesi Üretiminde Kalite ve Güven
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              İbadet mekanları için kaliteli aydınlatma çözümleri sunarak, müşteri memnuniyetini
              her zaman önceliğimiz olarak görüyoruz. Cami avizesi tasarımlarımızda estetik ve
              fonksiyonelliği bir araya getiriyoruz.
            </p>
            <Link
              href="/hakkimizda"
              className="inline-block bg-[#252d5e] text-white px-6 py-3 rounded hover:bg-[#1a2045] transition"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#252d5e] mb-12">
            Neden Tavcam?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">
                  {feature.icon === 'quality' && '⭐'}
                  {feature.icon === 'customer' && '👥'}
                  {feature.icon === 'experience' && '🏆'}
                  {feature.icon === 'inspection' && '🔍'}
                  {feature.icon === 'design' && '🎨'}
                  {feature.icon === 'price' && '💰'}
                </div>
                <h3 className="text-xl font-bold text-[#252d5e] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#252d5e] mb-4">
            Cami Avizesi Projelerimiz
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Türkiye genelinde tamamladığımız cami avizesi projeleri ve referans çalışmalarımız
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.slice(0, 6).map((project) => (
              <Link
                key={project.id}
                href={`/referanslar/${project.slug}`}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Proje Görseli
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#252d5e] mb-2 group-hover:text-[#C91E38] transition">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="text-gray-600 text-sm mb-2">📍 {project.location}</p>
                  )}
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/referanslar"
              className="inline-block bg-[#C91E38] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a01829] transition"
            >
              Tüm Referansları Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-[#252d5e] to-[#1a2045] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">{companyInfo.experience}+</div>
              <div className="text-xl">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-xl">İhracat Ülkesi</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">%100</div>
              <div className="text-xl">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#252d5e] mb-12">
            Müşterilerimizin Görüşleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <div className="font-bold text-[#252d5e]">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C91E38] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cami Avizesi Projeniz İçin Hemen Teklif Alın
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif ve danışmanlık hizmeti için bizimle iletişime geçin
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-[#C91E38] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Ücretsiz Teklif Al
          </Link>
        </div>
      </section>
    </>
  );
}
