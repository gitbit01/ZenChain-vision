import React, { useState } from 'react'
import { ArrowRightLeft, Wallet, Info, CheckCircle } from 'lucide-react'
import './Bridge.css'

const Bridge = () => {
  const [fromChain, setFromChain] = useState('ethereum')
  const [toChain, setToChain] = useState('zenchain')
  const [amount, setAmount] = useState('')
  const [selectedToken, setSelectedToken] = useState('ETH')

  const supportedChains = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', logo: '₿' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', logo: 'Ξ' },
    { id: 'zenchain', name: 'ZenChain', symbol: 'ZTC', logo: '⚡' },
    { id: 'polygon', name: 'Polygon', symbol: 'MATIC', logo: '◈' },
    { id: 'bsc', name: 'BSC', symbol: 'BNB', logo: '◆' }
  ]

  const supportedTokens = [
    { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
    { symbol: 'BTC', name: 'Bitcoin', decimals: 8 },
    { symbol: 'ZTC', name: 'ZenChain Token', decimals: 18 },
    { symbol: 'USDC', name: 'USD Coin', decimals: 6 },
    { symbol: 'USDT', name: 'Tether USD', decimals: 6 }
  ]

  const bridgeFeatures = [
    {
      title: 'Lightning Fast',
      description: 'Cross-chain transfers complete in under 30 seconds',
      icon: '⚡'
    },
    {
      title: 'Ultra Low Fees',
      description: 'Bridge assets for less than $0.05 per transaction',
      icon: '💰'
    },
    {
      title: 'Maximum Security',
      description: 'Protected by Bitcoin-level security and AI monitoring',
      icon: '🛡️'
    },
    {
      title: 'Multi-Chain Support',
      description: 'Connect Bitcoin, Ethereum, and 10+ blockchain networks',
      icon: '🔗'
    }
  ]

  const swapChains = () => {
    const temp = fromChain
    setFromChain(toChain)
    setToChain(temp)
  }

  return (
    <div className="bridge">
      <section className="bridge-hero">
        <div className="container">
          <h1 className="bridge-title fade-in">
            <ArrowRightLeft size={48} />
            Cross-Chain <span className="gradient-text">Bridge</span>
          </h1>
          <p className="bridge-subtitle fade-in">
            Transfer assets seamlessly between Bitcoin, Ethereum, and ZenChain 
            with industry-leading speed, security, and low fees.
          </p>
          <div className="bridge-stats">
            <div className="bridge-stat">
              <div className="stat-value">$2.5B+</div>
              <div className="stat-label">Volume Bridged</div>
            </div>
            <div className="bridge-stat">
              <div className="stat-value">500K+</div>
              <div className="stat-label">Successful Transfers</div>
            </div>
            <div className="bridge-stat">
              <div className="stat-value">15+</div>
              <div className="stat-label">Supported Chains</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bridge-interface">
        <div className="container">
          <div className="bridge-container">
            <div className="bridge-card">
              <div className="bridge-header">
                <h2>Cross-Chain Bridge</h2>
                <div className="network-status">
                  <CheckCircle size={16} className="status-icon" />
                  <span>All Networks Online</span>
                </div>
              </div>

              <div className="bridge-form">
                <div className="bridge-section">
                  <label className="section-label">From</label>
                  <select value={fromChain} onChange={(e) => setFromChain(e.target.value)} className="chain-select">
                    {supportedChains.map((chain) => (
                      <option key={chain.id} value={chain.id}>{`${chain.logo} ${chain.name}`}</option>
                    ))}
                  </select>
                  <div className="amount-input-container">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.0"
                      className="amount-input"
                    />
                    <select value={selectedToken} onChange={(e) => setSelectedToken(e.target.value)} className="token-select">
                      {supportedTokens.map((token) => (
                        <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
                      ))}
                    </select>
                  </div>
                  <div className="balance-info">Balance: 0.0 {selectedToken}</div>
                </div>

                <div className="swap-container">
                  <button className="swap-button" onClick={swapChains}>
                    <ArrowRightLeft size={20} />
                  </button>
                </div>

                <div className="bridge-section">
                  <label className="section-label">To</label>
                  <select value={toChain} onChange={(e) => setToChain(e.target.value)} className="chain-select">
                    {supportedChains.map((chain) => (
                      <option key={chain.id} value={chain.id}>{`${chain.logo} ${chain.name}`}</option>
                    ))}
                  </select>
                  <div className="receive-amount">
                    <div className="receive-value">{amount || '0.0'} {selectedToken}</div>
                    <div className="receive-label">You will receive</div>
                  </div>
                </div>

                <div className="transaction-details">
                  <div className="detail-row">
                    <span>Bridge Fee:</span>
                    <span>~$0.05</span>
                  </div>
                  <div className="detail-row">
                    <span>Estimated Time:</span>
                    <span>~30 seconds</span>
                  </div>
                  <div className="detail-row">
                    <span>Minimum Amount:</span>
                    <span>0.001 {selectedToken}</span>
                  </div>
                </div>

                <button className="connect-wallet-btn">
                  <Wallet size={20} />
                  Connect Wallet to Bridge
                </button>

                <div className="security-notice">
                  <Info size={16} />
                  <span>Your transaction is secured by ZenChain's AI-powered monitoring and Bitcoin-level security protocols.</span>
                </div>
              </div>
            </div>

            <div className="bridge-features">
              <h3>Why Use ZenChain Bridge?</h3>
              <div className="features-grid">
                {bridgeFeatures.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bridge
