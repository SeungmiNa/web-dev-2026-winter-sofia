import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DEBOUNCE_MS = 300

const CATEGORIES = ['All Videos', 'Yoga', 'HIIT', 'Strength']

const VIDEOS = [
  { id: 1, category: 'Yoga', title: 'Morning Yoga Flow', description: 'Start your day with energizing yoga poses.', duration: '30 min', instructor: 'Sarah Chen', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80' },
  { id: 2, category: 'HIIT', title: 'Power HIIT Session', description: 'High-intensity interval training for maximum burn.', duration: '20 min', instructor: 'Marcus Johnson', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80' },
  { id: 3, category: 'Strength', title: 'Full Body Strength', description: 'Build muscle with compound movements.', duration: '45 min', instructor: 'Jessica Martinez', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80' },
  { id: 4, category: 'Yoga', title: 'Restorative Yoga', description: 'Gentle stretches for recovery and relaxation.', duration: '40 min', instructor: 'Sarah Chen', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80' },
  { id: 5, category: 'HIIT', title: 'Cardio Blast', description: 'Get your heart pumping with intense cardio.', duration: '25 min', instructor: 'Marcus Johnson', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80' },
  { id: 6, category: 'Strength', title: 'Core Strength Builder', description: 'Target your abs and core muscles.', duration: '30 min', instructor: 'Jessica Martinez', image: 'https://picsum.photos/seed/core-strength/600/340' },
  { id: 7, category: 'Yoga', title: 'Evening Stretch', description: 'Wind down with calming stretches.', duration: '20 min', instructor: 'Sarah Chen', image: 'https://picsum.photos/seed/evening-stretch/600/340' },
  { id: 8, category: 'HIIT', title: 'HIIT for Beginners', description: 'Introduction to high-intensity training.', duration: '15 min', instructor: 'Marcus Johnson', image: 'https://picsum.photos/seed/hiit-beginners/600/340' },
  { id: 9, category: 'Strength', title: 'Upper Body Power', description: 'Build strong arms, shoulders, and back.', duration: '35 min', instructor: 'Jessica Martinez', image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=600&q=80' },
]

export default function Classes() {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All Videos')
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), DEBOUNCE_MS)
    return () => clearTimeout(t)
  }, [search])

  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((video) => {
      const matchCategory = activeCategory === 'All Videos' || video.category === activeCategory
      const matchSearch = !debouncedSearch.trim() ||
        video.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        video.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        video.instructor.toLowerCase().includes(debouncedSearch.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [debouncedSearch, activeCategory])

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="transition-colors duration-200 hover:text-primary-700">Home</Link>
        <span className="mx-1">›</span>
        <span className="text-gray-800">Classes</span>
      </nav>

      {/* Title & description */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Member Video Library</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Access our full collection of workout videos. Filter by category or search for specific workouts.
      </p>

      {/* Search */}
      <div className="relative max-w-xl mb-6">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          placeholder="Search videos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-surface text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Categories */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-700 mb-2">Categories</p>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-card border border-gray-200 text-gray-700 hover:bg-primary-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Video grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {filteredVideos.map((video) => (
          <article
            key={video.id}
            className="bg-card rounded-xl border border-gray-200/80 overflow-hidden shadow-sm flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-44 sm:h-48 bg-gray-200 shrink-0 overflow-hidden">
              <img
                src={video.image}
                alt=""
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-primary-600 text-white text-xs font-medium">
                {video.category}
              </span>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-bold text-gray-800 mb-1">{video.title}</h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {video.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  {video.instructor}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(video)}
                className="mt-auto w-full py-2.5 rounded-xl bg-primary-600 text-white font-medium text-sm transition-all duration-200 hover:bg-primary-700 hover:scale-[1.02] hover:shadow-md"
              >
                Watch Now
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <p className="text-gray-500 text-center py-12">No videos match your search or filter.</p>
      )}

      {/* Video detail modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setSelectedVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div
            className="bg-card rounded-2xl border border-gray-200 shadow-xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 bg-gray-200">
              <img src={selectedVideo.image} alt="" className="w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-primary-600 text-white text-xs font-medium">
                {selectedVideo.category}
              </span>
            </div>
            <div className="p-5">
              <h2 id="video-modal-title" className="text-xl font-bold text-gray-800 mb-2">{selectedVideo.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{selectedVideo.description}</p>
              <div className="flex gap-4 text-sm text-gray-500 mb-4">
                <span>{selectedVideo.duration}</span>
                <span>{selectedVideo.instructor}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="w-full py-2.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
