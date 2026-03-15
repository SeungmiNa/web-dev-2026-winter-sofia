import Image from 'next/image'
import VisitorCounter from '@/components/VisitorCounter'

export default function HomePage() {
  return (
    <>
      <VisitorCounter />
      <section className="space-y-8">
        <div className="intro">
          <h2 className="font-serif text-2xl font-semibold text-stone-700 dark:text-stone-200 mb-4">
            Welcome
          </h2>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/interior.jpg"
              alt="A desktop computer and laptop on a desk"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        </div>

        <div className="content space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed">
          <p>
            Your living space reflects your inner peace. In a world full of
            noise, The Less creates furniture that brings calm and clarity to
            your home. Every piece has a purpose and a beautiful form—helping
            you declutter and focus on what truly matters in life. We believe
            that less is more, and that the best design feels both effortless
            and intentional.
          </p>
          <p>
            We craft each item with care, using sustainable, high-quality
            materials. Our furniture combines traditional craftsmanship with
            modern minimal design. From our oak tables to our signature chairs,
            every detail is considered. Simple, durable, and made to last for
            years to come.
          </p>
        </div>
      </section>
    </>
  )
}
