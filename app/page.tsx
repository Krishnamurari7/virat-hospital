'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Amazing experience, highly recommend!",
    position: "Senior Developer",
    department: "Engineering",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback: "Very caring and professional.",
    position: "Product Manager",
    department: "Product",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    feedback: "Helped me recover quickly!",
    position: "Designer",
    department: "Creative",
    rating: 5,
  },
  {
    name: "Emily Davis",
    feedback: "Great staff and facilities.",
    position: "Marketing Specialist",
    department: "Marketing",
    rating: 4,
  },
  {
    name: "David Wilson",
    feedback: "Highly skilled doctors and nurses.",
    position: "Sales Executive",
    department: "Sales",
    rating: 5,
  },
  {
    name: "Sarah Brown",
    feedback: "Best hospital experience I've had.",
    position: "HR Manager",
    department: "Human Resources",
    rating: 5,
  },
];

const posters = [
  { id: 1, image: "/images/post.jpg", alt: "Offer 1" },
  { id: 2, image: "/images/postt.jpg", alt: "Offer 2" },
  // { id: 3, image: "/images/offer3.jpg", alt: "Offer 3" },
];

function PosterCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + posters.length) % posters.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % posters.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-12 rounded-2xl shadow-lg">
      <div className="relative h-64 sm:h-80 md:h-96">
        {posters.map((poster, index) => (
          <img
            key={poster.id}
            src={poster.image}
            alt={poster.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {posters.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const videos = [
    '/videos/onee.mp4',
    '/videos/twoo.mp4',
    '/videos/three.mp4',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section with Background Video Slider */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            key={currentVideoIndex}
            src={videos[currentVideoIndex]}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          />
        </div>

        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            {/* <div className="mx-auto max-w-2xl">
              <div className="max-w-xl bg-slate-100 p-6 rounded-lg shadow-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Welcome to Virat Life Hospital
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Providing exceptional healthcare services and medical education in Patna. Our state-of-the-art facility is committed to your well-being and professional growth.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/appointment"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Book Appointment
                  </Link>
                  <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 bg-slate-100 px-3 py-2 rounded-md shadow-sm hover:bg-blue-600">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Admission Banner */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Admissions Open for 2025</span>
            <span className="block text-blue-200">Join our prestigious medical college</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
              >
                Apply Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/college"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Poster Carousel Section */}
      <PosterCarousel />

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl underline decoration-blue-600 underline-offset-8">
              What Our Patients Say
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    {testimonial.name}
                  </dt>
                  <div className="mt-2 flex">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={20}
                        className={`${
                          starIndex < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill={starIndex < testimonial.rating ? "#FACC15" : "none"}
                      />
                    ))}
                  </div>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{testimonial.feedback}</p>
                    <p className="mt-6 text-sm font-semibold leading-6 text-blue-600">
                      {testimonial.position}, {testimonial.department}
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
