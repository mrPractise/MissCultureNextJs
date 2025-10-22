'use client'

import { motion } from 'framer-motion'
import { User, BookOpen, Award, Heart, Mail } from 'lucide-react'
import { useState } from 'react'
import ContactModal from '@/components/ContactModal'

const Ambassador = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const ambassadorInfo = {
    name: 'Susan',
    title: 'Cultural Ambassador',
    bio: 'A passionate advocate for Kenya\'s cultural heritage, Susan represents the beauty and diversity of our nation on the global stage.',
    mission: 'To bridge cultures, promote understanding, and showcase the rich tapestry of Kenyan traditions to the world.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=500&fit=crop'
    ]
  }

  const journeyHighlights = [
    {
      title: 'Her Story',
      description: 'Born in the heart of Kenya, Susan grew up surrounded by the rich tapestry of our nation\'s diverse cultures. From a young age, she witnessed the power of cultural unity and the beauty of our traditions. Her journey began in local community centers, where she volunteered to teach children about Kenyan heritage. Through years of dedicated study in anthropology and cultural studies, coupled with grassroots activism, she emerged as a powerful voice for cultural preservation. Today, Susan stands as a beacon of hope and pride, having transformed from a passionate community volunteer to an internationally recognized cultural ambassador, proving that one person\'s dedication can spark a movement.',
      icon: User
    },
    {
      title: 'Values & Mission',
      description: 'Susan\'s work is deeply rooted in the Ubuntu philosophy - "I am because we are" - a belief that our humanity is intertwined with others\'. She champions community solidarity, mutual respect, and intercultural dialogue as pathways to global harmony. Her mission extends beyond cultural showcase; she envisions a world where diversity is celebrated as humanity\'s greatest asset, where African culture is recognized for its profound contributions to global civilization, and where young Kenyans feel empowered to embrace their heritage with pride. Through authentic storytelling and genuine connection, Susan bridges divides and builds understanding across continents.',
      icon: Heart
    },
    {
      title: 'Engagement Journal',
      description: 'Follow Susan\'s transformative journey through her detailed chronicles documenting cultural exchanges across five continents, community development projects in rural Kenya, high-level diplomatic engagements, and grassroots youth empowerment initiatives. Each journal entry offers intimate reflections on the challenges of cultural representation, the joy of connecting hearts across borders, the responsibility of being a cultural bridge, and the profound impact of preserving heritage in a rapidly globalizing world. Her stories inspire thousands to take pride in their roots while embracing global citizenship.',
      icon: BookOpen
    },
    {
      title: 'Recognition & Impact',
      description: 'Susan\'s tireless dedication has earned prestigious recognition from UNESCO for cultural preservation, the African Union for youth empowerment, Kenya\'s Presidential Award for Cultural Excellence, and numerous international cultural organizations. Yet her greatest achievement transcends awards - she has inspired over 5,000 young Kenyans to become cultural advocates, facilitated partnerships between 50+ international organizations and Kenyan communities, created sustainable income opportunities for 500+ traditional artisans, and reached millions globally through her advocacy work, fundamentally changing how the world perceives African culture and Kenya\'s rich heritage.',
      icon: Award
    }
  ]

  const partners = [
    { name: 'UNESCO', logo: '/api/placeholder/150/80' },
    { name: 'Kenya Tourism Board', logo: '/api/placeholder/150/80' },
    { name: 'Cultural Heritage Foundation', logo: '/api/placeholder/150/80' },
    { name: 'Global Peace Initiative', logo: '/api/placeholder/150/80' },
    { name: 'Women\'s Empowerment Network', logo: '/api/placeholder/150/80' },
    { name: 'Youth Development Program', logo: '/api/placeholder/150/80' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 decorative-pattern opacity-30" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The Ambassador — <span className="text-gradient-green">Susan's Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the inspiring individual who represents Kenya's cultural heritage 
            and values on the global stage.
          </p>
        </motion.div>

        {/* Ambassador Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant-lg transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src={ambassadorInfo.image}
                alt={ambassadorInfo.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-colored-red animate-pulse-glow">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {ambassadorInfo.name}
            </h3>
            <p className="text-xl text-green-600 font-semibold mb-6">
              {ambassadorInfo.title}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {ambassadorInfo.bio}
            </p>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-elegant border-2 border-green-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mission Statement</h4>
              <p className="text-gray-700 italic">
                "{ambassadorInfo.mission}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Journey Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Her Journey
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 text-center group cursor-pointer transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300 shadow-md">
                  <highlight.icon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Portfolio Preview
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Cultural Event 1',
                subtitle: 'Official Photoshoot',
                image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=400&fit=crop'
              },
              {
                title: 'International Conference',
                subtitle: 'Global Stage Appearance',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop'
              },
              {
                title: 'Community Engagement',
                subtitle: 'Local Impact Work',
                image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=500&h=400&fit=crop'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-200">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <motion.a
              href="https://gallery.misscultureglobalkenya.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-colored-green"
            >
              View Full Gallery
            </motion.a>
          </div>
        </motion.div>

        {/* Ambassador Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Susan's Journey in Photos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=300&h=400&fit=crop'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
              >
                <img
                  src={image}
                  alt={`Susan ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ambassador Videos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Susan's Story
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Susan's Journey"
                className="w-full h-80 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Cultural Ambassador Work"
                className="w-full h-80 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Partners & Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Partners & Sponsors
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Susan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 via-emerald-600 to-yellow-500 rounded-3xl p-12 text-white text-center shadow-elegant-lg relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
              Connect with Susan
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Interested in collaborating with Susan or having her speak at your event? 
              Get in touch to discuss opportunities and partnerships.
            </p>
            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 mx-auto shadow-elegant"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Susan</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        type="general"
      />
    </section>
  )
}

export default Ambassador
