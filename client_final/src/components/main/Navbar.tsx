import { images } from '@/assets/exports'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto invert"
                src={images.logo}
                alt="Logo"
              />
            </div>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="/posts" className="text-gray-300 hover:text-white">
                Posts
              </a>
              <a href="/posts" className="text-gray-300 hover:text-white">
                Blogs
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant={'secondary'} className='cursor-pointer'>
              <Link to={"/login"}>Login</Link>
              </Button>
              <Button className='cursor-pointer'>
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-300 hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
