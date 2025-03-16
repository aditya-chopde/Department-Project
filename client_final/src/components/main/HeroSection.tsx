import { images } from '@/assets/exports'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center px-20 py-16 gap-48">
        <div className="flex flex-col gap-6 max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to the Department of Computer Engineering
          </h1>
          <p className="text-xl text-gray-600">
            A platform where students can share their thoughts, ideas and creativity through posts and images. Join us to be part of this amazing community.
          </p>
          <button className="bg-white border text-black px-8 py-3 rounded-lg w-fit cursor-pointer hover:bg-black hover:border hover:text-white transition-colors">
            <Link to={"/signup"}>Get Started</Link>
          </button>
        </div>
        <div className="w-[350px]">
          <img 
            src={images.logo} 
            alt="Hero Image"
            className="w-full h-full object-contain invert"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
