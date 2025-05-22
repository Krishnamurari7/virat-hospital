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
    dob: '',
    gender: '',
    course: '',
    category: '',
    nationality: '',
    aadhar: '',
    photo: null as File | null,
    signature: null as File | null,
  });

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          form.append(key, value);
        }
      });

      const response = await fetch(
        'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
        {
          method: 'POST',
          body: form,
        }
      );

      const result = await response.json();

      if (result.status === 'success') {
        alert('Application submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          dob: '',
          gender: '',
          course: '',
          category: '',
          nationality: '',
          aadhar: '',
          photo: null,
          signature: null,
        });
        // Optionally reset input[type=file] manually if needed
        (document.getElementById('photo') as HTMLInputElement).value = '';
        (document.getElementById('signature') as HTMLInputElement).value = '';
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting the form.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${backgroundImages[currentBg]})`,
            opacity: 0.7,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 to-white/90" />

        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Apply Now
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">
            Join our mission to provide better services and opportunities.
          </p>
        </motion.div>
      </div>

      {/* Apply Form */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8">
        <h2 className="text-center pb-3 text-3xl font-semibold leading-7 text-blue-600">
          Application Form
        </h2>

        <motion.div
          className="mx-auto max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Text Fields */}
            {[
              { label: 'Full Name', name: 'name', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Phone Number', name: 'phone', type: 'tel' },
              { label: 'Date of Birth', name: 'dob', type: 'date' },
              { label: 'Aadhar Number', name: 'aadhar', type: 'text' },
              { label: 'Nationality', name: 'nationality', type: 'text' },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label
                  htmlFor={name}
                  className="block text-sm font-medium text-gray-900"
                >
                  {label}
                </label>
                <div className="mt-2">
                  <input
                    type={type}
                    name={name}
                    id={name}
                    value={formData[name as keyof typeof formData] as string}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            ))}

            {/* Course */}
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-900">Course</label>
              <div className="mt-2">
                <select
                  name="course"
                  id="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Course</option>
                  {[
                    'ANM', 'GNM', 'B.Sc. Nursing', 'Diploma in Physiotherapy (DPT)',
                    'Diploma in Occupational Therapy (DOT)', 'Diploma in Orthotics and Prosthetics (DOP)',
                    'Diploma in Operation Theatre Assistant (DOTA)', 'Diploma in Ophthalmic Assistant (DOA)',
                    'Diploma in Medical Laboratory Technician (DMLT)', 'Diploma in Sanitary Inspector (DSI)',
                    'Diploma in Medical Radiography (DMR)', 'Diploma in ECG (DECG)',
                    'Diploma in Hearing Language And Speech Therapy (DHLS)', 'Bachelor in Physiotherapy (BPT)',
                    'Bachelor of Occupational Therapy (BOT)', 'Bachelor of Orthotics and Prosthetics (BOP)',
                    'Bachelor of Operation Theatre Technology (BOTT)', 'Bachelor of Ophthalmic Technology',
                    'Bachelor of Medical Laboratory Technology (BMLT)', 'Bachelor of Sanitary Inspector (BSI)',
                    'Bachelor of Medical Radiology Technology (BMRT)', 'Bachelor of ECG Technology (BECG)',
                    'Bachelor of Hearing Language and Speech Therapy (BHLS)',
                  ].map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <select
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                </select>
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-900">
                Passport Size Photo
              </label>
              <input
                type="file"
                accept="image/*"
                name="photo"
                id="photo"
                onChange={handleChange}
                required
                className="mt-2 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>

            {/* Signature Upload */}
            <div>
              <label htmlFor="signature" className="block text-sm font-medium text-gray-900">
                Signature Upload
              </label>
              <input
                type="file"
                accept="image/*"
                name="signature"
                id="signature"
                onChange={handleChange}
                required
                className="mt-2 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>

            {/* Submit Button */}
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
