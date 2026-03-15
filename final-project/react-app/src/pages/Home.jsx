import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const CHECK_ICON = (
  <svg className="w-5 h-5 text-primary-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export default function Home() {
  const { incrementVisitor } = useApp()

  useEffect(() => {
    incrementVisitor()
  }, [incrementVisitor])

  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col lg:flex-row max-w-7xl mx-auto opacity-0 animate-fade-in">
        <div className="flex-1 flex flex-col justify-center px-6 py-14 lg:py-20 bg-gradient-to-r from-card to-surface">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5 tracking-tight">
            Transform Your Fitness Journey
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed">
            FlexFlow Studio brings you the perfect blend of in-person training and online flexibility.
            Whether you&apos;re a busy professional or student, we fit into your lifestyle.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="inline-flex px-6 py-3 rounded-xl bg-primary-600 text-white font-medium transition-all duration-200 ease-out hover:bg-primary-700 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Book a Session
            </Link>
            <Link
              to="/classes"
              className="inline-flex px-6 py-3 rounded-xl border border-primary-400 text-primary-700 font-medium transition-all duration-200 ease-out hover:bg-primary-400/30 hover:border-primary-600 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              View Classes
            </Link>
          </div>
        </div>
        <div className="flex-1 relative min-h-[320px] lg:min-h-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
            srcSet="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80 400w, https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80 600w, https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80 800w, https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80 1200w"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            alt="Modern gym interior with equipment"
            className="absolute inset-0 w-full h-full object-cover rounded-none lg:rounded-l-3xl transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      </section>

      {/* Why Choose FlexFlow Studio */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4 tracking-tight">Why Choose FlexFlow Studio?</h2>
          <p className="text-gray-500 text-center mb-12 text-sm">Clear value, no clutter.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-card rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary-400/40 flex items-center justify-center mb-4 text-primary-700">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Trainers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Work with certified professionals who understand your goals and help you achieve them.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
                alt="Trainers with client"
                className="w-full h-48 object-cover"
              />
            </article>
            <article className="bg-card rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary-400/40 flex items-center justify-center mb-4 text-primary-700">
                  <span className="text-xl">📹</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Online Classes</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Access our full library of workout videos anytime, anywhere with your membership.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80"
                alt="Group outdoor workout"
                className="w-full h-48 object-cover"
              />
            </article>
            <article className="bg-card rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary-400/40 flex items-center justify-center mb-4 text-primary-700">
                  <span className="text-xl">📅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Easy online booking system designed for busy professionals and students.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Morning sessions (8 AM - 10 AM)</li>
                  <li>Lunch sessions (12 PM - 2 PM)</li>
                  <li>Evening sessions (5 PM - 8 PM)</li>
                  <li>Weekend availability</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2 tracking-tight">Membership Plans</h2>
          <p className="text-gray-500 text-center mb-12 text-sm">Choose the plan that fits your lifestyle and goals.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-surface rounded-2xl border border-gray-200/80 p-6 flex flex-col shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Basic</h3>
              <p className="text-3xl font-bold text-gray-800 mb-6">$49<span className="text-base font-normal text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Access to in-person classes</li>
                <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} 2 PT sessions per month</li>
                <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Basic nutrition guide</li>
              </ul>
              <Link to="/booking" className="block w-full py-3 rounded-xl border border-primary-400 text-primary-700 font-medium text-center transition-all duration-200 hover:bg-primary-400/30 hover:scale-[1.01]">
                Choose Plan
              </Link>
            </article>
            <article className="bg-surface rounded-2xl border-2 border-primary-600 relative flex flex-col shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary-600 text-white text-xs font-medium">
                Most Popular
              </span>
              <div className="p-6 pt-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Premium</h3>
                <p className="text-3xl font-bold text-gray-800 mb-6">$99<span className="text-base font-normal text-gray-500">/month</span></p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Unlimited in-person classes</li>
                  <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} 4 PT sessions per month</li>
                  <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Full video library access</li>
                  <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Live online classes</li>
                  <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Personalized workout plans</li>
                </ul>
                <Link to="/booking" className="block w-full py-3 rounded-xl bg-primary-600 text-white font-medium text-center transition-all duration-200 hover:bg-primary-700 hover:scale-[1.02] hover:shadow-lg">
                  Choose Plan
                </Link>
              </div>
            </article>
            <article className="bg-surface rounded-2xl border border-gray-200/80 p-6 flex flex-col shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Elite</h3>
              <p className="text-3xl font-bold text-gray-800 mb-6">$149<span className="text-base font-normal text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Everything in Premium</li>
                <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Unlimited PT sessions</li>
                <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} 24/7 studio access</li>
                <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Nutrition coaching</li>
                <li className="flex gap-2 text-gray-600 text-sm">{CHECK_ICON} Monthly body composition analysis</li>
              </ul>
              <Link to="/booking" className="block w-full py-3 rounded-xl border border-primary-400 text-primary-700 font-medium text-center transition-all duration-200 hover:bg-primary-400/30 hover:scale-[1.01]">
                Choose Plan
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Banner — single clear highlight */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join FlexFlow Studio today and discover a fitness experience designed for your busy lifestyle.
          </p>
          <Link
            to="/booking"
            className="inline-flex px-8 py-3.5 rounded-xl bg-white text-primary-600 font-semibold border-2 border-white transition-all duration-200 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  )
}
