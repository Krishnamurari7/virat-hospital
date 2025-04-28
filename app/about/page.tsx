'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';

export default function About() {
  const backgroundImages = [
    '/images/images1.avif', // Add your image paths here
    '/images/images2.avif',
    '/images/images3.avif',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20" 
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 backdrop-brightness-75">
          <div className="mx-auto max-w-2xl lg:mx-0 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">About Virat Life Hospital</h1>
            <p className="mt-6 text-lg leading-8">
              Virat Life Hospital is a premier healthcare institution in Patna, committed to providing exceptional medical services and education.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="mx-auto flex max-w-7xl px-6 lg:px-8 py-24 sm:py-32 gap-8 lg:gap-x-8">
        <div className="mx-auto max-w-2xl lg:mx-0 *:text-center bg-gray-400/20 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            To provide high-quality healthcare services and medical education while maintaining the highest standards of patient care and professional excellence.
          </p>
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 *:text-center bg-gray-400/20 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Vision</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            To be the leading healthcare and medical education institution in Bihar, known for excellence in patient care, research, and education.
          </p>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-gray-50 py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              State-of-the-art Infrastructure
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {facilities.map((facility) => (
                <div key={facility.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {facility.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{facility.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

const facilities = [
  {
    name: 'Modern Medical Equipment',
    description: 'Latest diagnostic and treatment equipment for accurate and efficient healthcare delivery.',
  },
  {
    name: 'Specialized Departments',
    description: 'Comprehensive medical departments staffed by expert healthcare professionals.',
  },
  {
    name: 'Research Facilities',
    description: 'Advanced research laboratories and facilities for medical education and innovation.',
  },
];
