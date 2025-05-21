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
    name: 'ANM',
    description: 'Auxiliary Nursing Midwifery focusing on basic nursing care and midwifery skills.',
    duration: '2 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'GNM',
    description: 'General Nursing and Midwifery providing comprehensive nursing education.',
    duration: '3 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'B.Sc. Nursing',
    description: 'Bachelor of Science in Nursing covering in-depth nursing and healthcare training.',
    duration: '4 years',
    qualification: '10+2 (Biology)',
  },
  {
    name: 'Diploma in Physiotherapy (DPT)',
    description: 'Training in physical therapy and rehabilitation practices.',
    duration: '3 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Diploma in Occupational Therapy (DOT)',
    description: 'Education in techniques to aid patients in daily living and working.',
    duration: '3 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Diploma in Orthotics and Prosthetics (DOP)',
    description: 'Training in designing orthotic and prosthetic devices.',
    duration: '3 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Diploma in Operation Theatre Assistant (DOTA)',
    description: 'Preparation for assisting in surgical procedures and operation theatre duties.',
    duration: '2 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Diploma in Ophthalmic Assistant (DOA)',
    description: 'Study focused on eye care and assisting ophthalmologists.',
    duration: '2 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Diploma in Medical Laboratory Technician (DMLT)',
    description: 'Training in lab testing techniques and diagnostics.',
    duration: '2 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Diploma in Sanitary Inspector (DSI)',
    description: 'Training for maintaining sanitation and public health standards.',
    duration: '2 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Diploma in Medical Radiography (DMR)',
    description: 'Training in medical imaging and radiographic techniques.',
    duration: '2 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Diploma in ECG (DECG)',
    description: 'Training in electrocardiogram procedures and heart monitoring.',
    duration: '2 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Diploma in Hearing Language And Speech Therapy (DHLS)',
    description: 'Training in therapy techniques for speech and hearing disorders.',
    duration: '2 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor in Physiotherapy (BPT)',
    description: 'Advanced education in physical therapy and rehabilitation sciences.',
    duration: '4.5 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor of Occupational Therapy (BOT)',
    description: 'Comprehensive course in occupational therapy and patient rehabilitation.',
    duration: '4.5 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor of Orthotics and Prosthetics (BOP)',
    description: 'In-depth study in the design and application of prosthetic and orthotic devices.',
    duration: '4.5 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor of Operation Theatre Technology (BOTT)',
    description: 'Education in surgical equipment handling and operating theatre support.',
    duration: '4 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor of Ophthalmic Technology',
    description: 'Study in eye care technology and ophthalmic diagnostics.',
    duration: '4 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor of Medical Laboratory Technology (BMLT)',
    description: 'Training in clinical laboratory analysis and diagnostics.',
    duration: '4.5 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor of Sanitary Inspector (BSI)',
    description: 'Course in public hygiene and health inspection.',
    duration: '3 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor of Medical Radiology Technology (BMRT)',
    description: 'Specialization in radiographic imaging and medical diagnostics.',
    duration: '3 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor of ECG Technology (BECG)',
    description: 'Focused training on cardiac diagnostics and ECG techniques.',
    duration: '3 years',
    qualification: '10+2 with Science Stream',
  },
  {
    name: 'Bachelor of Hearing Language and Speech Therapy (BHLS)',
    description: 'Advanced studies in speech therapy and audiology.',
    duration: '4 years',
    qualification: '10+2 with Science Stream',
  }
  
  
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
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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
          <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Excellence in Medical Education
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => (
            <motion.article
              key={`${department.name}-${index}`}
              className="rounded-lg bg-white shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">{department.name}</h3>
              <p className="mt-4 text-gray-600">{department.description}</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-blue-700">Duration: {department.duration}</p>
                <p className="text-sm font-medium text-blue-700">Qualification: {department.qualification}</p>              
              </div>
              
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
