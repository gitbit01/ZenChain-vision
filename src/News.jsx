import React, { useState, useEffect } from 'react'
import { Calendar, ExternalLink, TrendingUp, Users, Zap, Building } from 'lucide-react'
import './News.css'

const News = () => {
  const [newsItems, setNewsItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const allNewsItems = [
    {
      id: 1,
      title: 'ZenChain Partners with Carbon Browser to Expand Web3 Access',
      summary: "Strategic partnership brings ZenChain's cross-chain capabilities to millions of users through Carbon Browser's integrated multi-chain wallet support.",
      content: "ZenChain Protocol announced a groundbreaking partnership with Carbon Browser to expand Web3 accessibility. This collaboration integrates ZenChain's advanced cross-chain interoperability features into Carbon Browser's ecosystem.",
      date: '2025-01-07',
      category: 'Partnership',
      author: 'ZenChain Team',
      readTime: '3 min read',
      featured: true,
      tags: ['Partnership', 'Web3', 'Browser', 'Integration']
    },
    {
      id: 2,
      title: 'ZenChain Mainnet Launches with Record-Breaking Performance',
      summary: 'The ZenChain mainnet goes live with 6-second block times and sub-penny transaction fees.',
      content: 'ZenChain mainnet launched, achieving consistent 6-second block finality and sub-penny fees, setting new blockchain performance standards.',
      date: '2025-01-15',
      category: 'Network',
      author: 'Technical Team',
      readTime: '5 min read',
      featured: true,
      tags: ['Mainnet', 'Performance', 'Launch', 'Blockchain']
    },
    // more news items...
  ]

  const categories = ['All', 'Partnership', 'Network', 'Token', 'DeFi', 'Community', 'Security']

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const filtered = selectedCategory === 'All' 
        ? allNewsItems 
        : allNewsItems.filter(item => item.category === selectedCategory)
      setNewsItems(filtered.sort((a,b) => new Date(b.date) - new Date(a.date)))
      setLoading(false)
    }, 500)
  }, [selectedCategory])

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'})
  }

  return (
    <div className="news">
      <section className="news-hero">
        <div className="container">
          <h1 className="news-title fade-in">Latest <span className="gradient-text">ZenChain</span> News</h1>
          <p className="news-subtitle fade-in">Stay updated on ZenChain's partnerships, launches, and developments.</p>
          <div className="news-filter">
            {categories.map(category => (
              <button 
                key={category} 
                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="news-content">
        <div className="container">
          {loading ? (
            <p>Loading news...</p>
          ) : (
            <>
              <div className="featured-news">
                {newsItems.filter(item => item.featured).map(item => (
                  <article key={item.id} className="featured-article">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <div>
                      <span>By {item.author}</span> | <span>{formatDate(item.date)}</span> | <span>{item.readTime}</span>
                    </div>
                    <a href="#" className="read-more">Read more <ExternalLink size={14} /></a>
                  </article>
                ))}
              </div>

              <div className="all-news">
                {newsItems.map(item => (
                  <article key={item.id} className="news-article">
                    <h4>{item.title}</h4>
                    <p>{item.summary}</p>
                    <div>
                      <span>By {item.author}</span> | <span>{formatDate(item.date)}</span>
                    </div>
                    <a href="#" className="read-more">Read more <ExternalLink size={14} /></a>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default News
