'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, Mountain } from 'lucide-react'

const OurKenya = () => {
  const regions = [
    {
      name: 'Nairobi',
      description: 'The vibrant capital city, a melting pot of cultures and innovation.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop',
      featured: true,
      gallery: [
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop'
      ]
    },
    {
      name: 'Mombasa',
      description: 'The coastal gem where Swahili culture meets the Indian Ocean.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      featured: true,
      gallery: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop'
      ]
    },
    {
      name: 'Nakuru',
      description: 'Home to the Great Rift Valley and stunning natural beauty.',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop',
      featured: false,
      gallery: [
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
      ]
    },
    {
      name: 'Kisumu',
      description: 'The lakeside city on the shores of Lake Victoria.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop',
      featured: false,
      gallery: [
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop'
      ]
    }
  ]

  const communities = [
    {
      name: 'Kikuyu',
      region: 'Central Kenya',
      description: 'The largest ethnic group, known for their agricultural heritage and entrepreneurship.'
    },
    {
      name: 'Luo',
      region: 'Western Kenya',
      description: 'Famous for their fishing traditions and vibrant cultural practices.'
    },
    {
      name: 'Kalenjin',
      region: 'Rift Valley',
      description: 'World-renowned for their athletic prowess and running traditions.'
    },
    {
      name: 'Kamba',
      region: 'Eastern Kenya',
      description: 'Known for their wood carving skills and musical traditions.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 decorative-pattern opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Kenya — <span className="text-gradient-kenya">The Heartland</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse regions and communities that make Kenya a truly special place, 
            united by the spirit of Harambee (pulling together).
          </p>
        </motion.div>

        {/* Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Explore Our Regions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 cursor-pointer group transform hover:-translate-y-2 ${
                  region.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">{region.name}</h4>
                  <p className="text-gray-200">{region.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ethnic Mosaic Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Ethnic Mosaic
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Kenya is a breathtaking tapestry of over 40 ethnic communities, each thread woven with distinct traditions, 
              languages, and cultural practices. From the Maasai warriors of the Great Rift Valley to the Swahili poets 
              of the coast, from the Kikuyu farmers of the highlands to the Luo fishermen of Lake Victoria - every community 
              brings unique richness to our national identity. This remarkable diversity is not just our heritage; it's our 
              strength, our pride, and our gift to the world. Together, we are one Kenya, united in our beautiful differences.
            </p>
            <p className="text-md text-gray-500 max-w-2xl mx-auto italic">
              "We are stronger together, celebrating what makes each community unique while embracing what unites us as one nation."
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-green-600 mr-3" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{community.name}</h4>
                    <p className="text-green-600 font-medium">{community.region}</p>
                  </div>
                </div>
                <p className="text-gray-600">{community.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Faith & Unity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-green-600 via-emerald-600 to-yellow-500 rounded-3xl p-12 text-white shadow-elegant-lg relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <Mountain className="w-16 h-16 mx-auto mb-6 drop-shadow-lg" />
            <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">Faith & Unity</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto drop-shadow-md">
              Kenya's strength lies in its diversity. We celebrate the harmony between different faiths, 
              traditions, and communities that make our nation truly special.
            </p>
          </div>
        </motion.div>

        {/* Image Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Kenya Through the Lens
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
              >
                <img
                  src={image}
                  alt={`Kenya ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Experience Kenya
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Kenya Experience Video"
                  className="w-full h-64 rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Cultural Heritage Video"
                  className="w-full h-64 rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurKenya
