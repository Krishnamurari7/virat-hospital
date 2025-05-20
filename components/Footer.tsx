import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="https://facebook.com" className="text-gray-400 hover:text-blue-400">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="https://www.instagram.com/viratlifehospital?igsh=d2Vvajl3Y3h0eDJm" className="text-gray-400 hover:text-pink-400">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="https://wa.me/917765956416" className="text-gray-400 hover:text-green-400">
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Virat Life Hospital Patna. All rights reserved.
          </p>
        </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            <p>Emergency: +91 1234567890</p>
            <p>Email: info@viratlifehospital.com</p>
            <p>Address: Patna, Bihar, India</p>
          </div>
      </div>
    </footer>
  );
} 