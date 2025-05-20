import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-600 to-pink-600">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="https://facebook.com" className="text-white hover:text-blue-400">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="https://www.instagram.com/viratlifehospital?igsh=d2Vvajl3Y3h0eDJm" className="text-white hover:text-pink-400">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="https://wa.me/917765956416" className="text-white hover:text-green-400">
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-white">
            &copy; {new Date().getFullYear()} Viratlife Institute of Medical Science (VIMS), Patna. All rights reserved.
          </p>
        </div>
          <div className="mt-4 text-center text-sm text-white leading-5">
            <div className="flex justify-center space-x-2 text-xl p-4">
            <p className="font-bold">Viratlife Institute of Medical Science (VIMS)</p>
            </div>
            <p>Emergency: +91 77659 56416</p>
            <p>Email: info@viratlifehospital.com</p>
            <p>Address: Patna, Bihar, India</p>
          </div>
      </div>
    </footer>
  );
} 