'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter, Youtube, MessageCircle, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import ContactModal from '@/components/ContactModal'

const ContactPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@misscultureglobalkenya.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+254 700 000 000',
      description: 'Monday to Friday, 9:00 AM to 5:00 PM EAT'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Nairobi, Kenya',
      description: 'We\'re located in the heart of Kenya\'s capital city'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 5:00 PM',
      description: 'EAT (East Africa Time)'
    }
  ]

  const faqData = [
    {
      question: "How can I become a partner with Miss Culture Global Kenya?",
      answer: "We welcome partnerships from organizations that share our vision of promoting Kenyan culture globally. Please contact us through our partnership inquiry form or email us directly at partnerships@misscultureglobalkenya.com"
    },
    {
      question: "How do I book Susan for an event?",
      answer: "To book Susan for your event, please contact us at least 30 days in advance. You can use our event booking form or call us directly. We'll discuss your requirements and provide a customized proposal."
    },
    {
      question: "Do you offer media interviews?",
      answer: "Yes, we welcome media inquiries and interviews. Please contact our media team at media@misscultureglobalkenya.com with your request, including the topic, format, and preferred timeline."
    },
    {
      question: "How can I support the organization?",
      answer: "You can support us through partnerships, donations, volunteering, or by spreading awareness about our mission. Visit our partnership page to learn about different ways to get involved."
    },
    {
      question: "What is your response time for inquiries?",
      answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please call us directly at +254 700 000 000."
    }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/misscultureglobalkenya', color: 'hover:text-pink-600' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/misscultureglobalkenya', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/missculturekenya', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/misscultureglobalkenya', color: 'hover:text-red-600' }
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-red-900/80 via-black/70 to-green-800/80">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=600&fit=crop)' }} />
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-red-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
              Get In <span className="text-gradient-kenya">Touch</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
              We'd love to hear from you. Reach out to us for partnerships, media inquiries, or general questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 decorative-pattern opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact <span className="text-gradient-green">Information</span>
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <info.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-lg text-red-600 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-elegant p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a <span className="text-gradient-green">Message</span>
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="media">Media Inquiry</option>
                    <option value="event">Event Booking</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <motion.button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(220, 38, 38, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-colored-red"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 decorative-pattern opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-gradient-green">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Miss Culture Global Kenya
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  <div className={`transform transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 decorative-pattern opacity-20" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-40" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Follow Our <span className="text-gradient-kenya">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Stay connected with us on social media for the latest updates, behind-the-scenes content, and cultural highlights.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center space-x-3 px-6 py-4 bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
                <span className="font-semibold">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        type="general"
      />
    </div>
  )
}

export default ContactPage
