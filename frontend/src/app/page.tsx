'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import SocialFeed from '@/components/SocialFeed'
import FollowCTA from '@/components/FollowCTA'
import EventDetailsModal from '@/components/EventDetailsModal'

export default function Home() {
  const [showEventModal, setShowEventModal] = useState(false)

  // Show event modal after 2 seconds on initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEventModal(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Mock upcoming event data - this will come from backend
  const upcomingEvent = {
    id: 1,
    title: 'Cultural Heritage Festival 2024',
    date: '2024-03-15',
    time: '10:00 AM',
    venue: 'Nairobi National Museum',
    location: 'Nairobi, Kenya',
    description: 'Join us for a celebration of Kenya\'s diverse cultural heritage featuring traditional performances, artisan showcases, and cultural exhibitions. This is a must-attend event for everyone passionate about Kenyan culture!',
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
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Highlights />
      <SocialFeed />
      <FollowCTA />
      
      {/* Upcoming Event Modal */}
      <EventDetailsModal
        isOpen={showEventModal}
        onClose={() => setShowEventModal(false)}
        event={upcomingEvent}
      />
    </div>
  )
}