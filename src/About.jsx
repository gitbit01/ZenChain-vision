import React from 'react'
import { Shield, Zap, Globe, Cpu, Lock, Coins } from 'lucide-react'
import './About.css'

const About = () => {
  const keyFeatures = [
    {
      icon: <Shield size={28} />,
      title: 'Cross-Liquidity Consensus (CLCM)',
      description: 'Revolutionary consensus mechanism that ensures optimal security, decentralization, and economic incentives through cross-chain liquidity validation.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Cross-Chain Interoperability (CCIM)',
      description: 'Native support for seamless asset transfers and smart contract interactions across Bitcoin, Ethereum, and other major blockchain ecosystems.'
    },
    {
      icon: <Coins size={28} />,
      title: 'ZIP-20 Token Standard',
      description: 'Advanced cross-chain token management protocol enabling sophisticated bridging mechanisms and multi-chain asset representations.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'AI-Powered Security (Niō)',
      description: 'Integrated AI system providing real-time threat detection, transaction monitoring, and automated security responses.'
    },
    {
      icon: <Zap size={28} />,
      title: 'EVM Compatibility',
      description: 'Full compatibility with Ethereum Virtual Machine, supporting existing smart contracts, tools, and dApps without modification.'
    },
    {
      icon: <Lock size={28} />,
      title: 'Forkless Upgrades',
      description: 'Seamless network evolution through governance-driven upgrades without disruptive hard forks or network downtime.'
    }
  ]

  const useCases = [
    {
      title: 'Decentralized Finance (DeFi)',
      description: 'Build sophisticated DeFi protocols with cross-chain liquidity, low fees, and institutional-grade security.',
      examples: ['Cross-chain DEXs', 'Lending protocols', 'Yield farming', 'Synthetic assets']
    },
    {
      title: 'Non-Fungible Tokens (NFTs)',
      description: 'Create and trade NFTs across multiple blockchains with unified liquidity and enhanced utility.',
      examples: ['Multi-chain NFTs', 'Gaming assets', 'Digital collectibles', 'Utility tokens']
    },
    {
      title: 'Cross-Chain Applications',
      description: 'Develop applications that leverage the unique strengths of multiple blockchain ecosystems.',
      examples: ['Bitcoin-secured smart contracts', 'Cross-chain governance', 'Multi-chain wallets', 'Bridge protocols']
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title fade-in">
              About <span className="gradient-text">ZenChain</span>
            </h1>
            <p className="about-subtitle fade-in">
              ZenChain represents a paradigm shift in blockchain technology, combining the battle-tested 
              security of Bitcoin with the programmable flexibility of Ethereum, all while enabling 
              seamless cross-chain interoperability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-description">
                To create the world's most secure, scalable, and interoperable blockchain platform 
                that enables true decentralization without compromising on performance or user experience.
              </p>
              <p className="mission-description">
                ZenChain bridges the gap between Bitcoin's unparalleled security and Ethereum's 
                smart contract capabilities, while solving the blockchain trilemma through innovative 
                consensus mechanisms and cross-chain architecture.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-box">
                <h3>6 Second</h3>
                <p>Block Finality</p>
              </div>
              <div className="stat-box">
                <h3>Sub-Penny</h3>
                <p>Transaction Fees</p>
              </div>
              <div className="stat-box">
                <h3>100%</h3>
                <p>EVM Compatible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-detail-section">
        <div className="container">
          <h2 className="section-title">Core Technologies</h2>
          <p className="section-subtitle">
            ZenChain's revolutionary architecture is built on cutting-edge technologies 
            that redefine what's possible in blockchain.
          </p>
          <div className="features-detail-grid">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="feature-detail-card">
                <div className="feature-detail-icon">
                  {feature.icon}
                </div>
                <div className="feature-detail-content">
                  <h3 className="feature-detail-title">{feature.title}</h3>
                  <p className="feature-detail-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section">
        <div className="container">
          <h2 className="section-title">Use Cases</h2>
          <p className="section-subtitle">
            Discover the endless possibilities enabled by ZenChain's unique architecture
          </p>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="use-case-card">
                <h3 className="use-case-title">{useCase.title}</h3>
                <p className="use-case-description">{useCase.description}</p>
                <div className="use-case-examples">
                  {useCase.examples.map((example, i) => (
                    <span key={i} className="example-tag">{example}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
