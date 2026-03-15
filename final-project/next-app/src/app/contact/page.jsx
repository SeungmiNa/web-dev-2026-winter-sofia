'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="space-y-6">
      <h2 className="font-serif text-2xl font-semibold text-stone-700 dark:text-stone-200">
        Contact
      </h2>
      <p className="text-stone-600 dark:text-stone-300">
        Get in touch. We&apos;d love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-400 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-400 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-400 focus:border-transparent resize-y"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 font-medium hover:bg-stone-700 dark:hover:bg-stone-300 transition"
        >
          Send
        </button>
      </form>
    </section>
  )
}
