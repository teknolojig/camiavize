'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram, Youtube } from 'lucide-react';

// X (Twitter) SVG Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: companyInfo.address.full,
      link: null,
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: companyInfo.phone,
      link: `tel:${companyInfo.phone}`,
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cumartesi: 09:00 - 18:00',
      link: null,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#252d5e] via-[#1a2045] to-[#252d5e] text-white pt-32 pb-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              İletişim
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Cami avizesi projeniz için bizimle iletişime geçin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#252d5e] mb-4">
                  Tavcam ile İletişime Geçin
                </h2>
                <p className="text-lg text-gray-700 mb-10">
                  Cami avizesi ve cami aydınlatma sistemleri hakkında detaylı bilgi almak,
                  ücretsiz keşif talebi oluşturmak veya teklif almak için aşağıdaki bilgilerden
                  faydalanabilirsiniz.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-14 h-14 bg-gradient-to-br from-[#C91E38] to-[#a01829] text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#252d5e] mb-2 text-lg">{item.title}</h3>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-gray-700 hover:text-[#C91E38] transition-colors leading-relaxed"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-700 leading-relaxed">{item.content}</p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social Media */}
                <div className="mt-10 pt-10 border-t border-gray-200">
                  <h3 className="font-bold text-[#252d5e] mb-6 text-lg">Sosyal Medya</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Facebook, url: companyInfo.social.facebook, label: 'Facebook', isCustom: false },
                      { icon: Instagram, url: companyInfo.social.instagram, label: 'Instagram', isCustom: false },
                      { icon: Youtube, url: companyInfo.social.youtube, label: 'YouTube', isCustom: false },
                      { icon: null, url: companyInfo.social.twitter, label: 'X (Twitter)', isCustom: true },
                    ].map((social) => {
                      const SocialIcon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-[#252d5e] text-white rounded-full flex items-center justify-center hover:bg-[#C91E38] hover:scale-110 transition-all"
                          aria-label={social.label}
                        >
                          {social.isCustom ? (
                            <XIcon className="w-5 h-5" />
                          ) : (
                            SocialIcon && <SocialIcon className="w-5 h-5" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#252d5e] mb-4">
                  İletişim Formu
                </h2>
                <p className="text-gray-700 mb-8">
                  Tavcam ile iletişime geçmek için aşağıdaki formu kullanabilirsiniz.
                </p>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 rounded-lg mb-6 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{submitMessage}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Adınız *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#C91E38] transition-colors"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#C91E38] transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                      Konu *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#C91E38] transition-colors"
                      placeholder="Mesaj konusu"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      İletiniz (Tercihe Bağlı)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#C91E38] transition-colors resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#C91E38] to-[#a01829] text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>FORMU GÖNDER</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#252d5e] mb-4">
              Konumumuz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sultangazi, İstanbul&apos;da bulunan fabrikamızı ziyaret edebilirsiniz
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58380.96974718488!2d28.882915000000004!3d41.096413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1ca874b52fd%3A0xb6f76176ea4f1278!2sTAVCAM!5e1!3m2!1str!2sus!4v1761068815646!5m2!1str!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tavcam Konumu"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
