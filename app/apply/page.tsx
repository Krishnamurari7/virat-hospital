'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

const backgroundImages = [
  '/images/images1.avif',
  '/images/images2.avif',
  '/images/images3.avif',
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    role: '',
    date: '',
    time: '',
    message: '',
  });

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Apply form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${backgroundImages[currentBg]})`, opacity: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 to-white/90" />

        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Apply Now</h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">
            Join our mission to provide better services and opportunities.
          </p>
        </motion.div>
      </div>

      {/* Apply Form */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8">
        <h2 className="text-center pb-3 text-3xl font-semibold leading-7 text-blue-600">Application Form</h2>

        <motion.div
          className="mx-auto max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name, Email, Phone */}
            {[
              { label: 'Full Name', name: 'name', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Phone Number', name: 'phone', type: 'tel' },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                  {label}
                </label>
                <div className="mt-2">
                  <input
                    type={type}
                    name={name}
                    id={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
            ))}

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                Department
              </label>
              <div className="mt-2">
                <select
                  name="department"
                  id="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="operations">Operations</option>
                </select>
              </div>
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                Role Applying For
              </label>
              <div className="mt-2">
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="frontend-dev">Frontend Developer</option>
                  <option value="backend-dev">Backend Developer</option>
                  <option value="ui-ux-designer">UI/UX Designer</option>
                  <option value="seo-specialist">SEO Specialist</option>
                </select>
              </div>
            </div>

            {/* Date and Time */}
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1">
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                  Available From
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex-1 mt-6 sm:mt-0">
                <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
                  Preferred Time Slot
                </label>
                <div className="mt-2">
                  <input
                    type="time"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                Additional Information
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
