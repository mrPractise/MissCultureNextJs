'use client'

import { motion } from 'framer-motion'
import { Trophy, Plane, Lightbulb, Camera } from 'lucide-react'

const GlobalStage = () => {
  const achievements = [
    {
      category: 'Sports',
      title: 'Athletics Excellence',
      description: 'Kenya\'s dominance in long-distance running has brought home countless Olympic and World Championship medals.',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      stats: '50+ Olympic Medals',
      gallery: [
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop'
      ]
    },
    {
      category: 'Tourism',
      title: 'Magical Kenya',
      description: 'From the Maasai Mara to Mount Kenya, our natural beauty attracts millions of visitors annually.',
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      stats: '2M+ Annual Visitors',
      gallery: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop'
      ]
    },
    {
      category: 'Innovation',
      title: 'Silicon Savannah',
      description: 'M-Pesa revolutionized mobile payments, and Nairobi\'s tech scene continues to innovate globally.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop',
      stats: '40M+ M-Pesa Users',
      gallery: [
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
      ]
    },
    {
      category: 'Arts',
      title: 'Creative Expression',
      description: 'From literature to film, Kenyan artists are making their mark on the global cultural landscape.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      stats: 'Award-Winning Films',
      gallery: [
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop'
      ]
    }
  ]

  const globalPresence = [
    {
      title: 'UN Peacekeeping',
      description: 'Kenya is among the top contributors to UN peacekeeping missions worldwide.',
      number: '4,000+'
    },
    {
      title: 'International Trade',
      description: 'Coffee, tea, and flowers from Kenya reach markets across the globe.',
      number: '150+'
    },
    {
      title: 'Diplomatic Relations',
      description: 'Strong partnerships with countries on every continent.',
      number: '100+'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Global Stage — The Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kenya's presence on the world stage is marked by excellence, innovation, 
            and a commitment to making a positive global impact.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold bg-black/30 px-3 py-1 rounded-full text-sm">
                      {achievement.category}
                    </span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-200 mb-4">{achievement.description}</p>
                  <div className="text-yellow-400 font-bold text-lg">
                    {achievement.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Presence Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Kenya's Global Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {globalPresence.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-4">
                  {item.number}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-green-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Impact Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Kenya on the World Stage
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Global impact ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* International Recognition Videos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            International Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Kenya at the Olympics"
                className="w-full h-64 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Tech Innovation in Kenya"
                className="w-full h-64 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Cultural Exchange Programs"
                className="w-full h-64 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Global Journey
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of Kenya's continued success story and help us showcase our culture to the world.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalStage
