
import { Mail, Twitter, Github, Linkedin, ArrowUp } from 'lucide-react'

/**
 * Footer component with navigation links and social media
 * Features glassmorphism effect and quick navigation
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-blue-500/20">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BlodFx
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Affiliate Marketing in the Web3 Era. Your guide to future-proof digital marketing strategies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Affiliate Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Web3 Strategies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Social Media
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest affiliate marketing insights delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-black/20 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/40 transition-colors duration-200"
              />
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 BlodFx. All rights reserved.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
