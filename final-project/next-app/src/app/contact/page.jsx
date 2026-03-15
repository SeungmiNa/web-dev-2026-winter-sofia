'use client'

import { useState } from 'react'
import Link from 'next/link'

const INTEREST_OPTIONS = [
  'Select an option',
  'In-Person Classes',
  'Online Classes',
  'Personal Training',
  'Membership',
  'Free Tour',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedIn: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setFormData({ fullName: '', email: '', phone: '', interestedIn: '', message: '' })
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="transition-colors duration-200 hover:text-primary-700">Home</Link>
        <span className="mx-1">›</span>
        <span className="text-gray-800">Contact</span>
      </nav>

      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about our services or want to schedule a tour? We&apos;d love to hear from you. Fill out the form below or contact us directly.
        </p>
      </section>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-card rounded-2xl border border-gray-200/80 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Send us a Message</h2>
            <p className="text-sm text-gray-600 mb-6">Fill out the form and we&apos;ll respond within 24 hours</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input id="fullName" name="fullName" type="text" placeholder="John Doe" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-surface text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-surface text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="(650) 555-0100" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-surface text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-1">I&apos;m Interested In</label>
                  <select id="interestedIn" name="interestedIn" value={formData.interestedIn} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-surface text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt === 'Select an option' ? '' : opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea id="message" name="message" placeholder="Tell us about your fitness goals or any questions you have..." value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-surface text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y" required />
              </div>
              <button type="submit" className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-600 text-white font-medium transition-all duration-200 hover:bg-primary-700 hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="bg-card rounded-2xl border border-gray-200/80 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-sm">123 University Avenue<br />Palo Alto, CA 94301</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-sm">(650) 555-0100</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-sm">info@flexflowstudio.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-gray-200/80 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <div className="flex justify-between gap-4"><span>Monday - Friday</span><span className="font-medium">9 AM - 6 PM</span></div>
              <div className="flex justify-between gap-4"><span>Saturday</span><span className="font-medium">10 AM - 4 PM</span></div>
              <div className="flex justify-between gap-4"><span>Sunday</span><span className="font-medium">Closed</span></div>
            </div>
          </div>

          <div className="rounded-2xl bg-primary-600 p-6 text-white transition-shadow duration-300 hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Quick Tour</h3>
            <p className="text-sm text-white/90 mb-4">Want to see our facility in person? Schedule a free tour and trial session!</p>
            <Link href="/booking" className="inline-block px-4 py-2.5 rounded-xl bg-white text-primary-600 font-medium text-sm border-2 border-white transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
