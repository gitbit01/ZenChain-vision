import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Wallet } from 'lucide-react'
import './Navbar.css'
import ZenchainLogo from "./assets/zenchainlogo.png" // Adjust the path as needed

const Navbar = ({ isWalletConnected, connectWallet }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/features', label: 'Features' },
    { path: '/news', label: 'News' },
    { path: '/chatbot', label: 'Chat Bot' },
    { path: '/bridge', label: 'Bridge' },
    { path: '/staking', label: 'Staking' },
    { path: '/explorer', label: 'Explorer' },
    { path: '/docs', label: 'Documentation' },
    { path: '/community', label: 'Community' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={ZenchainLogo} alt="ZenChain Logo" className="logo-icon" />
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <button
              className={`btn ${isWalletConnected ? 'btn-primary' : 'btn-outline'}`}
              onClick={connectWallet}
            >
              <Wallet size={16} />
              {isWalletConnected ? 'Connected' : 'Connect Wallet'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-menu-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
