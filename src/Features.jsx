import React from 'react'
import { Link, Zap, Shield, DollarSign, Vote, Bitcoin, Coins, RotateCcw, Building, Globe, CheckCircle } from 'lucide-react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: <Link size={32} />,
      title: 'Cross-Chain Interoperability',
      description: 'Seamless asset transfers between Bitcoin, Ethereum and other chains through CCIM',
      benefits: [
        'Native Bitcoin integration',
        'Ethereum compatibility',
        'Multi-chain asset support',
        'Trustless bridging'
      ],
      category: 'Interoperability'
    },
    {
      icon: <Zap size={32} />,
      title: 'EVM Compatibility',
      description: 'Full support for Ethereum smart contracts, tools like MetaMask, and existing dApps',
      benefits: [
        'Solidity smart contracts',
        'MetaMask integration',
        'Web3.js compatibility',
        'Ethereum tooling support'
      ],
      category: 'Development'
    },
    {
      icon: <Shield size={32} />,
      title: 'AI-Powered Security',
      description: 'Niō AI system provides real-time threat detection and mitigation',
      benefits: [
        'Real-time monitoring',
        'Automated threat response',
        'Pattern recognition',
        'Security analytics'
      ],
      category: 'Security'
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Low Transaction Fees',
      description: 'Sub-penny transaction costs making DeFi accessible to everyone',
      benefits: [
        'Under $0.01 per transaction',
        'No hidden fees',
        'Predictable costs',
        'Mass adoption friendly'
      ],
      category: 'Economics'
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Block Times',
      description: '6-second block finality for quick and responsive transactions',
      benefits: [
        '6-second finality',
        'High throughput',
        'Instant confirmation',
        'Responsive UX'
      ],
      category: 'Performance'
    },
    {
      icon: <Vote size={32} />,
      title: 'Decentralized Governance',
      description: 'Community-driven decision making through DAO mechanisms',
      benefits: [
        'Token-based voting',
        'Proposal system',
        'Community treasury',
        'Transparent decisions'
      ],
      category: 'Governance'
    },
    {
      icon: <Bitcoin size={32} />,
      title: 'Bitcoin Security',
      description: "Leveraging Bitcoin's proven security model with enhanced programmability",
      benefits: [
        'Bitcoin-level security',
        'Proven track record',
        'Immutable history',
        'Network effects'
      ],
      category: 'Security'
    },
    {
      icon: <Coins size={32} />,
      title: 'ZIP-20 Token Standard',
      description: 'Advanced cross-chain token management and interoperability protocol',
      benefits: [
        'Cross-chain tokens',
        'Advanced metadata',
        'Bridging protocols',
        'Multi-chain support'
      ],
      category: 'Standards'
    },
    {
      icon: <RotateCcw size={32} />,
      title: 'Forkless Upgrades',
      description: 'Network evolution without disruptive hard forks or downtime',
      benefits: [
        'No network downtime',
        'Seamless upgrades',
        'Backward compatibility',
        'Reduced fragmentation'
      ],
      category: 'Upgrades'
    },
    {
      icon: <Building size={32} />,
      title: 'Cross-Liquidity Consensus',
      description: 'CLCM ensures optimal security, decentralization, and economic incentives',
      benefits: [
        'Optimal incentives',
        'High security',
        'True decentralization',
        'Economic efficiency'
      ],
      category: 'Consensus'
    }
  ]

  const categories = [...new Set(features.map(f => f.category))]

  return (
    <div className="features">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="features-hero-content">
            <h1 className="features-title fade-in">
              <span className="gradient-text">Powerful Features</span> for the 
              Decentralized Future
            </h1>
            <p className="features-subtitle fade-in">
              ZenChain combines cutting-edge blockchain technology with user-friendly design 
              to deliver the most comprehensive decentralized platform available today.
            </p>
            <div className="features-stats">
              <div className="feature-stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Core Features</div>
              </div>
              <div className="feature-stat">
                <div className="stat-number">6s</div>
                <div className="stat-label">Block Time</div>
              </div>
              <div className="feature-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">EVM Compatible</div>
              </div>
              <div className="feature-stat">
                <div className="stat-number">&#x221E;</div>
                <div className="stat-label">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-header">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-category">{feature.category}</div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-benefits">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="benefit-item">
                        <CheckCircle size={16} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="tech-specs-section">
        <div className="container">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="tech-specs-grid">
            <div className="tech-spec-category">
              <h3>Performance</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">Block Time:</span>
                  <span className="spec-value">6 seconds</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Throughput:</span>
                  <span className="spec-value">10,000+ TPS</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Finality:</span>
                  <span className="spec-value">Instant</span>
                </div>
              </div>
            </div>
            
            <div className="tech-spec-category">
              <h3>Economics</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">Transaction Fee:</span>
                  <span className="spec-value">&lt; $0.01</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Staking Rewards:</span>
                  <span className="spec-value">5-12% APY</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Validator Bond:</span>
                  <span className="spec-value">1,000 ZTC</span>
                </div>
              </div>
            </div>
            
            <div className="tech-spec-category">
              <h3>Compatibility</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">Virtual Machine:</span>
                  <span className="spec-value">EVM Compatible</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Languages:</span>
                  <span className="spec-value">Solidity, Vyper</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Tools:</span>
                  <span className="spec-value">MetaMask, Remix, Truffle</span>
                </div>
              </div>
            </div>
            
            <div className="tech-spec-category">
              <h3>Security</h3>
              <div className="spec-items">
                <div className="spec-item">
                  <span className="spec-label">Consensus:</span>
                  <span className="spec-value">Cross-Liquidity (CLCM)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">AI Security:</span>
                  <span className="spec-value">Niō AI System</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Bitcoin Integration:</span>
                  <span className="spec-value">Native Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">ZenChain vs Traditional Blockchains</h2>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-feature">Feature</div>
              <div className="comparison-zenchain">ZenChain</div>
              <div className="comparison-ethereum">Ethereum</div>
              <div className="comparison-bitcoin">Bitcoin</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Block Time</div>
              <div className="comparison-zenchain">
                <CheckCircle className="check-icon" size={16} />
                6 seconds
              </div>
              <div className="comparison-ethereum">~12 seconds</div>
              <div className="comparison-bitcoin">~10 minutes</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Transaction Fees</div>
              <div className="comparison-zenchain">
                <CheckCircle className="check-icon" size={16} />
                &lt; $0.01
              </div>
              <div className="comparison-ethereum">$5-50+</div>
              <div className="comparison-bitcoin">$1-10+</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Smart Contracts</div>
              <div className="comparison-zenchain">
                <CheckCircle className="check-icon" size={16} />
                Full EVM Support
              </div>
              <div className="comparison-ethereum">
                <CheckCircle className="check-icon" size={16} />
                Native
              </div>
              <div className="comparison-bitcoin">Limited</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Cross-Chain</div>
              <div className="comparison-zenchain">
                <CheckCircle className="check-icon" size={16} />
                Native CCIM
              </div>
              <div className="comparison-ethereum">Bridges Required</div>
              <div className="comparison-bitcoin">Bridges Required</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Security</div>
              <div className="comparison-zenchain">
                <CheckCircle className="check-icon" size={16} />
                Bitcoin + AI
              </div>
              <div className="comparison-ethereum">PoS Consensus</div>
              <div className="comparison-bitcoin">
                <CheckCircle className="check-icon" size={16} />
                PoW Security
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
