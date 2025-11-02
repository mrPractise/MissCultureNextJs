'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

const BlogFeed = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Celebrating Kenya\'s Cultural Diversity at the International Festival',
      excerpt: 'A reflection on the beautiful moments shared during the recent cultural festival where we showcased Kenya\'s rich heritage to the world.',
      author: 'Susan',
      date: '2024-01-15',
      image: '/api/placeholder/400/250',
      category: 'Cultural Events',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Power of Harambee: Building Communities Together',
      excerpt: 'Exploring how the Kenyan spirit of "pulling together" continues to shape our communities and inspire positive change.',
      author: 'Susan',
      date: '2024-01-10',
      image: '/api/placeholder/400/250',
      category: 'Community',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Traditional Attire: Stories Woven in Fabric',
      excerpt: 'Discovering the deep cultural significance behind Kenya\'s traditional clothing and the stories they tell.',
      author: 'Susan',
      date: '2024-01-05',
      image: '/api/placeholder/400/250',
      category: 'Heritage',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Youth Empowerment Through Cultural Education',
      excerpt: 'How we\'re inspiring the next generation to embrace and preserve our cultural traditions.',
      author: 'Susan',
      date: '2023-12-28',
      image: '/api/placeholder/400/250',
      category: 'Education',
      readTime: '8 min read'
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
            Latest <span className="text-gradient-kenya">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read Susan's latest thoughts on cultural preservation, community building, 
            and Kenya's journey on the global stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <span className="text-green-600 font-medium">{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(22, 163, 74, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              <BookOpen className="w-6 h-6 mr-2" />
              Read All Articles
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogFeed
