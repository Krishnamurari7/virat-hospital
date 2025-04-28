'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

const backgroundImages = [
  '/images/images1.avif', // replace with your images
  '/images/images2.avif',
  '/images/images3.avif',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5s
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white relative">
      <Navigation />

      {/* Hero Section with Background Slider */}
      <div className="relative isolate h-[80vh] overflow-hidden">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImages[currentBg]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/50">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl font-bold sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8">
              Get in touch with us for any queries or appointments.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="bg-gray-50 py-8 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Send us a Message</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="mx-auto mt-16 max-w-2xl space-y-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {['name', 'email', 'phone'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-900 capitalize">
                  {field}
                </label>
                <div className="mt-2">
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    id={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm"
                    required
                  />
                </div>
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="rounded-md bg-blue-600 hover:bg-blue-500 transition-all duration-300 px-6 py-3 text-sm font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>


      {/* Google Maps */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.8743875!2d85.1012535!3d25.5940947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1647881234567!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
