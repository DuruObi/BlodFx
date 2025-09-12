
import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedPosts from '../components/FeaturedPosts'
import Footer from '../components/Footer'

/**
 * Home page component for BlodFx blog
 * Displays the main landing page with hero section and featured posts
 */
export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>
          <Hero />
          <FeaturedPosts />
        </main>
        <Footer />
      </div>
    </div>
  )
}
