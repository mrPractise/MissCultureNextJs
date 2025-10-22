'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import EventDetailsModal from '@/components/EventDetailsModal'
import ContactModal from '@/components/ContactModal'

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isEventModalOpen, setIsEventModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const upcomingEvents = [
    {
      id: 1,
      title: 'Cultural Heritage Festival 2024',
      date: '2024-03-15',
      time: '10:00 AM',
      venue: 'Nairobi National Museum',
      location: 'Nairobi, Kenya',
      description: 'A celebration of Kenya\'s diverse cultural heritage featuring traditional performances, artisan showcases, and cultural exhibitions.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      category: 'Cultural Event',
      capacity: 500,
      price: 'Free',
      organizer: 'Miss Culture Global Kenya',
      contactEmail: 'events@misscultureglobalkenya.com',
      contactPhone: '+254 700 000 000',
      ticketCategories: [
        {
          name: 'General Admission',
          price: 'Free',
          description: 'Access to all festival activities and performances',
          available: 450,
          total: 500
        },
        {
          name: 'VIP Experience',
          price: 'KSh 2,000',
          description: 'Premium seating, meet & greet, and exclusive access',
          available: 30,
          total: 50
        }
      ],
      votingEnabled: true,
      currentVotes: 127
    },
    {
      id: 2,
      title: 'International Women\'s Day Conference',
      date: '2024-03-08',
      time: '9:00 AM',
      venue: 'KICC Convention Centre',
      location: 'Nairobi, Kenya',
      description: 'Empowering women through cultural exchange and leadership development in the global community.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      category: 'Conference',
      capacity: 200,
      price: 'KSh 2,000',
      organizer: 'Women in Leadership Kenya',
      contactEmail: 'conference@wilkenya.org',
      contactPhone: '+254 700 000 001',
      ticketCategories: [
        {
          name: 'Early Bird',
          price: 'KSh 1,500',
          description: 'Limited time offer - includes lunch and materials',
          available: 50,
          total: 50
        },
        {
          name: 'Regular',
          price: 'KSh 2,000',
          description: 'Standard conference access with lunch',
          available: 120,
          total: 150
        },
        {
          name: 'Student',
          price: 'KSh 1,000',
          description: 'Discounted rate for students with valid ID',
          available: 30,
          total: 30
        }
      ],
      votingEnabled: true,
      currentVotes: 89
    },
    {
      id: 3,
      title: 'Traditional Dance Workshop',
      date: '2024-03-22',
      time: '2:00 PM',
      venue: 'Alliance Française',
      location: 'Nairobi, Kenya',
      description: 'Learn traditional Kenyan dances from master instructors and experience the rhythm of our culture.',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop',
      category: 'Workshop',
      capacity: 50,
      price: 'KSh 1,500',
      organizer: 'Alliance Française Nairobi',
      contactEmail: 'cultural@alliancefr.co.ke',
      contactPhone: '+254 700 000 002',
      ticketCategories: [
        {
          name: 'Adult',
          price: 'KSh 1,500',
          description: 'Full workshop participation with materials',
          available: 35,
          total: 40
        },
        {
          name: 'Child (Under 16)',
          price: 'KSh 800',
          description: 'Special rate for children under 16',
          available: 10,
          total: 10
        }
      ],
      votingEnabled: false,
      currentVotes: 0
    }
  ]

  const pastEvents = [
    {
      id: 4,
      title: 'UNESCO Cultural Exchange Program',
      date: '2024-01-20',
      venue: 'UNESCO Headquarters',
      location: 'Paris, France',
      description: 'Representing Kenya at the international cultural exchange program.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      category: 'International'
    },
    {
      id: 5,
      title: 'Community Outreach Program',
      date: '2024-01-10',
      venue: 'Kibera Community Centre',
      location: 'Nairobi, Kenya',
      description: 'Engaging with local communities to promote cultural awareness and education.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      category: 'Community'
    }
  ]

  const eventCategories = ['All', 'Cultural Event', 'Conference', 'Workshop', 'International', 'Community']

  const handleEventClick = (event: any) => {
    setSelectedEvent(event)
    setIsEventModalOpen(true)
  }

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

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
          <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
              Events & <span className="text-gradient-kenya">Appearances</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
              Join Susan at cultural events, conferences, and community engagements as she represents Kenya on the global stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 decorative-pattern opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          >
            {eventCategories.map((category) => (
              <button
                key={category}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base transform hover:-translate-y-1 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-colored-green'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-elegant hover:shadow-elegant-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Upcoming <span className="text-gradient-green">Events</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {event.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-green-600" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-green-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-green-600" />
                        <span>{event.venue}, {event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-green-600" />
                        <span>Capacity: {event.capacity}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        handleEventClick(event)
                      }}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      Get Tickets
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Past <span className="text-gradient-green">Events</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                        <span>{event.venue}, {event.location}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200">
                      <span>View Photos</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <EventDetailsModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        event={selectedEvent}
      />
      
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        type="event"
      />
    </div>
  )
}

export default EventsPage
