'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reference } from '@/data/references';

interface ReferenceDetailProps {
  reference: Reference;
  relatedProjects: Reference[];
}

export default function ReferenceDetail({ reference, relatedProjects }: ReferenceDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === reference.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? reference.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#252d5e] to-[#1a2045] text-white pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="text-sm mb-6 flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-gray-300 transition">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/referanslar" className="hover:text-gray-300 transition">Referanslar</Link>
              <span>/</span>
              <span className="text-gray-300">{reference.title}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-white/10 text-white text-sm px-4 py-1 rounded-full mb-4">
                {reference.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {reference.title}
              </h1>
              {reference.location && (
                <p className="text-xl text-gray-200 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {reference.location}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Gallery - 2 columns */}
              <div className="lg:col-span-2">
                {/* Main Image */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative h-[500px] rounded-xl overflow-hidden mb-4 cursor-pointer group"
                  onClick={() => setIsGalleryOpen(true)}
                >
                  <Image
                    src={reference.images[selectedImageIndex]}
                    alt={`${reference.title} - Görsel ${selectedImageIndex + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold transition-opacity">
                      Büyütmek için tıklayın
                    </span>
                  </div>
                </motion.div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-3">
                  {reference.images.map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-2 transition ${
                        index === selectedImageIndex
                          ? 'border-[#C91E38]'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={img}
                        alt={`${reference.title} - Küçük görsel ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Description */}
                {reference.fullDescription && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#252d5e] mb-4">
                      Proje Hakkında
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {reference.fullDescription}
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar - 1 column */}
              <div className="space-y-6">
                {/* Project Info */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#252d5e] mb-4">
                    Proje Bilgileri
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">Proje:</span>
                      <span className="text-gray-600 text-right">{reference.title}</span>
                    </li>
                    {reference.location && (
                      <li className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-semibold text-gray-700">Konum:</span>
                        <span className="text-gray-600">{reference.location}</span>
                      </li>
                    )}
                    {reference.year && (
                      <li className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-semibold text-gray-700">Yıl:</span>
                        <span className="text-gray-600">{reference.year}</span>
                      </li>
                    )}
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">Kategori:</span>
                      <span className="text-gray-600">{reference.category}</span>
                    </li>
                  </ul>
                </div>

                {/* Specifications */}
                {reference.specifications && (
                  <div className="bg-gradient-to-br from-[#252d5e] to-[#1a2045] text-white p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Teknik Özellikler</h3>
                    <div className="space-y-3 text-sm">
                      {reference.specifications.style && (
                        <div>
                          <div className="font-semibold text-gray-300">Stil:</div>
                          <div>{reference.specifications.style}</div>
                        </div>
                      )}
                      {reference.specifications.colors && reference.specifications.colors.length > 0 && (
                        <div>
                          <div className="font-semibold text-gray-300">Renkler:</div>
                          <div>{reference.specifications.colors.join(', ')}</div>
                        </div>
                      )}
                      {reference.specifications.capacity && (
                        <div>
                          <div className="font-semibold text-gray-300">Kapasite:</div>
                          <div>{reference.specifications.capacity}</div>
                        </div>
                      )}
                      {reference.specifications.mainChandeliers && reference.specifications.mainChandeliers.length > 0 && (
                        <div>
                          <div className="font-semibold text-gray-300 mb-2">Avizeler:</div>
                          <ul className="space-y-1">
                            {reference.specifications.mainChandeliers.map((chandelier, index) => (
                              <li key={index} className="text-xs pl-2">
                                • {chandelier.quantity && `${chandelier.quantity} adet`} {chandelier.diameter && `${chandelier.diameter}`} {chandelier.type && `(${chandelier.type})`}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {reference.specifications.wallSconces && (
                        <div>
                          <div className="font-semibold text-gray-300">Duvar Aplikler:</div>
                          <div>{reference.specifications.wallSconces.quantity} adet {reference.specifications.wallSconces.material && `(${reference.specifications.wallSconces.material})`}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Features */}
                {reference.features && reference.features.length > 0 && (
                  <div className="bg-white border-2 border-[#252d5e] p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-[#252d5e] mb-4">Özellikler</h3>
                    <ul className="space-y-2">
                      {reference.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="w-5 h-5 text-[#C91E38] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-br from-[#C91E38] to-[#a01829] text-white p-6 rounded-xl text-center">
                  <h3 className="text-lg font-bold mb-2">Benzer Bir Proje mi İstiyorsunuz?</h3>
                  <p className="text-sm mb-4 text-white/90">Ücretsiz keşif ve danışmanlık için iletişime geçin</p>
                  <Link
                    href="/iletisim"
                    className="inline-block bg-white text-[#C91E38] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
                  >
                    Teklif Alın
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Gallery */}
      {isGalleryOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsGalleryOpen(false)}
        >
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-gray-300 transition"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-gray-300 transition"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={reference.images[selectedImageIndex]}
              alt={`${reference.title} - Görsel ${selectedImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImageIndex + 1} / {reference.images.length}
          </div>
        </motion.div>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#252d5e] mb-12">
                Diğer Projelerimiz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/referanslar/${project.slug}`}
                      className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                    >
                      <div className="relative h-48">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-[#252d5e] mb-2 group-hover:text-[#C91E38] transition">
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
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#C91E38] to-[#a01829] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sizin de Projeniz İçin Teklif Alın
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Cami avizesi projeniz için ücretsiz keşif ve danışmanlık hizmeti
            </p>
            <Link
              href="/iletisim"
              className="inline-block bg-white text-[#C91E38] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all"
            >
              İletişime Geçin
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
