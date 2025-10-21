'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';
import { companyInfo } from '@/data/company';
import QuoteModal from './QuoteModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar - Hidden when scrolled */}
        <div className={`border-b transition-all duration-300 text-sm overflow-hidden ${
          scrolled
            ? 'max-h-0 py-0 opacity-0 border-transparent'
            : 'max-h-20 py-2.5 opacity-100 border-white/20'
        }`}>
          <div className="flex flex-wrap justify-between items-center">
            <div className="hidden md:flex gap-6 items-center">
              <a
                href={`tel:${companyInfo.phone}`}
                className={`flex items-center gap-2 transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-[#C91E38]' : 'text-white/90 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className={`flex items-center gap-2 transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-[#C91E38]' : 'text-white/90 hover:text-white'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">{companyInfo.email}</span>
              </a>
            </div>
            <div className="flex gap-3 ml-auto">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-full transition-all ${
                  scrolled
                    ? 'hover:bg-gray-100 text-gray-600 hover:text-[#C91E38]'
                    : 'hover:bg-white/20 text-white/80 hover:text-white'
                }`}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-full transition-all ${
                  scrolled
                    ? 'hover:bg-gray-100 text-gray-600 hover:text-[#C91E38]'
                    : 'hover:bg-white/20 text-white/80 hover:text-white'
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-full transition-all ${
                  scrolled
                    ? 'hover:bg-gray-100 text-gray-600 hover:text-[#C91E38]'
                    : 'hover:bg-white/20 text-white/80 hover:text-white'
                }`}
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-12 w-40"
              >
                <Image
                  src={scrolled ? '/images/logos/logo.svg' : '/images/logos/logo-white.svg'}
                  alt="Tavcam Cami Avizesi"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-1 items-center">
              {[
                { href: '/', label: 'Ana Sayfa' },
                { href: '/hakkimizda', label: 'Hakkımızda' },
                { href: '/referanslar', label: 'Referanslarımız' },
                { href: '/iletisim', label: 'İletişim' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      scrolled
                        ? 'text-gray-700 hover:text-[#C91E38] hover:bg-gray-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="ml-4 bg-gradient-to-r from-[#C91E38] to-[#a01829] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Teklif Al
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <ul className="mt-4 space-y-1 pb-4">
                  {[
                    { href: '/', label: 'Ana Sayfa' },
                    { href: '/hakkimizda', label: 'Hakkımızda' },
                    { href: '/referanslar', label: 'Referanslarımız' },
                    { href: '/iletisim', label: 'İletişim' },
                  ].map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                          scrolled
                            ? 'text-gray-700 hover:bg-gray-50 hover:text-[#C91E38]'
                            : 'text-white hover:bg-white/10'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      className="w-full bg-gradient-to-r from-[#C91E38] to-[#a01829] text-white px-4 py-3 rounded-lg font-semibold text-center"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setIsQuoteModalOpen(true);
                      }}
                    >
                      Teklif Al
                    </button>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </header>
  );
}
