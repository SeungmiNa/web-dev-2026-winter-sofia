import Link from 'next/link'

const TRAINERS = [
  { id: 'sarah', name: 'Sarah Chen', specialization: 'Yoga & Mindfulness', description: 'Certified yoga instructor with 10+ years of experience. Sarah specializes in Vinyasa and restorative yoga, helping clients find balance in their busy lives.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80' },
  { id: 'marcus', name: 'Marcus Johnson', specialization: 'HIIT & Athletic Training', description: 'Former college athlete and certified personal trainer. Marcus brings high energy and motivation to every session, specializing in functional fitness and HIIT.', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80' },
  { id: 'jessica', name: 'Jessica Martinez', specialization: 'Strength & Conditioning', description: 'Strength coach with expertise in powerlifting and bodybuilding. Jessica helps clients build muscle, increase strength, and boost confidence.', image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=600&q=80' },
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="transition-colors duration-200 hover:text-primary-700">Home</Link>
        <span className="mx-1">›</span>
        <span className="text-gray-800">About</span>
      </nav>

      <section className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About FlexFlow Studio</h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Founded in 2020, FlexFlow Studio was created to serve the busy professionals and students of Palo Alto and the Stanford community. We understand that your time is valuable, which is why we offer a hybrid approach combining in-person training with online flexibility.
        </p>
      </section>

      <section className="mb-14">
        <div className="rounded-2xl bg-gradient-to-b from-card to-surface border border-gray-200/60 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To make fitness accessible and convenient for everyone, regardless of their schedule. We believe that staying healthy shouldn&apos;t require sacrificing your career or studies. Our platform adapts to your lifestyle, not the other way around.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Expert Trainers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TRAINERS.map((trainer) => (
            <article key={trainer.id} className="bg-card rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] bg-primary-100">
                <img src={trainer.image} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{trainer.name}</h3>
                <p className="text-primary-700 font-medium text-sm mb-2">{trainer.specialization}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{trainer.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">Visit Our Studio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl border border-gray-200/80 p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Location</h3>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>123 University Avenue, Palo Alto, CA 94301</span>
              </p>
              <p className="text-sm pl-7">Located in the heart of downtown Palo Alto, just minutes from Stanford University.</p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>(650) 555-0100</span>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@flexflowstudio.com</span>
              </p>
            </div>
          </div>
          <div className="bg-card rounded-2xl border border-gray-200/80 p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Studio Hours</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Monday - Friday
                </span>
                <span className="font-medium">6:00 AM - 9:00 PM</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Saturday
                </span>
                <span className="font-medium">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Sunday
                </span>
                <span className="font-medium">Closed</span>
              </div>
              <p className="text-sm text-gray-500 pt-2 border-t border-gray-100 mt-4">Premium members have 24/7 access with their key card.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
