'use client'

import { useApp } from '@/context/AppContext'

export default function AboutPage() {
  const { theme, visitorCount } = useApp()

  return (
    <section className="space-y-6">
      <h2 className="font-serif text-2xl font-semibold text-stone-700 dark:text-stone-200">
        About The Less
      </h2>
      <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
        The Less is a minimal furniture brand built on the idea that your home
        should support clarity and calm. We design pieces that are both
        functional and beautiful—sustainable, durable, and made to last.
      </p>
      <div className="p-4 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Current theme:{' '}
          <strong className="text-stone-700 dark:text-stone-200">{theme}</strong>
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
          Page visits (this session):{' '}
          <strong className="text-stone-700 dark:text-stone-200">
            {visitorCount}
          </strong>
        </p>
      </div>
    </section>
  )
}
