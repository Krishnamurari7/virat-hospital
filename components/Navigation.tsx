'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Departments', href: '/departments' },
  // { name: 'Doctors', href: '/doctors' },
  // { name: 'College', href: '/college' },
  { name: 'Contact', href: '/contact' },
  { name: 'Gallery', href: '/gallery' },

];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-purple-600 to-pink-600 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        

        {/* Mobile menu button */}
        <div className="flex lg:hidden ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white transition hover:scale-110"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12 lg:flex-1 lg:justify-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-yellow-300 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Book Appointment Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/apply"
            className="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-white/30 transition-all duration-300 backdrop-blur-md"
          >
            Apply Now
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-3/4 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 p-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold text-white">Virat Life</span>
            </Link>
            <button
              type="button"
              className="text-white hover:scale-110 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/20">
              <div className="space-y-4 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/appointment"
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/10 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
