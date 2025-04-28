'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

// Array of background images
const backgroundImages = [
  '/images/images1.avif',
  '/images/images2.avif',
  '/images/images3.avif',
];

export default function Doctors() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      <Navigation />

      <div className="relative isolate overflow-hidden h-[80vh] flex items-center justify-center text-center">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
        />

        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg"
          >
            Our Doctors
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg leading-8 text-white drop-shadow-md"
          >
            Meet our team of experienced and dedicated healthcare professionals.
          </motion.p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Doctors Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Expert Healthcare Professionals
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow bg-white"
            >
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-gray-900">
                {doctor.name}
              </dt>
              <dd className="mt-4 flex flex-col text-base text-gray-600">
                <p className="flex-auto">{doctor.specialization}</p>
                <p className="mt-6 text-sm font-semibold text-blue-600">
                  Experience: {doctor.experience}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/doctors/${doctor.id}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    View Profile <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </dd>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Book Appointment */}
      <div className="bg-gray-50 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-6 lg:px-8 text-center"
        >
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Book an Appointment
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Schedule a consultation with our expert doctors for personalized healthcare services.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/appointment"
              className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition"
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const doctors = [
  { id: 'dr-rajesh-kumar', name: 'Dr. Rajesh Kumar', specialization: 'Cardiology', experience: '15 years' },
  { id: 'dr-priya-sharma', name: 'Dr. Priya Sharma', specialization: 'Neurology', experience: '12 years' },
  { id: 'dr-amit-singh', name: 'Dr. Amit Singh', specialization: 'Orthopedics', experience: '10 years' },
  { id: 'dr-neha-gupta', name: 'Dr. Neha Gupta', specialization: 'Pediatrics', experience: '8 years' },
  { id: 'dr-sunita-verma', name: 'Dr. Sunita Verma', specialization: 'Gynecology', experience: '14 years' },
  { id: 'dr-vikram-patel', name: 'Dr. Vikram Patel', specialization: 'Dermatology', experience: '9 years' },
];
