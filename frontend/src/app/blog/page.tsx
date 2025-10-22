'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  fullContent: string
  author: string
  date: string
  image: string
  category: string
  readTime: string
}

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Celebrating Kenya\'s Cultural Diversity at the International Festival',
      excerpt: 'A reflection on the beautiful moments shared during the recent cultural festival where we showcased Kenya\'s rich heritage to the world.',
      fullContent: `The International Cultural Festival was more than just an event - it was a powerful celebration of Kenya's soul. As I walked through the vibrant pavilions, I witnessed our nation's diversity come alive through dance, music, art, and the warm smiles of our people.

Our traditional dancers captivated audiences from around the world. The rhythmic beats of the Maasai warriors, the graceful movements of Kikuyu dancers, and the energetic performances from coastal communities painted a vivid picture of Kenya's cultural wealth. Each performance told a story - stories of our ancestors, our struggles, our victories, and our dreams.

What touched me most was seeing young Kenyans embrace their heritage with such pride. In a world increasingly dominated by global culture, these young people stood tall, wearing their traditional attire with dignity and performing ancient rituals with reverence. They are the bridge between our past and future.

The artisan marketplace was a treasure trove of Kenyan craftsmanship. From intricately carved wooden sculptures to beautifully beaded jewelry, from handwoven baskets to vibrant paintings - every piece represented hours of dedication and generations of inherited skill. Supporting these artisans means preserving cultural practices that risk being lost to modernization.

This festival reminded me why I do what I do. Culture is not just about preserving the past; it's about giving our youth a foundation, a sense of identity, and pride in who they are. When we know where we come from, we walk into the future with confidence.`,
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
      fullContent: `Harambee - a simple word that embodies the very essence of who we are as Kenyans. It means "pulling together," but it's so much more than that. It's a philosophy, a way of life, a testament to the power of unity and collective action.

Growing up in Kenya, I saw Harambee in action countless times. When a neighbor's house needed repairs, the community came together. When a child couldn't afford school fees, neighbors contributed. When disaster struck, we didn't wait for help - we were the help.

This spirit is what makes Kenya special. In a world that often celebrates individualism, we remember that we are stronger together. "I am because we are" - the Ubuntu philosophy that guides so much of African culture - is alive and well in Kenya.

Recently, I visited a rural community where Harambee transformed lives. The community wanted a cultural center to teach traditional arts to their children. They had no funding, no government support, just a dream and the will to make it happen. Through Harambee, each family contributed what they could - some gave money, others donated materials, many offered their labor.

Six months later, that cultural center stands proud. It's not just a building; it's a symbol of what we can achieve when we work together. Today, children gather there after school to learn traditional dances, crafts, and languages. Elders share wisdom and stories. The community has a space to celebrate its identity.

Harambee isn't just about material contributions. It's about emotional support, shared wisdom, collective problem-solving. It's the foundation of strong communities and the key to preserving our cultural heritage in modern times.`,
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
      fullContent: `Every piece of traditional Kenyan attire tells a story. The colors, patterns, and materials are not random choices - they are deliberate expressions of identity, status, and cultural values passed down through generations.

The Maasai shuka, with its distinctive red color and checkered patterns, is perhaps Kenya's most recognizable traditional garment. Red symbolizes bravery and strength, while the checkered patterns represent the protective barriers around Maasai homesteads. When a Maasai warrior drapes his shuka, he carries centuries of warrior tradition.

In central Kenya, the Kikuyu people's traditional attire features leather garments adorned with intricate beadwork. Each bead color has meaning: white represents purity and peace, blue symbolizes energy and the sky, red stands for bravery. The patterns tell stories of the wearer's journey, achievements, and family lineage.

Coastal communities showcase the beautiful fusion of African and Arab influences. The kanzu, a long white robe, and the kofia (cap) reflect Islamic influence, while the kikoi, a colorful wrap cloth, has ancient East African roots. These garments represent our history as a crossroads of cultures.

What breaks my heart is seeing traditional attire relegated to museums and special occasions. In daily life, Western clothing dominates. We're losing the living connection to these cultural treasures.

That's why I make it a point to wear traditional attire regularly, especially at international events. When I step onto a global stage wrapped in Kenyan tradition, I'm not just representing myself - I'm honoring every artisan who weaves, every elder who teaches, every young person rediscovering their heritage.

Our traditional attire is more than clothing - it's a statement of identity, a connection to ancestors, and a gift to future generations.`,
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
      fullContent: `The future of Kenya's cultural heritage lies in the hands of our youth. If young Kenyans don't see value in their traditions, those traditions will fade. This is why cultural education is not just important - it's essential.\n\nI've spent years working with youth across Kenya, and I've learned something crucial: young people are hungry for identity and meaning. In a globalized world where TikTok trends and Western pop culture dominate, many young Kenyans feel disconnected from their roots. They're searching for something authentic, something that's truly theirs.\n\nOur cultural education programs bridge this gap. We don't lecture; we engage. We bring traditional music into modern contexts. We show how beadwork isn't just old-fashioned craft - it's mathematical precision, artistic expression, and entrepreneurial opportunity. We demonstrate how traditional dance isn't just movement - it's storytelling, physical fitness, and cultural preservation.\n\nOne of our most successful initiatives pairs young people with elders. A 70-year-old master craftsman teaches a 15-year-old the art of wood carving. A grandmother shares folklore with teenagers who then create modern interpretations through digital art. These intergenerational connections are magic.\n\nThe transformation I witness is incredible. Young people who felt lost discover pride in their heritage. They start speaking their native languages again. They wear traditional attire confidently. They become ambassadors of culture in their schools and communities.\n\nBut we must do more. Cultural education should be integrated into our national curriculum. Every Kenyan child should learn about our 40+ ethnic communities, not just their own. They should understand that diversity is strength, that every tradition adds value to our national identity.\n\nWhen we empower youth through cultural education, we're not looking backward - we're securing our future. These young people will carry our traditions forward, adapting them for modern times while preserving their essence.`,
      author: 'Susan',
      date: '2023-12-28',
      image: '/api/placeholder/400/250',
      category: 'Education',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Kenya\'s Global Impact: Beyond Borders',
      excerpt: 'Reflecting on Kenya\'s contributions to the global community and our role in international cultural exchange.',
      fullContent: `Kenya's influence extends far beyond our borders. From athletics to diplomacy, from conservation to culture, we've made our mark on the global stage. But our cultural contribution is perhaps our most profound yet least recognized gift to the world.

When I represent Kenya internationally, I carry the responsibility of changing perceptions. Too often, Africa is viewed through a lens of poverty and problems. It's my mission to showcase a different narrative - one of richness, resilience, creativity, and contribution.

At the UNESCO World Heritage Conference in Paris, I presented on Kenya's cultural preservation efforts. Delegates from 50+ countries learned about our innovative approaches to maintaining traditional practices while embracing modernity. They saw how Kenyan communities are leading sustainable cultural tourism, how our artisans are thriving through global markets, how our youth are becoming cultural entrepreneurs.

The response was overwhelming. Representatives from other African nations wanted to replicate our models. Asian and European countries sought partnerships. We weren't there asking for help - we were sharing solutions.

Kenya's cultural diplomacy opens doors that formal politics cannot. Music, dance, art, and cuisine create connections that transcend language barriers and political differences. When a Japanese businessman tries Kenyan ugali, when a Brazilian student learns a Swahili greeting, when an American teacher incorporates Kenyan folklore into her curriculum - these are cultural victories that build lasting bridges.

Our diaspora plays a crucial role too. Kenyans abroad are cultural ambassadors, hosting events, opening restaurants, teaching Swahili, performing traditional music. They keep our culture alive in foreign lands while introducing it to new audiences.

But global impact isn't one-directional. Through cultural exchange, Kenya also grows. We learn from other cultures, incorporate new ideas, evolve our traditions. This dynamic exchange enriches us all.

Kenya's global impact isn't measured just in economics or politics - it's measured in the hearts and minds we touch, the perceptions we change, the connections we build. Culture is our superpower, and the world is finally paying attention.`,
      author: 'Susan',
      date: '2023-12-20',
      image: '/api/placeholder/400/250',
      category: 'Global Impact',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'The Art of Storytelling: Preserving Oral Traditions',
      excerpt: 'Exploring the importance of oral traditions in Kenyan culture and how we can keep them alive for future generations.',
      fullContent: `Before there were books, before there was written language, there were stories. In Kenya, as across Africa, storytelling wasn't just entertainment - it was how we preserved history, taught values, passed down wisdom, and maintained cultural identity.\n\nI grew up listening to my grandmother's stories by firelight. Tales of clever hares outsmarting powerful lions, of ancestral heroes who showed courage in adversity, of how the world came to be. These weren't just stories - they were lessons wrapped in narrative, values embedded in entertainment.\n\nOral tradition is an art form requiring incredible skill. A master storyteller doesn't just recite - they perform. They use voice modulation, facial expressions, gestures, and audience participation to bring stories alive. They adapt tales to current contexts while preserving core messages. They memorize complex genealogies, historical events, and cultural knowledge.\n\nSadly, this art is endangered. Modern entertainment - television, internet, smartphones - competes for attention. Fewer children gather around elders for story time. Fewer young people commit to learning the intricate art of traditional storytelling.\n\nWe're losing more than entertainment - we're losing cultural databases. These oral histories contain knowledge about traditional medicine, conflict resolution, environmental management, social structures. They preserve minority languages. They maintain connections to ancestors and land.\n\nThat's why I'm passionate about documenting and revitalizing oral traditions. We're recording master storytellers before they pass. We're training young people in storytelling arts. We're creating platforms where traditional stories reach modern audiences through podcasts, animations, and performances.\n\nBut documentation isn't enough. Oral tradition must remain living, breathing, evolving. We need storytellers in schools, at community gatherings, at cultural events. We need children who can recite ancestral tales as easily as they can quote movies.\n\nThe stories we tell shape who we become. When we lose our stories, we lose ourselves. By preserving oral traditions, we preserve the very essence of what makes us Kenyan.`,
      author: 'Susan',
      date: '2023-12-15',
      image: '/api/placeholder/400/250',
      category: 'Traditions',
      readTime: '6 min read'
    }
  ]

  const categories = ['All', 'Cultural Events', 'Community', 'Heritage', 'Education', 'Global Impact', 'Traditions']

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post)
    setIsModalOpen(true)
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
              Engagement Journal
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
              Follow Susan's experiences, reflections, and insights as she travels the world representing Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => handlePostClick(post)}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="text-green-600 font-medium">{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
              Load More Posts
            </button>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Detail Modal */}
      {isModalOpen && selectedPost && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-elegant-lg w-full max-w-4xl overflow-hidden flex flex-col"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 flex-shrink-0 overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 text-white"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {selectedPost.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-200">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  </div>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-8" style={{ minHeight: 0 }}>
              <div className="prose prose-lg max-w-none">
                {selectedPost.fullContent.split('\\n\\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                    Facebook
                  </button>
                  <button className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-200">
                    Twitter
                  </button>
                  <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default BlogPage
