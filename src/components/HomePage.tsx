'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Award,
  Users,
  TrendingUp,
  Search,
  Palette,
  DollarSign,
  ArrowRight,
  Star,
  Building2,
  MapPin,
  Phone,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { features, testimonials, companyInfo } from '@/data/company';
import { references } from '@/data/references';
import QuoteModal from './QuoteModal';

const iconMap: Record<string, LucideIcon> = {
  quality: Award,
  customer: Users,
  experience: TrendingUp,
  inspection: Search,
  design: Palette,
  price: DollarSign,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#252d5e]/95 via-[#1a2045]/90 to-[#252d5e]/95 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
              filter: 'blur(2px)',
            }}
          />
          {/* Animated particles effect - only render on client */}
          {mounted && (
            <div className="absolute inset-0 z-10 opacity-30">
              {[...Array(20)].map((_, i) => {
                const initialX = Math.random() * window.innerWidth;
                const initialY = Math.random() * window.innerHeight;
                const endY = Math.random() * window.innerHeight;
                const duration = Math.random() * 10 + 10;

                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{
                      x: initialX,
                      y: initialY,
                    }}
                    animate={{
                      y: [initialY, endY],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-[#C91E38] to-[#a01829] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                {companyInfo.experience} YILLIK TECRÜBE
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              Cami Avizesi ile
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">
                Estetiği ve İşlevselliği
              </span>
              <br />
              Birleştiriyoruz
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Türkiye&apos;nin öncü cami avizesi üreticisi olarak, ibadet mekanlarınıza özel tasarım
              aydınlatma çözümleri sunuyoruz
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="group bg-gradient-to-r from-[#C91E38] to-[#a01829] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#C91E38]/50 transition-all duration-300 flex items-center gap-2"
              >
                Ücretsiz Teklif Al
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/referanslar"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Referanslarımız
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { value: '38+', label: 'Yıl Tecrübe' },
                { value: '500+', label: 'Tamamlanan Proje' },
                { value: '40+', label: 'İhracat Ülkesi' },
                { value: '%100', label: 'Müşteri Memnuniyeti' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#252d5e] mb-4">
              Neden Tavcam?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cami avizesi üretiminde fark yaratan özelliklerimiz
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C91E38] to-[#a01829] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#252d5e] mb-4 group-hover:text-[#C91E38] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#252d5e] mb-4">
              Cami Avizesi Projelerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye genelinde tamamladığımız cami avizesi projeleri ve referans çalışmalarımız
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {references.slice(0, 6).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link
                  href={`/referanslar/${project.slug}`}
                  className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#252d5e]/10 text-[#252d5e] text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#252d5e] mb-2 group-hover:text-[#C91E38] transition-colors">
                      {project.title}
                    </h3>
                    {project.location && (
                      <p className="text-gray-600 text-sm flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/referanslar"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C91E38] to-[#a01829] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Tüm Referansları Görüntüle
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#252d5e] mb-4">
              Müşterilerimizin Görüşleri
            </h2>
            <p className="text-xl text-gray-600">
              Başarılı projelerimiz hakkında neler düşünüyorlar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C91E38] to-[#a01829] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-[#252d5e]">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#252d5e] via-[#1a2045] to-[#252d5e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cami Avizesi Projeniz İçin Hemen Teklif Alın
            </h2>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              Ücretsiz keşif ve danışmanlık hizmeti için bizimle iletişime geçin.
              Profesyonel ekibimiz size en uygun çözümü sunmaya hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#C91E38] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Ücretsiz Teklif Al
              </button>
              <Link
                href="/referanslar"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Projelerimizi İncele
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
