'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Globe, Award } from 'lucide-react'
import { useState } from 'react'
import ContactModal from '@/components/ContactModal'

const PartnershipPage = () => {
  const impactAreas = [
    {
      title: 'Cultural Preservation',
      description: 'Support traditional arts, music, and cultural practices',
      icon: Heart,
      impact: '500+ artisans supported'
    },
    {
      title: 'Youth Empowerment',
      description: 'Educational programs and leadership development',
      icon: Users,
      impact: '1,000+ youth reached'
    },
    {
      title: 'Global Outreach',
      description: 'International cultural exchange programs',
      icon: Globe,
      impact: '50+ countries reached'
    },
    {
      title: 'Community Development',
      description: 'Local community projects and initiatives',
      icon: Award,
      impact: '100+ communities impacted'
    }
  ]

  const sponsors = [
    {
      name: 'Kenya Tourism Board',
      logo: '/api/placeholder/200/100',
      description: 'Promoting Kenya\'s cultural heritage globally',
      tier: 'Platinum'
    },
    {
      name: 'Safaricom Foundation',
      logo: '/api/placeholder/200/100',
      description: 'Empowering communities through technology',
      tier: 'Gold'
    },
    {
      name: 'Equity Bank',
      logo: '/api/placeholder/200/100',
      description: 'Supporting youth empowerment programs',
      tier: 'Gold'
    },
    {
      name: 'KCB Bank',
      logo: '/api/placeholder/200/100',
      description: 'Investing in cultural preservation',
      tier: 'Silver'
    },
    {
      name: 'Coca-Cola East Africa',
      logo: '/api/placeholder/200/100',
      description: 'Community development partner',
      tier: 'Silver'
    },
    {
      name: 'Kenya Airways',
      logo: '/api/placeholder/200/100',
      description: 'Connecting Kenya to the world',
      tier: 'Silver'
    },
    {
      name: 'Tusker',
      logo: '/api/placeholder/200/100',
      description: 'Celebrating Kenyan spirit and culture',
      tier: 'Bronze'
    },
    {
      name: 'Nation Media Group',
      logo: '/api/placeholder/200/100',
      description: 'Media partner for cultural visibility',
      tier: 'Bronze'
    }
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100'
      case 'Gold':
        return 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50'
      case 'Silver':
        return 'border-gray-300 bg-gradient-to-br from-gray-50 to-slate-50'
      case 'Bronze':
        return 'border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50'
      default:
        return 'border-gray-200 bg-white'
    }
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
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Partnership & Sponsorship
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
              Join us in promoting Kenya's cultural heritage and empowering communities worldwide through meaningful partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Impact Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Impact Areas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <p className="text-green-600 font-semibold">{area.impact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Partnership Opportunities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Sponsorship</h3>
                <p className="text-gray-600 mb-6">
                  Support our cultural events and festivals with your brand visibility and community impact.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-600">Brand visibility at events</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-600">Social media recognition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-600">Community impact reports</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Support</h3>
                <p className="text-gray-600 mb-6">
                  Fund specific programs like youth empowerment, cultural education, or community development.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm text-gray-600">Program naming rights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm text-gray-600">Progress updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm text-gray-600">Impact measurement</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Outreach</h3>
                <p className="text-gray-600 mb-6">
                  Support our international cultural exchange programs and global visibility initiatives.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-sm text-gray-600">International recognition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-sm text-gray-600">Global media coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-sm text-gray-600">Cultural diplomacy</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Sponsors Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-gradient-green">Valued Sponsors</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are grateful to our sponsors who believe in our mission and support us in promoting Kenya's cultural heritage worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 p-6 border-2 ${getTierColor(sponsor.tier)} group cursor-pointer transform hover:-translate-y-2`}
                >
                  {/* Tier Badge */}
                  <div className="absolute -top-3 -right-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${
                      sponsor.tier === 'Platinum' ? 'bg-gray-500' :
                      sponsor.tier === 'Gold' ? 'bg-yellow-500' :
                      sponsor.tier === 'Silver' ? 'bg-gray-400' :
                      'bg-orange-500'
                    }`}>
                      {sponsor.tier}
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 h-20 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {sponsor.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {sponsor.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PartnershipPage
