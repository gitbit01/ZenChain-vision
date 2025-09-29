import React from 'react';
import { ExternalLink, Github, Twitter, MessageCircle, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const officialLinks = [
    { name: 'Website', url: 'https://www.zenchain.io', icon: <ExternalLink size={16} /> },
    { name: 'Documentation', url: 'https://docs.zenchain.io', icon: <ExternalLink size={16} /> },
    { name: 'Explorer', url: 'https://explorer.zenchain.io', icon: <ExternalLink size={16} /> },
    { name: 'Faucet', url: 'https://faucet.zenchain.io', icon: <ExternalLink size={16} /> },
    { name: 'Staking', url: 'https://node.zenchain.io', icon: <ExternalLink size={16} /> },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/zenchain-protocol', icon: <Github size={20} /> },
    { name: 'Twitter', url: 'https://twitter.com/zen_chain', icon: <Twitter size={20} /> },
    { name: 'Discord', url: 'https://discord.gg/zenchain', icon: <MessageCircle size={20} /> },
    { name: 'Telegram', url: 'https://t.me/zenchainofficial', icon: <Send size={20} /> },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">⚡</div>
              <span className="logo-text">ZenChain</span>
            </div>
            <p className="footer-description">
              The first fully decentralized blockchain to merge Bitcoin’s security with Ethereum-level programmability.
            </p>
            <div className="footer-stats">
              <div className="stat">
                <span className="stat-value">6s</span>
                <span className="stat-label">Block Time</span>
              </div>
              <div className="stat">
                <span className="stat-value">&lt;$0.01</span>
                <span className="stat-label">TX Cost</span>
              </div>
              <div className="stat">
                <span className="stat-value">EVM</span>
                <span className="stat-label">Compatible</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Official Links</h3>
            <ul className="footer-links">
              {officialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link">
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Community</h3>
            <ul className="footer-links">
              <li><a href="/news" className="footer-link">Latest News</a></li>
              <li><a href="/chatbot" className="footer-link">AI Assistant</a></li>
              <li><a href="/community" className="footer-link">Join Community</a></li>
              <li><a href="/docs" className="footer-link">Developer Docs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">DeFi Tools</h3>
            <ul className="footer-links">
              <li><a href="/bridge" className="footer-link">Cross-Chain Bridge</a></li>
              <li><a href="/staking" className="footer-link">Staking Rewards</a></li>
              <li><a href="/explorer" className="footer-link">Blockchain Explorer</a></li>
              <li><a href="/features" className="footer-link">Platform Features</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2025 ZenChain Protocol. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
