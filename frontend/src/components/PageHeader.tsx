'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle: string
  backgroundImage: string
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative h-80 sm:h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-red-900/80 via-black/70 to-green-800/80">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-5 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto px-4 drop-shadow-lg">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PageHeader
