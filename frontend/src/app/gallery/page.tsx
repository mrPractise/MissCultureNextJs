'use client'

import { motion } from 'framer-motion'
import { Camera, Video, Download, Share2, Heart, Filter } from 'lucide-react'
import { useState } from 'react'
import PhotoLightboxModal from '@/components/PhotoLightboxModal'
import VideoModal from '@/components/VideoModal'

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const categories = ['All', 'Official Photoshoots', 'Cultural Events', 'Behind the Scenes', 'Community Work', 'Travel', 'Awards']

  const photos = [
    {
      id: 1,
      title: 'Traditional Attire Photoshoot',
      category: 'Official Photoshoots',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=800&fit=crop',
      photographer: 'John Doe',
      date: '2024-01-15',
      likes: 245,
      featured: true
    },
    {
      id: 2,
      title: 'Cultural Festival Performance',
      category: 'Cultural Events',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      photographer: 'Jane Smith',
      date: '2024-01-10',
      likes: 189,
      featured: false
    },
    {
      id: 3,
      title: 'Behind the Scenes - Preparation',
      category: 'Behind the Scenes',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=600&fit=crop',
      photographer: 'Mike Johnson',
      date: '2024-01-08',
      likes: 156,
      featured: true
    },
    {
      id: 4,
      title: 'Community Outreach Program',
      category: 'Community Work',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      photographer: 'Sarah Wilson',
      date: '2024-01-05',
      likes: 203,
      featured: false
    },
    {
      id: 5,
      title: 'International Conference',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop',
      photographer: 'David Brown',
      date: '2024-01-01',
      likes: 178,
      featured: true
    },
    {
      id: 6,
      title: 'Award Ceremony',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=600&fit=crop',
      photographer: 'Lisa Davis',
      date: '2023-12-28',
      likes: 312,
      featured: false
    },
    {
      id: 7,
      title: 'Traditional Dance Performance',
      category: 'Cultural Events',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      photographer: 'Tom Wilson',
      date: '2023-12-25',
      likes: 167,
      featured: false
    },
    {
      id: 8,
      title: 'UNESCO Event',
      category: 'Official Photoshoots',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop',
      photographer: 'Emma Taylor',
      date: '2023-12-20',
      likes: 234,
      featured: true
    },
    {
      id: 9,
      title: 'Community Workshop',
      category: 'Community Work',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=600&fit=crop',
      photographer: 'Alex Johnson',
      date: '2023-12-15',
      likes: 145,
      featured: false
    },
    {
      id: 10,
      title: 'Fashion Show',
      category: 'Official Photoshoots',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      photographer: 'Chris Lee',
      date: '2023-12-10',
      likes: 198,
      featured: false
    },
    {
      id: 11,
      title: 'Cultural Exchange Program',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop',
      photographer: 'Maria Garcia',
      date: '2023-12-05',
      likes: 221,
      featured: true
    },
    {
      id: 12,
      title: 'Youth Empowerment Event',
      category: 'Community Work',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=600&fit=crop',
      photographer: 'James Miller',
      date: '2023-11-30',
      likes: 176,
      featured: false
    }
  ]

  const videos = [
    {
      id: 1,
      title: 'Susan\'s Cultural Journey',
      category: 'Behind the Scenes',
      thumbnail: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '5:32',
      views: '12.5K',
      date: '2024-01-15',
      description: 'A behind-the-scenes look at Susan\'s journey as a cultural ambassador.'
    },
    {
      id: 2,
      title: 'Traditional Dance Performance',
      category: 'Cultural Events',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:45',
      views: '8.7K',
      date: '2024-01-10',
      description: 'Experience the beauty of traditional Kenyan dance performances.'
    },
    {
      id: 3,
      title: 'Community Impact Story',
      category: 'Community Work',
      thumbnail: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '7:18',
      views: '15.2K',
      date: '2024-01-05',
      description: 'See how Susan\'s work impacts local communities across Kenya.'
    }
  ]

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index)
    setIsPhotoModalOpen(true)
  }

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video)
    setIsVideoModalOpen(true)
  }

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-green-900/80 via-green-800/70 to-yellow-600/80">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=600&fit=crop)' }} />
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.4s' }} />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
              <span className="text-gradient-kenya">Gallery</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
              Explore Susan's journey through stunning photographs and videos capturing cultural moments, 
              official events, and behind-the-scenes glimpses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 decorative-pattern opacity-20" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base transform hover:-translate-y-1 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-colored-green'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-elegant hover:shadow-elegant-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                <span className="text-gradient-green">Photos</span>
              </h2>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                  <Filter className="w-5 h-5" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
                  onClick={() => handlePhotoClick(index)}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Featured Badge */}
                  {photo.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {photo.category}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Heart className="w-6 h-6 text-white" />
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Share2 className="w-6 h-6 text-white" />
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Download className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="font-semibold mb-1 line-clamp-1">{photo.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-200">
                      <span>{photo.photographer}</span>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4" />
                        <span>{photo.likes}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="text-gradient-green">Videos</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{video.category}</span>
                      <div className="flex items-center space-x-2">
                        <span>{video.views} views</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Modals */}
      <PhotoLightboxModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        photos={filteredPhotos}
        currentIndex={selectedPhotoIndex}
        onNavigate={setSelectedPhotoIndex}
      />
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        video={selectedVideo}
      />
    </div>
  )
}

export default GalleryPage
