'use client'

import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle, Share2 } from 'lucide-react'

const SocialFeed = () => {
  const socialPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Celebrating Kenya\'s rich cultural heritage at the International Cultural Festival. The energy and warmth of our people never fails to inspire! 🇰🇪✨',
      image: '/api/placeholder/400/400',
      likes: 1250,
      comments: 89,
      date: '2 hours ago'
    },
    {
      id: 2,
      platform: 'Instagram',
      content: 'Behind the scenes of our latest cultural photoshoot. Every outfit tells a story of our beautiful traditions. 📸',
      image: '/api/placeholder/400/400',
      likes: 980,
      comments: 45,
      date: '1 day ago'
    },
    {
      id: 3,
      platform: 'Instagram',
      content: 'Meeting with young cultural ambassadors from across Africa. The future of our continent is bright! 🌍',
      image: '/api/placeholder/400/400',
      likes: 2100,
      comments: 156,
      date: '3 days ago'
    },
    {
      id: 4,
      platform: 'Instagram',
      content: 'Traditional dance performance that left everyone in awe. Our culture is truly magical! 💃',
      image: '/api/placeholder/400/400',
      likes: 1750,
      comments: 78,
      date: '5 days ago'
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Live <span className="text-gradient-kenya">Updates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow Susan's journey in real-time through her social media updates. 
            Stay connected with the latest cultural events and behind-the-scenes moments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={`Post ${post.id}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                    <Instagram className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{post.platform}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.content}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-200">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-medium">Like</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors duration-200">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Comment</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors duration-200">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://instagram.com/misscultureglobalkenya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 hover:from-pink-600 hover:via-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            <Instagram className="w-6 h-6 mr-2" />
            Follow @misscultureglobalkenya
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialFeed
