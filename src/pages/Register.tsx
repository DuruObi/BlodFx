
import { useState } from 'react'
import { Link } from 'react-router'
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Check } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

/**
 * Register page component for user registration
 * Features futuristic design with form validation
 */
export default function RegisterPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Registration attempt:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="flex items-center justify-center min-h-[calc(100vh-200px)] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              {/* Register Card */}
              <div className="bg-black/20 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">B</span>
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    Create Account
                  </h1>
                  <p className="text-gray-400">
                    Join the BlodFx community today
                  </p>
                </div>

                {/* Register Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-black/20 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/40 transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-black/20 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/40 transition-colors duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-3 bg-black/20 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/40 transition-colors duration-200"
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Input */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-3 bg-black/20 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/40 transition-colors duration-200"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        required
                        className="w-4 h-4 text-blue-500 bg-black/20 border-blue-500/20 rounded focus:ring-blue-400/40"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-400">
                        I agree to the{' '}
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <span>Create Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                  <div className="flex-1 border-t border-blue-500/20"></div>
                  <span className="px-4 text-gray-500 text-sm">Or continue with</span>
                  <div className="flex-1 border-t border-blue-500/20"></div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-2 px-4 bg-black/20 border border-blue-500/20 rounded-lg text-gray-300 hover:bg-blue-500/10 transition-all duration-200">
                    Google
                  </button>
                  <button className="py-2 px-4 bg-black/20 border border-blue-500/20 rounded-lg text-gray-300 hover:bg-blue-500/10 transition-all duration-200">
                    GitHub
                  </button>
                </div>

                {/* Sign In Link */}
                <p className="text-center mt-6 text-gray-400">
                  Already have an account?{' '}
                  <Link 
                    to="/login"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
