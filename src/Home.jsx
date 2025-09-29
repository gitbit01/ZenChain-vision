import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Globe, DollarSign } from 'lucide-react'
import './Home.css'

const Home = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Bitcoin Security',
      description: "Leveraging Bitcoin's proven security model with enhanced programmability"
    },
    {
      icon: <Zap size={24} />,
      title: '6 Second Blocks',
      description: 'Lightning-fast transaction finality for responsive DeFi applications'
    },
    {
      icon: <Globe size={24} />,
      title: 'Cross-Chain Native',
      description: 'Seamless interoperability between Bitcoin, Ethereum, and other chains'
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Sub-Penny Fees',
      description: 'Ultra-low transaction costs making DeFi accessible to everyone'
    }
  ]

  const stats = [
    { value: '6s', label: 'Block Time' },
    { value: '<$0.01', label: 'TX Cost' },
    { value: '100%', label: 'EVM Compatible' },
    { value: '24/7', label: 'Uptime' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title fade-in">
                The Future of
                <span className="gradient-text"> Decentralized </span>
                Finance
              </h1>
              <p className="hero-subtitle fade-in">
                ZenChain is the first fully decentralized blockchain to merge Bitcoin's security 
                with Ethereum-level programmability, enabling seamless cross-chain DeFi.
              </p>
              <div className="hero-actions fade-in">
                <Link to="/features" className="btn btn-primary">
                  Explore Features <ArrowRight size={16} />
                </Link>
                <Link to="/docs" className="btn btn-outline">
                  Documentation
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card">
                <div className="card-content">
                  <h3>ZenChain Network</h3>
                  <div className="network-stats">
                    <div className="stat-item">
                      <span className="stat-dot active"></span>
                      <span>Network Status: Online</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-dot"></span>
                      <span>Block Height: 2,847,293</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-dot"></span>
                      <span>Active Validators: 127</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose ZenChain?</h2>
          <p className="section-subtitle">
            Discover the revolutionary features that make ZenChain the most advanced 
            decentralized blockchain platform.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build on ZenChain?</h2>
            <p className="cta-subtitle">
              Join thousands of developers and users building the future of decentralized finance.
            </p>
            <div className="cta-actions">
              <Link to="/staking" className="btn btn-primary">Start Staking</Link>
              <Link to="/bridge" className="btn btn-outline">Use Bridge</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
