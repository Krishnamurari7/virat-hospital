'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
} 