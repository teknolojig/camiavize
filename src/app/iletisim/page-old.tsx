'use client';

import { useState } from 'react';
import { generateBreadcrumbSchema } from '@/lib/metadata';
import { companyInfo } from '@/data/company';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'İletişim', url: '/iletisim' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#252d5e] to-[#1a2045] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              İletişim
            </h1>
            <p className="text-xl text-gray-200">
              Cami avizesi projeniz için bizimle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-[#252d5e] mb-6">
                  Tavcam ile İletişime Geçin
                </h2>
                <p className="text-gray-700 mb-8">
                  Cami avizesi ve cami aydınlatma sistemleri hakkında detaylı bilgi almak,
                  ücretsiz keşif talebi oluşturmak veya teklif almak için aşağıdaki bilgilerden
                  faydalanabilirsiniz.
                </p>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#252d5e] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-[#252d5e] mb-1">Adres</h3>
                      <p className="text-gray-700">{companyInfo.address.full}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#252d5e] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="font-bold text-[#252d5e] mb-1">Telefon</h3>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-gray-700 hover:text-[#C91E38]"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#252d5e] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-bold text-[#252d5e] mb-1">E-posta</h3>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-gray-700 hover:text-[#C91E38]"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#252d5e] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      🕐
                    </div>
                    <div>
                      <h3 className="font-bold text-[#252d5e] mb-1">Çalışma Saatleri</h3>
                      <p className="text-gray-700">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-bold text-[#252d5e] mb-4">Sosyal Medya</h3>
                  <div className="flex gap-4">
                    <a
                      href={companyInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#252d5e] text-white rounded-full flex items-center justify-center hover:bg-[#C91E38] transition"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                    <a
                      href={companyInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#252d5e] text-white rounded-full flex items-center justify-center hover:bg-[#C91E38] transition"
                      aria-label="Instagram"
                    >
                      📷
                    </a>
                    <a
                      href={companyInfo.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#252d5e] text-white rounded-full flex items-center justify-center hover:bg-[#C91E38] transition"
                      aria-label="YouTube"
                    >
                      ▶
                    </a>
                    <a
                      href={companyInfo.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#252d5e] text-white rounded-full flex items-center justify-center hover:bg-[#C91E38] transition"
                      aria-label="Twitter"
                    >
                      𝕏
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-[#252d5e] mb-6">
                  İletişim Formu
                </h2>
                <p className="text-gray-700 mb-6">
                  Tavcam ile iletişime geçmek için aşağıdaki formu kullanabilirsiniz.
                </p>

                {submitMessage && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Adınız *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C91E38]"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C91E38]"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Konu *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C91E38]"
                      placeholder="Mesaj konusu"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      İletiniz (Tercihe Bağlı)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C91E38]"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C91E38] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a01829] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'FORMU GÖNDER'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#252d5e] mb-8">
            Konumumuz
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Google Maps konumu buraya eklenecek</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

