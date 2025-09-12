
import { Clock, User, ArrowRight } from 'lucide-react'

/**
 * FeaturedPosts component displaying main blog posts
 * Shows pillar article and cluster posts with hover effects
 */
export default function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      title: "Affiliate Marketing in 2025: Strategies, Tools, and Trust-Building for Long-Term Success",
      excerpt: "Discover the comprehensive guide to affiliate marketing success in 2025, featuring cutting-edge strategies and essential tools for sustainable growth.",
      category: "Pillar Article",
      readTime: "15 min read",
      author: "BlodFx Team",
      date: "Dec 15, 2024",
      featured: true
    },
    {
      id: 2,
      title: "Affiliate Marketing Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with the latest trends shaping affiliate marketing, from AI integration to Web3 partnerships.",
      category: "Trends",
      readTime: "8 min read",
      author: "BlodFx Team",
      date: "Dec 12, 2024"
    },
    {
      id: 3,
      title: "Best AI Tools for Affiliate Marketers",
      excerpt: "Explore the top AI-powered tools that can automate your affiliate marketing efforts and boost your conversion rates.",
      category: "Tools",
      readTime: "10 min read",
      author: "BlodFx Team",
      date: "Dec 10, 2024"
    },
    {
      id: 4,
      title: "TikTok & Reels for Affiliate Growth",
      excerpt: "Learn how to leverage short-form video content to drive explosive growth in your affiliate marketing campaigns.",
      category: "Social Media",
      readTime: "12 min read",
      author: "BlodFx Team",
      date: "Dec 8, 2024"
    },
    {
      id: 5,
      title: "Building Trust in a Distrustful Market",
      excerpt: "Master the art of building authentic relationships and trust with your audience in an increasingly skeptical digital landscape.",
      category: "Strategy",
      readTime: "9 min read",
      author: "BlodFx Team",
      date: "Dec 5, 2024"
    },
    {
      id: 6,
      title: "SaaS Affiliate Programs & Future Predictions",
      excerpt: "Dive into the world of SaaS affiliate programs and discover what the future holds for software-based affiliate marketing.",
      category: "SaaS",
      readTime: "11 min read",
      author: "BlodFx Team",
      date: "Dec 3, 2024"
    }
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Articles
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our latest insights on affiliate marketing strategies, tools, and Web3 innovations
          </p>
        </div>

        {/* Featured Post (Pillar Article) */}
        <div className="mb-16">
          {posts.filter(post => post.featured).map((post) => (
            <article 
              key={post.id}
              className="group relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Cluster Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.filter(post => !post.featured).map((post) => (
            <article 
              key={post.id}
              className="group bg-black/20 border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {post.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <button className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  <span className="text-sm">Read</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-200">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
