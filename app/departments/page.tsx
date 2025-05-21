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
    name: 'BSc Nursing',
    description: 'Comprehensive nursing program focusing on patient care and clinical skills.',
    head: 'Dr. Anjali Mehta',
    year: '4year',
  },
  {
    name: 'D.Pharma',
    description: 'Diploma course focusing on pharmaceutical sciences and drug dispensing.',
    head: 'Dr. Suresh Kumar',
    year: '2year',
  },
  {
    name: 'GNM',
    description: 'General Nursing and Midwifery program emphasizing nursing care and maternal health.',
    head: 'Dr. Rekha Sharma',
    year: '3.5year',
  },
  {
    name: 'ANM',
    description: 'Auxiliary Nurse Midwifery course centered on basic nursing and midwifery training.',
    head: 'Dr. Neelam Kumari',
    year: '2year',
  },
  {
    name: 'DOTT',
    description: 'Diploma in Operation Theatre Technology covering surgical procedures and theatre management.',
    head: 'Dr. Sanjay Verma',
    year: '2year',
  },
  {
    name: 'DMLT',
    description: 'Diploma in Medical Laboratory Technology focusing on clinical lab testing and diagnostics.',
    head: 'Dr. R.K. Singh',
    year: '2year',
  },
  {
    name: 'DRIT',
    description: 'Diploma in Radio Imaging Technology for diagnostic imaging and radiographic procedures.',
    head: 'Dr. Priya Sinha',
    year: '2year',
  },
  {
    name: 'DPCM',
    description: 'Diploma in Patient Care Management aimed at healthcare support and patient handling skills.',
    head: 'Dr. Manoj Tiwari',
    year: '1year',
  },
  {
    name: 'B.VOC MLT',
    description: 'Bachelor in Medical Laboratory Technology emphasizing diagnostic techniques and lab management.',
    head: 'Dr. Alok Das',
    year: '3year',
  },
  {
    name: 'B.VOC RIT',
    description: 'Bachelor in Radiology Imaging Technology covering modern radiographic techniques.',
    head: 'Dr. Renu Jha',
    year: '3year',
  },
  {
    name: 'B.VOC OTT',
    description: 'Bachelor in Operation Theatre Technology preparing students for OT procedures and sterilization.',
    head: 'Dr. Vikram Chauhan',
    year: '3year',
  },
  {
    name: 'BVOCHM',
    description: 'Bachelor in Hospital Management focusing on healthcare administration and operations.',
    head: 'Dr. Meera Nanda',
    year: '3year',
  },
  {
    name: 'BVOD POV',
    description: 'Bachelor in Patient Care Management aimed at developing care and clinical support professionals.',
    head: 'Dr. Deepak Sharma',
    year: '3year',
  },
  {
    name: 'B-pharma',
    description: 'Pharmacy program covering pharmaceutical sciences and drug development.',
    head: 'Dr. Vikram',
    year: '4year',
  },
  {
    name: 'M.Sc Nursing',
    description: 'Master’s program in nursing focusing on advanced clinical practice and research.',
    head: 'Dr. Anjali Mehta',
    year: '2year',
  },
  {
    name: 'M.Pharma',
    description: 'Master’s program in pharmacy emphasizing pharmaceutical research and development.',
    head: 'Dr. Suresh Kumar',
    year: '2year',
  },
  {
    name: 'MHA',
    description: 'Master in Hospital Administration focusing on healthcare management and policy.',
    head: 'Dr. Rekha Sharma',
    year: '2year',
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
              <p className="mt-6 text-sm font-semibold text-blue-600">
                HOD: {department.head}
              </p>
              <p className="mt-2 text-sm text-blue-600">
                Duration: {department.year}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
