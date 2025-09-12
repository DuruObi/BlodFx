
import { Link } from 'react-router'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

/**
 * Header component with navigation and theme toggle
 * Features sticky positioning with glassmorphism effect
 */
interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BlodFx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-blue-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
            </button>
            <Link 
              to="/login"
              className="px-4 py-2 rounded-lg border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-200"
            >
              Login
            </Link>
            <Link 
              to="/register"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5 text-blue-400" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-blue-500/20">
                <Link 
                  to="/login"
                  className="px-4 py-2 rounded-lg border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-200 text-center"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-center"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
