'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, DollarSign, ExternalLink, Share2, Heart, X } from 'lucide-react'
import { useState } from 'react'
import PaymentModal from './PaymentModal'

interface TicketCategory {
  name: string
  price: string
  description: string
  available: number
  total: number
}

interface Event {
  id: number
  title: string
  date: string
  time: string
  venue: string
  location: string
  description: string
  image: string
  category: string
  capacity: number
  price: string
  registrationUrl?: string
  organizer?: string
  contactEmail?: string
  contactPhone?: string
  ticketCategories?: TicketCategory[]
  votingEnabled?: boolean
  currentVotes?: number
}

interface EventDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  event: Event | null
}

const EventDetailsModal = ({ isOpen, onClose, event }: EventDetailsModalProps) => {
  const [hasVoted, setHasVoted] = useState(false)
  const [selectedTicketCategory, setSelectedTicketCategory] = useState<string | null>(null)
  const [ticketQuantities, setTicketQuantities] = useState<{[key: string]: number}>({})
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  if (!isOpen || !event) return null

  const handleVote = () => {
    setHasVoted(true)
    // In a real app, this would send a vote to the backend
  }

  const updateQuantity = (ticketName: string, quantity: number) => {
    setTicketQuantities(prev => ({
      ...prev,
      [ticketName]: Math.max(0, Math.min(quantity, event?.ticketCategories?.find(t => t.name === ticketName)?.available || 0))
    }))
  }

  const getTotalTickets = () => {
    return Object.values(ticketQuantities).reduce((sum, qty) => sum + qty, 0)
  }

  const getTotalPrice = () => {
    if (!event?.ticketCategories) return 0
    
    return Object.entries(ticketQuantities).reduce((total, [ticketName, quantity]) => {
      const ticket = event.ticketCategories?.find(t => t.name === ticketName)
      if (!ticket || quantity === 0) return total
      
      // Extract numeric value from price string
      const priceValue = ticket.price === 'Free' ? 0 : parseInt(ticket.price.replace(/[^\d]/g, ''))
      return total + (priceValue * quantity)
    }, 0)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="bg-white w-full h-full overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative flex-shrink-0">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
            <p className="text-gray-200 line-clamp-2">{event.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Event Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Date & Time</p>
                    <p className="text-gray-600">{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Venue</p>
                    <p className="text-gray-600">{event.venue}</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Capacity</p>
                    <p className="text-gray-600">{event.capacity} attendees</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Price</p>
                    <p className="text-gray-600">{event.price}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Actions */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h3>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>

              {event.organizer && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Organizer</h4>
                  <p className="text-gray-600">{event.organizer}</p>
                </div>
              )}

              {event.contactEmail && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                  <p className="text-gray-600">{event.contactEmail}</p>
                  {event.contactPhone && (
                    <p className="text-gray-600">{event.contactPhone}</p>
                  )}
                </div>
              )}

              {/* Ticket Categories */}
              {event.ticketCategories && event.ticketCategories.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Ticket Categories</h4>
                  <div className="space-y-3">
                    {event.ticketCategories.map((ticket, index) => (
                      <div
                        key={index}
                        className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                          selectedTicketCategory === ticket.name
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900">{ticket.name}</h5>
                            <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {ticket.available} of {ticket.total} available
                            </p>
                          </div>
                          <div className="text-right ml-4">
                            <p className="text-lg font-bold text-red-600">{ticket.price}</p>
                          </div>
                        </div>
                        
                        {/* Quantity Selector */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(ticket.name, (ticketQuantities[ticket.name] || 0) - 1)}
                              disabled={(ticketQuantities[ticket.name] || 0) <= 0}
                              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed flex items-center justify-center text-gray-600"
                            >
                              -
                            </button>
                            <span className="w-12 text-center font-semibold text-gray-900">
                              {ticketQuantities[ticket.name] || 0}
                            </span>
                            <button
                              onClick={() => updateQuantity(ticket.name, (ticketQuantities[ticket.name] || 0) + 1)}
                              disabled={(ticketQuantities[ticket.name] || 0) >= ticket.available}
                              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed flex items-center justify-center text-gray-600"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => setSelectedTicketCategory(selectedTicketCategory === ticket.name ? null : ticket.name)}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                              selectedTicketCategory === ticket.name
                                ? 'bg-red-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            {selectedTicketCategory === ticket.name ? 'Selected' : 'Select'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Total Summary */}
                  {getTotalTickets() > 0 && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900">Total Tickets Selected:</span>
                          <span className="text-lg font-bold text-red-600">{getTotalTickets()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900">Total Price:</span>
                          <span className="text-lg font-bold text-red-600">
                            {getTotalPrice() === 0 ? 'Free' : `KSh ${getTotalPrice().toLocaleString()}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}


              {/* Action Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  disabled={getTotalTickets() === 0}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 ${
                    getTotalTickets() > 0 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Get Tickets ({getTotalTickets()}) - {getTotalPrice() === 0 ? 'Free' : `KSh ${getTotalPrice().toLocaleString()}`}</span>
                </button>

                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>Share Event</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        event={event}
        ticketQuantities={ticketQuantities}
        totalPrice={getTotalPrice()}
        totalTickets={getTotalTickets()}
      />
    </div>
  )
}

export default EventDetailsModal
