'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Heart, Globe, User, ArrowRight } from 'lucide-react'

const Highlights = () => {
  const highlights = [
    {
      title: 'Our Kenya',
      description: 'Discover the diverse regions and communities that make Kenya a truly special place, united by the spirit of Harambee.',
      icon: MapPin,
      href: '/our-kenya',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=400&fit=crop',
      color: 'from-red-600 to-red-700'
    },
    {
      title: 'Our Culture',
      description: 'Immerse yourself in the vibrant traditions, languages, and artistic expressions that define Kenya\'s cultural identity.',
      icon: Heart,
      href: '/our-culture',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=400&fit=crop',
      color: 'from-green-600 to-green-700'
    },
    {
      title: 'Global Stage',
      description: 'Kenya\'s presence on the world stage is marked by excellence, innovation, and positive global impact.',
      icon: Globe,
      href: '/global-stage',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=400&fit=crop',
      color: 'from-black to-gray-800'
    },
    {
      title: 'The Ambassador',
      description: 'Meet Susan, the inspiring individual who represents Kenya\'s cultural heritage and values globally.',
      icon: User,
      href: '/ambassador',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=400&fit=crop',
      color: 'from-red-600 to-red-700'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 decorative-pattern opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our <span className="text-gradient-green">World</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Journey through Kenya's rich heritage, vibrant culture, global achievements, 
            and meet the ambassador who represents our beautiful nation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={highlight.href}>
                <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 bg-white transform hover:-translate-y-2">
                  <div className="relative h-48">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${highlight.color} opacity-80`} />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{highlight.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {highlight.description}
                    </p>
                    <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-200">
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/gallery"
              className="bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white text-gray-700 hover:text-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              View Gallery
            </Link>
            <Link
              href="/events"
              className="bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white text-gray-700 hover:text-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Upcoming Events
            </Link>
            <Link
              href="/blog"
              className="bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white text-gray-700 hover:text-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Read Blog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
