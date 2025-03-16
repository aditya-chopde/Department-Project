import { images } from '@/assets/exports'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-10">
      {/* Background blur effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="flex items-center justify-center px-20 py-16 gap-48 relative z-10">
        <div className="flex flex-col gap-6 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold leading-tight"
          >
            Welcome to the Department of Computer Engineering
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            A platform where students can share their thoughts, ideas and creativity through posts and images. Join us to be part of this amazing community.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border text-black px-8 py-3 rounded-lg w-fit cursor-pointer hover:bg-black hover:border hover:text-white transition-colors"
          >
            <Link to={"/signup"}>Get Started</Link>
          </motion.button>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[350px]"
        >
          <img 
            src={images.logo} 
            alt="Hero Image"
            className="w-full h-full object-contain invert"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
