"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const sliderImages = [
  "/images/images1.avif",
  "/images/images2.avif",
  "/images/images3.avif",
];

export default function College() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {sliderImages.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
        {/* Optional dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center min-h-[90vh] px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg"
          >
            Welcome to <br /> Our Medical College
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mt-6 text-lg sm:text-2xl text-white max-w-2xl"
          >
            Join our prestigious institution and shape the future of healthcare.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mt-10 flex gap-6"
          >
            <Link
              href="/college/apply"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition"
            >
              Apply Now
            </Link>
            <Link
              href="/college/brochure"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-md shadow-lg transition"
            >
              Download Brochure
            </Link>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gray-50 py-8 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Medical Education</p>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {courses.map((course) => (
                <motion.div
                  key={course.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{course.name}</h3>
                  <p className="mt-4 text-gray-600">{course.description}</p>
                  <p className="mt-2 text-sm font-semibold text-blue-600">Duration: {course.duration}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gray-50 py-8 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How to Apply</p>
            </div>
            <div className="mt-8 max-w-2xl mx-auto">
              <ol className="space-y-6 text-base leading-7 text-gray-600">
                {admissionSteps.map((step, index) => (
                  <li key={index} className="flex items-center gap-x-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}



// Dummy Data
const courses = [
  {
    name: "MBBS",
    description: "Bachelor of Medicine and Bachelor of Surgery - A comprehensive medical degree program.",
    duration: "5.5 years",
  },
  {
    name: "BSc Nursing",
    description: "Bachelor of Science in Nursing - Training future healthcare professionals.",
    duration: "4 years",
  },
  {
    name: "Paramedical Courses",
    description: "Various paramedical courses including lab technology, radiology, and more.",
    duration: "2-3 years",
  },
];

const facilities = [
  {
    name: "Modern Classrooms",
    description: "Well-equipped classrooms with audio-visual aids and comfortable seating.",
  },
  {
    name: "Advanced Laboratories",
    description: "State-of-the-art laboratories for practical training and research.",
  },
  {
    name: "Hostel Facilities",
    description: "Comfortable accommodation with modern amenities for students.",
  },
];

const admissionSteps = [
  "Fill out the online application form",
  "Submit required documents",
  "Appear for entrance examination",
  "Attend counseling session",
  "Complete admission formalities",
  "Pay fees and join the program",
];
