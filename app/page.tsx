"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const videos = ["/videos/onee.mp4", "/videos/twoo.mp4", "/videos/three.mp4"];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [videos.length]);

 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [current, setCurrent] = useState(0);
  const posters = [
    "/images/post.jpg",
    "/images/postt.jpg",
    "/images/3.jpg",
    "/images/7.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? posters.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % posters.length);
  };

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
          <div className="px-6 lg:px-0 lg:pt-4"></div>
        </div>
      </div>

      {/* Admission Banner */}
      <div className="bg-gradient-to-b from-purple-600 to-pink-600">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <div className="relative inline-block">
              <span className="block">Admissions Open for 2025 &nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="absolute top-0 right-2 text-xs bg-red-600 text-white px-1 py-0.5 rounded animate-blink">
                new
              </span>
            </div>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-b from-purple-600 to-pink-600 px-5 py-3 text-base font-medium text-white"
              >
                Apply Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/college"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-b from-purple-600 to-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Image Slider */}
      <div className="relative w-full h-[500px] overflow-hidden mt-10">
        <motion.img
          key={currentSlide}
          src={posters[currentSlide]}
          alt="Slider Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover"
        />

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
