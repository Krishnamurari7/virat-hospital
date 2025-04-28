'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';

const backgroundImages = [
  '/images/images1.avif',
  '/images/images2.avif',
  '/images/images3.avif',
];

const departments = [
  {
    name: 'Cardiology',
    description: 'Comprehensive care for heart-related conditions with advanced diagnostic and treatment facilities.',
    head: 'Dr. Rajesh Kumar',
  },
  {
    name: 'Neurology',
    description: 'Expert care for neurological disorders and conditions affecting the brain and nervous system.',
    head: 'Dr. Priya Sharma',
  },
  {
    name: 'Orthopedics',
    description: 'Specialized care for bone and joint disorders, sports injuries, and rehabilitation.',
    head: 'Dr. Amit Singh',
  },
  {
    name: 'Pediatrics',
    description: 'Comprehensive healthcare for children from birth through adolescence.',
    head: 'Dr. Neha Gupta',
  },
  {
    name: 'Gynecology',
    description: 'Specialized care for women\'s health, pregnancy, and reproductive system.',
    head: 'Dr. Sunita Verma',
  },
  {
    name: 'Dermatology',
    description: 'Expert care for skin conditions, hair disorders, and cosmetic procedures.',
    head: 'Dr. Vikram Patel',
  },
];

export default function Departments() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={backgroundImages[currentImage]}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
              style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Departments
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Comprehensive healthcare services across various specialized departments.
          </motion.p>
        </div>
      </div>

      {/* Departments Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Medical Specialties</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Expert Care in Every Field
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => (
            <motion.div
              key={department.name}
              className="rounded-lg bg-white shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">{department.name}</h3>
              <p className="mt-4 text-gray-600">{department.description}</p>
              <p className="mt-6 text-sm font-semibold text-blue-600">
                Head: {department.head}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Emergency Services */}
      <motion.section
        className="bg-gradient-to-r from-red-100 to-red-50 py-24 sm:py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">Emergency Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              24/7 Emergency Care
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-lg leading-8 text-gray-600">
              Our emergency department is staffed with experienced medical professionals and equipped with state-of-the-art facilities to provide immediate care in critical situations.
            </p>
            <div className="mt-10 flex justify-center">
              <motion.a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-red-500 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Emergency: +91 1234567890
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
