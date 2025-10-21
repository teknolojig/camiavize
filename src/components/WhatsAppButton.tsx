'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '905345208853';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="WhatsApp ile iletişime geçin"
    >
      {/* Main Button */}
      <div className="relative">
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl">
          <MessageCircle className="w-8 h-8 text-white" fill="white" />
        </div>

        {/* Ripple Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            WhatsApp ile iletişime geçin
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="w-2 h-2 bg-gray-800 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
