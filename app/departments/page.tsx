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
    name: 'Anatomy',
    description: 'In-depth study of the structure of the human body, including dissection and clinical correlations.',
    head: 'Dr. Anjali Mehta',
  },
  {
    name: 'Physiology',
    description: 'Focuses on the functions of the human body and understanding mechanisms of life processes.',
    head: 'Dr. Suresh Nair',
  },
  {
    name: 'Biochemistry',
    description: 'Explores the chemical processes within and related to living organisms.',
    head: 'Dr. Kavita Iyer',
  },
  {
    name: 'Pathology',
    description: 'Study of diseases, their causes, processes, development, and consequences.',
    head: 'Dr. Rohan Desai',
  },
  {
    name: 'Pharmacology',
    description: 'Deals with drugs and their effects on the human body to treat various conditions.',
    head: 'Dr. Nidhi Kapoor',
  },
  {
    name: 'Community Medicine',
    description: 'Public health and preventive medicine for communities and population groups.',
    head: 'Dr. Amitabh Bhushan',
  },
];

export default function Departments() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
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
            Academic Departments
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore the core departments that build the foundation of medical education.
          </motion.p>
        </div>
      </div>

      {/* Departments Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-blue-600">Departments</h2> */}
          <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Excellence in Medical Education
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
                HOD: {department.head}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
