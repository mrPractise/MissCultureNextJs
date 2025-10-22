'use client'

import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin, Users, Clock, X } from 'lucide-react'
import { useState } from 'react'

const VotingPage = () => {
  const [votedParticipants, setVotedParticipants] = useState<Set<string>>(new Set())
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const events = [
    {
      id: 1,
      title: 'Miss Culture Global Kenya 2024',
      date: '2024-04-15',
      time: '7:00 PM',
      venue: 'KICC Convention Centre',
      location: 'Nairobi, Kenya',
      description: 'The ultimate cultural pageant celebrating Kenya\'s diverse heritage and empowering young women to be cultural ambassadors.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      category: 'Modeling Event',
      votingEnabled: true,
      participants: [
        {
          id: '1-1',
          name: 'Grace Wanjiku',
          age: 22,
          category: 'adult',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop',
          ideology: 'Promoting cultural unity through education and community engagement',
          whyVote: 'Grace believes in using her platform to educate young people about Kenya\'s rich cultural heritage and inspire them to be proud of their roots.',
          hometown: 'Nairobi'
        },
        {
          id: '1-2',
          name: 'Aisha Mwangi',
          age: 23,
          category: 'adult',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
          ideology: 'Empowering women through cultural entrepreneurship',
          whyVote: 'Aisha is passionate about helping women start cultural businesses and preserving traditional crafts for future generations.',
          hometown: 'Mombasa'
        },
        {
          id: '1-3',
          name: 'Faith Chebet',
          age: 19,
          category: 'adult',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop',
          ideology: 'Youth leadership in cultural preservation',
          whyVote: 'Faith is dedicated to engaging young people in cultural activities and creating innovative ways to keep traditions alive.',
          hometown: 'Nakuru'
        },
        {
          id: '1-4',
          name: 'Zawadi Makena',
          age: 17,
          category: 'teens',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
          ideology: 'Inspiring the next generation through cultural pride',
          whyVote: 'Zawadi wants to show other teenagers that being culturally aware and proud is cool and important for our future.',
          hometown: 'Kisumu'
        },
        {
          id: '1-5',
          name: 'Neema Akinyi',
          age: 16,
          category: 'teens',
          image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop',
          ideology: 'Cultural diversity as a strength',
          whyVote: 'Neema believes that Kenya\'s diversity is its greatest strength and wants to promote unity among all communities.',
          hometown: 'Eldoret'
        },
        {
          id: '1-6',
          name: 'Wanjiku Kamau',
          age: 18,
          category: 'teens',
          image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=500&fit=crop',
          ideology: 'Environmental conservation through cultural practices',
          whyVote: 'Wanjiku combines traditional environmental knowledge with modern conservation efforts to protect Kenya\'s natural heritage.',
          hometown: 'Thika'
        }
      ]
    },
    {
      id: 2,
      title: 'Cultural Dance Competition 2024',
      date: '2024-03-20',
      time: '6:00 PM',
      venue: 'Alliance Française',
      location: 'Nairobi, Kenya',
      description: 'A vibrant showcase of traditional Kenyan dances featuring talented performers from across the country.',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop',
      category: 'Dance Competition',
      votingEnabled: true,
      participants: [
        {
          id: '2-1',
          name: 'Kikuyu Cultural Dancers',
          age: 25,
          category: 'group',
          image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=500&fit=crop',
          ideology: 'Preserving Kikuyu traditional dance heritage',
          whyVote: 'Our group has been performing traditional Kikuyu dances for over 10 years, keeping the culture alive through authentic performances.',
          hometown: 'Nyeri'
        },
        {
          id: '2-2',
          name: 'Luo Warriors Dance Group',
          age: 28,
          category: 'group',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
          ideology: 'Celebrating Luo warrior traditions through dance',
          whyVote: 'We bring the powerful energy of Luo warrior dances to modern audiences, connecting past and present.',
          hometown: 'Kisumu'
        },
        {
          id: '2-3',
          name: 'Maasai Cultural Performers',
          age: 30,
          category: 'group',
          image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=500&fit=crop',
          ideology: 'Sharing Maasai culture with the world',
          whyVote: 'Our authentic Maasai performances educate people about our rich cultural heritage and traditions.',
          hometown: 'Kajiado'
        }
      ]
    },
    {
      id: 3,
      title: 'Traditional Music Talent Show',
      date: '2024-05-10',
      time: '7:30 PM',
      venue: 'Carnivore Grounds',
      location: 'Nairobi, Kenya',
      description: 'Discovering the next generation of traditional Kenyan musicians and vocalists.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      category: 'Music Competition',
      votingEnabled: true,
      participants: [
        {
          id: '3-1',
          name: 'Sarah Wanjiku',
          age: 24,
          category: 'solo',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop',
          ideology: 'Modernizing traditional Kikuyu folk songs',
          whyVote: 'I blend traditional Kikuyu melodies with contemporary sounds to make our culture accessible to young people.',
          hometown: 'Nairobi'
        },
        {
          id: '3-2',
          name: 'Onyango & The Luo Ensemble',
          age: 26,
          category: 'group',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
          ideology: 'Preserving Luo musical traditions',
          whyVote: 'Our ensemble keeps Luo traditional instruments and songs alive for future generations.',
          hometown: 'Kisumu'
        },
        {
          id: '3-3',
          name: 'Mama Akinyi',
          age: 45,
          category: 'solo',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
          ideology: 'Passing down traditional wisdom through song',
          whyVote: 'I sing the songs my grandmother taught me, keeping our cultural stories and wisdom alive.',
          hometown: 'Kakamega'
        }
      ]
    },
    {
      id: 4,
      title: 'Cultural Fashion Show',
      date: '2024-06-15',
      time: '8:00 PM',
      venue: 'Sarit Centre',
      location: 'Nairobi, Kenya',
      description: 'Showcasing contemporary fashion inspired by Kenya\'s diverse cultural heritage.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
      category: 'Fashion Show',
      votingEnabled: true,
      participants: [
        {
          id: '4-1',
          name: 'Designer Grace Muthoni',
          age: 29,
          category: 'designer',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop',
          ideology: 'Fusing traditional fabrics with modern design',
          whyVote: 'My designs celebrate Kenya\'s textile heritage while creating contemporary pieces for today\'s fashion-conscious youth.',
          hometown: 'Nairobi'
        },
        {
          id: '4-2',
          name: 'Kikoi Couture by Aisha',
          age: 31,
          category: 'designer',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
          ideology: 'Elevating coastal fashion traditions',
          whyVote: 'I specialize in creating elegant contemporary pieces using traditional coastal fabrics and techniques.',
          hometown: 'Mombasa'
        },
        {
          id: '4-3',
          name: 'Maasai Modern by John',
          age: 27,
          category: 'designer',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
          ideology: 'Bringing Maasai aesthetics to urban fashion',
          whyVote: 'My designs incorporate Maasai beadwork and patterns into modern urban wear, celebrating our heritage.',
          hometown: 'Kajiado'
        }
      ]
    }
  ]

  const handleParticipantVote = (participantId: string) => {
    if (votedParticipants.has(participantId)) {
      // Remove vote
      setVotedParticipants(prev => {
        const newSet = new Set(prev)
        newSet.delete(participantId)
        return newSet
      })
    } else {
      // Add vote
      setVotedParticipants(prev => new Set(prev).add(participantId))
    }
  }

  const getParticipantVoteCount = (participantId: string) => {
    // Vote counts are handled by the backend
    return 0
  }

  const getFilteredParticipants = (eventId: number) => {
    const event = events.find(e => e.id === eventId)
    if (!event || !event.participants) return []
    if (selectedCategory === 'all') return event.participants
    return event.participants.filter(p => p.category === selectedCategory)
  }

  const getTotalVotes = () => {
    // Total votes are handled by the backend
    return 0
  }

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-green-600/90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Vote for Participants
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Support your favorite participants in our cultural events and competitions
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=600&fit=crop')] bg-cover bg-center"></div>
      </section>

      {/* Voting Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vote for Event Participants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our cultural events and vote for your favorite participants. 
              Each event features talented individuals and groups showcasing Kenya's diverse cultural heritage.
            </p>
          </motion.div>

          {/* Event Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              {events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    selectedEvent === event.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {event.title}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            {selectedEvent && (
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-gray-100 p-1 rounded-lg max-w-full overflow-x-auto">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md font-semibold transition-colors duration-200 text-xs sm:text-sm ${
                      selectedCategory === 'all'
                        ? 'bg-red-600 text-white'
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    All Participants
                  </button>
                  {events.find(e => e.id === selectedEvent)?.participants && 
                   Array.from(new Set(events.find(e => e.id === selectedEvent)?.participants?.map(p => p.category))).map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md font-semibold transition-colors duration-200 text-xs sm:text-sm ${
                        selectedCategory === category
                          ? 'bg-red-600 text-white'
                          : 'text-gray-600 hover:text-red-600'
                      }`}
                    >
                      {category === 'adult' ? 'Adults' : 
                       category === 'teens' ? 'Teens' :
                       category === 'group' ? 'Groups' :
                       category === 'solo' ? 'Solo' :
                       category === 'designer' ? 'Designers' : category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Selected Event Participants */}
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {(() => {
                const event = events.find(e => e.id === selectedEvent)
                if (!event) return null
                
                return (
                  <div>
                    {/* Event Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                      <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-4">{event.description}</p>
                      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-red-600" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-red-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-red-600" />
                          <span>{event.venue}, {event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Participants Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {getFilteredParticipants(selectedEvent).map((participant, index) => (
                        <motion.div
                          key={participant.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                          {/* Participant Image */}
                          <div className="relative">
                            <img
                              src={participant.image}
                              alt={participant.name}
                              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                participant.category === 'adult' 
                                  ? 'bg-purple-600 text-white' 
                                  : participant.category === 'teens'
                                  ? 'bg-pink-600 text-white'
                                  : participant.category === 'group'
                                  ? 'bg-blue-600 text-white'
                                  : participant.category === 'solo'
                                  ? 'bg-green-600 text-white'
                                  : participant.category === 'designer'
                                  ? 'bg-orange-600 text-white'
                                  : 'bg-gray-600 text-white'
                              }`}>
                                {participant.category === 'adult' ? 'Adult' : 
                                 participant.category === 'teens' ? 'Teens' :
                                 participant.category === 'group' ? 'Group' :
                                 participant.category === 'solo' ? 'Solo' :
                                 participant.category === 'designer' ? 'Designer' : participant.category}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4">
                              <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                Age {participant.age}
                              </span>
                            </div>
                          </div>

                          {/* Participant Content */}
                          <div className="p-6">
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">
                              {participant.name}
                            </h4>
                            <p className="text-gray-600 mb-2">
                              <span className="font-semibold">From:</span> {participant.hometown}
                            </p>
                            
                            <div className="mb-4">
                              <h5 className="font-semibold text-gray-900 mb-2">Ideology:</h5>
                              <p className="text-sm text-gray-600 mb-3">
                                {participant.ideology}
                              </p>
                              <h5 className="font-semibold text-gray-900 mb-2">Why Vote for Me:</h5>
                              <p className="text-sm text-gray-600">
                                {participant.whyVote}
                              </p>
                            </div>

                            {/* Voting Section */}
                            <div className="flex items-center justify-center">
                              <button
                                onClick={() => handleParticipantVote(participant.id)}
                                className={`w-full px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 flex items-center justify-center space-x-2 ${
                                  votedParticipants.has(participant.id)
                                    ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                    : 'bg-green-100 text-green-600 hover:bg-green-200'
                                }`}
                              >
                                <Heart 
                                  className={`w-5 h-5 ${
                                    votedParticipants.has(participant.id) 
                                      ? 'text-red-500 fill-current' 
                                      : 'text-green-500'
                                  }`}
                                />
                                <span>
                                  {votedParticipants.has(participant.id) ? 'Voted' : 'Vote'}
                                </span>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}

          {/* Voting Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-red-600 to-green-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Your Voting Summary</h3>
            <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              Your votes help us understand which participants are most popular with our community. 
              We use this feedback to improve our cultural programs and create better experiences for everyone.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">{votedParticipants.size}</div>
                <div className="text-green-100">Participants You Voted For</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{events.length}</div>
                <div className="text-green-100">Events Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VotingPage