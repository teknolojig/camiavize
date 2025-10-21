import Link from 'next/link';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/metadata';
import { seoData } from '@/data/seo';
import { companyInfo } from '@/data/company';

export const metadata = generatePageMetadata(seoData.about, '/hakkimizda');

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Hakkımızda', url: '/hakkimizda' },
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
              Tavcam Hakkında
            </h1>
            <p className="text-xl text-gray-200">
              {companyInfo.experience} yıllık tecrübe ile cami avizesi üretiminde öncüyüz
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-[#252d5e] mb-6">
                Işıkla Yolculuğumuz
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Avize ve aydınlatma ürünlerimizle başlayan yolculuğumuz, çok yönlü proje
                tasarımları ve uygulamalarıyla ışığa dönüştü. Cam, avize ve aydınlatma
                ürünlerinde kendi tasarımlarımızı Amerika&apos;dan Japonya&apos;ya kadar
                40&apos;tan fazla ülkeye ihraç ediyoruz.
              </p>

              <h2 className="text-3xl font-bold text-[#252d5e] mb-6 mt-12">
                Değerlerimiz ve Kimliğimiz
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                TAVCAM olarak, özel tasarım aydınlatma ve el işçiliği cam sanatı üretiminde
                öncü bir kuruluşuz. Geleneksel zanaat değerlerini koruyarak, gerektiğinde
                en son teknolojileri kullanarak ürünlerimizi üretiyoruz. El işçiliği cam
                ve dekoratif aydınlatma sektörlerinde Türkiye&apos;yi uluslararası arenada
                temsil ediyoruz.
              </p>

              <div className="bg-gray-50 p-8 rounded-lg my-8">
                <blockquote className="text-xl text-[#252d5e] italic border-l-4 border-[#C91E38] pl-6">
                  &quot;El emeği sanat eseri ürünlerimizle sadece Türkiye&apos;de değil tüm dünyada,
                  hayatın karanlık kalan taraflarına ışık tutuyoruz.&quot;
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-[#252d5e] mb-6 mt-12">
                Büyüme Felsefemiz
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Temel değerlerimiz, büyümemizi ve başarımızı yönlendirmiştir. Tutkuyla ve
                coşkuyla ürettiğimiz ürünlerimiz, ışıkla etkileşime giren el işçiliği cam
                ürünlerdir. Tekliflerimiz, günlük kullanım eşyalarının ötesinde özel projeler
                ve koleksiyonları da içermektedir.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gradient-to-br from-[#252d5e] to-[#1a2045] text-white rounded-lg">
                <div className="text-5xl font-bold mb-2">{companyInfo.experience}+</div>
                <div className="text-lg">Yıllık Tecrübe</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#C91E38] to-[#a01829] text-white rounded-lg">
                <div className="text-5xl font-bold mb-2">40+</div>
                <div className="text-lg">İhracat Ülkesi</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#252d5e] to-[#1a2045] text-white rounded-lg">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg">Tamamlanan Proje</div>
              </div>
            </div>

            {/* Values */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-[#252d5e] mb-8 text-center">
                Temel Değerlerimiz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-[#C91E38] pl-6 py-4">
                  <h3 className="text-xl font-bold text-[#252d5e] mb-2">Kalite</h3>
                  <p className="text-gray-700">
                    En yüksek kalite standartlarında cami avizesi üretimi
                  </p>
                </div>
                <div className="border-l-4 border-[#C91E38] pl-6 py-4">
                  <h3 className="text-xl font-bold text-[#252d5e] mb-2">Müşteri Odaklılık</h3>
                  <p className="text-gray-700">
                    Müşteri memnuniyetini her zaman önceliğimiz olarak görüyoruz
                  </p>
                </div>
                <div className="border-l-4 border-[#C91E38] pl-6 py-4">
                  <h3 className="text-xl font-bold text-[#252d5e] mb-2">İnovasyon</h3>
                  <p className="text-gray-700">
                    Geleneksel zanaat ile modern teknolojiyi birleştiriyoruz
                  </p>
                </div>
                <div className="border-l-4 border-[#C91E38] pl-6 py-4">
                  <h3 className="text-xl font-bold text-[#252d5e] mb-2">Güvenilirlik</h3>
                  <p className="text-gray-700">
                    38 yıldır sektörde güvenilir hizmet sunuyoruz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#252d5e] mb-4">
            Cami Avizesi Projeniz İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Profesyonel ekibimiz, cami avizesi ihtiyaçlarınız için size en uygun çözümü sunmaya hazır
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-[#C91E38] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a01829] transition"
            >
              İletişime Geç
            </Link>
            <Link
              href="/referanslar"
              className="bg-[#252d5e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a2045] transition"
            >
              Projelerimizi İncele
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
