'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const TRAINERS = [
  { id: 'sarah', name: 'Sarah Chen', specialization: 'Yoga & Mindfulness', description: 'Certified yoga instructor with 10+ years of experience. Sarah specializes in Vinyasa and restorative yoga, helping clients find balance in their busy lives.', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&q=80' },
  { id: 'marcus', name: 'Marcus Johnson', specialization: 'HIIT & Athletic Training', description: 'Former college athlete and certified personal trainer. Marcus brings high energy and motivation to every session, specializing in functional fitness and HIIT.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80' },
  { id: 'jessica', name: 'Jessica Martinez', specialization: 'Strength & Conditioning', description: 'Strength coach with expertise in powerlifting and bodybuilding. Jessica helps clients build muscle, increase strength, and boost confidence.', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&q=80' },
]

const TIME_SLOTS = ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']

function Calendar({ selectedDate, onSelectDate }) {
  const [viewDate, setViewDate] = useState(selectedDate || new Date(2026, 2, 13))

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear()
    const month = viewDate.getMonth()
    const first = new Date(year, month, 1)
    const last = new Date(year, month + 1, 0)
    const startPad = first.getDay()
    const days = []
    for (let i = 0; i < startPad; i++) {
      const d = new Date(year, month, 1 - (startPad - i))
      days.push({ date: d, currentMonth: false })
    }
    for (let d = 1; d <= last.getDate(); d++) {
      days.push({ date: new Date(year, month, d), currentMonth: true })
    }
    const remaining = 42 - days.length
    for (let i = 1; i <= remaining; i++) {
      days.push({ date: new Date(year, month + 1, i), currentMonth: false })
    }
    return days
  }, [viewDate])

  const isSameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1))
  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1))

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <button type="button" onClick={prevMonth} className="p-1 rounded transition-colors duration-200 hover:bg-gray-100 text-gray-600" aria-label="Previous month">‹</button>
        <span className="font-semibold text-gray-800">{MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}</span>
        <button type="button" onClick={nextMonth} className="p-1 rounded transition-colors duration-200 hover:bg-gray-100 text-gray-600" aria-label="Next month">›</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((d) => (
          <div key={d} className="text-xs font-medium text-gray-500 py-1">{d}</div>
        ))}
        {calendarDays.map(({ date, currentMonth }) => (
          <button
            key={date.toISOString()}
            type="button"
            onClick={() => onSelectDate(date)}
            className={`py-2 text-sm rounded-lg transition ${!currentMonth ? 'text-gray-300' : isSameDay(date, selectedDate) ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}

function StepHeader({ step, title }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-sm font-bold">{step}</span>
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
    </div>
  )
}

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 2, 13))
  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const selectedDateFormatted = selectedDate
    ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    : null

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="transition-colors duration-200 hover:text-primary-700">Home</Link>
        <span className="mx-1">›</span>
        <span className="text-gray-800">Booking</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Book Your Session</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Choose your preferred date, trainer, and time slot for your personal training session.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <StepHeader step={1} title="Select Date" />
          <p className="text-sm text-gray-600">Choose a date for your session.</p>
          <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
          {selectedDateFormatted && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium">
              <svg className="w-5 h-5 shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>{selectedDateFormatted}</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <StepHeader step={2} title="Select Trainer" />
          <p className="text-sm text-gray-600">Read about each guide and pick your preferred trainer.</p>
          <div className="space-y-3">
            {TRAINERS.map((trainer) => (
              <button
                key={trainer.id}
                type="button"
                onClick={() => setSelectedTrainer(selectedTrainer?.id === trainer.id ? null : trainer)}
                className={`w-full text-left rounded-xl border-2 p-4 transition-all duration-200 ${selectedTrainer?.id === trainer.id ? 'border-gray-400 bg-gray-100' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
              >
                <div className="flex items-start gap-3">
                  <img src={trainer.image} alt="" className="w-12 h-12 rounded-full object-cover shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-800">{trainer.name}</p>
                    <span className="inline-block mt-0.5 px-2 py-0.5 rounded-md bg-gray-200 text-gray-700 text-xs font-medium">{trainer.specialization}</span>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{trainer.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <StepHeader step={3} title="Select Time" />
          <p className="text-sm text-gray-600">Choose an available time slot.</p>
          <div className="bg-white rounded-xl border border-gray-200 p-5 min-h-[200px]">
            {!selectedTrainer ? (
              <p className="text-gray-500 text-sm">Please select a trainer first</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(selectedTime === time ? null : time)}
                    className={`py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${selectedTime === time ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedDate && selectedTrainer && selectedTime && (
        <section className="mt-12 pt-10 border-t border-gray-200/80">
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date</span>
                <span className="font-medium text-gray-800">{selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Trainer</span>
                <span className="font-medium text-gray-800">{selectedTrainer.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Time</span>
                <span className="font-medium text-gray-800">{selectedTime}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => alert(`Booking confirmed: ${selectedDate.toLocaleDateString()} with ${selectedTrainer.name} at ${selectedTime}`)}
              className="mt-4 w-full py-3.5 rounded-xl bg-primary-600 text-white font-semibold transition-all duration-200 hover:bg-primary-700 hover:scale-[1.01] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Confirm Booking
            </button>
          </div>
        </section>
      )}
    </div>
  )
}
