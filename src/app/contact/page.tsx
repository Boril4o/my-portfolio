'use client';

import { useState } from 'react';
import Header from '../components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main className="max-w-md mx-auto mt-10 p-6 bg-[var(--card-bg)] rounded-2xl flex flex-col items-center shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-6 text-[var(--foreground)]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-[var(--foreground)] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[var(--input-bg)] text-[var(--foreground)] font-medium outline-none focus:ring-2 focus:ring-[var(--accent)] placeholder:text-[var(--accent)] border-none"
              placeholder="Your name"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[var(--foreground)] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[var(--input-bg)] text-[var(--foreground)] font-medium outline-none focus:ring-2 focus:ring-[var(--accent)] placeholder:text-[var(--accent)] border-none"
              placeholder="your.email@example.com"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-[var(--foreground)] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-[var(--input-bg)] text-[var(--foreground)] font-medium outline-none focus:ring-2 focus:ring-[var(--accent)] placeholder:text-[var(--accent)] border-none resize-none"
              placeholder="Your message here..."
              style={{ fontFamily: 'Manrope, sans-serif' }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--card-bg)] text-[var(--foreground)] font-bold py-2 rounded-xl border border-[var(--accent)] hover:bg-[var(--input-bg)] transition-colors duration-150"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
} 