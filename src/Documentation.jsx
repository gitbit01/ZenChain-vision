import React from 'react';
import {
  Book,
  Code,
  ExternalLink,
  Download,
  GitBranch,
  Terminal,
} from 'lucide-react';
import './Documentation.css';

const Documentation = () => {
  const docSections = [
    {
      title: 'Getting Started',
      icon: <Book size={24} />,
      description: 'Quick start guides and basic concepts',
      links: [
        { title: 'Introduction to ZenChain', url: '#' },
        { title: 'Setting up MetaMask', url: '#' },
        { title: 'First Transaction', url: '#' },
        { title: 'Network Configuration', url: '#' },
      ],
    },
    {
      title: 'Developer Guides',
      icon: <Code size={24} />,
      description: 'Build dApps and smart contracts',
      links: [
        { title: 'Smart Contract Development', url: '#' },
        { title: 'Web3.js Integration', url: '#' },
        { title: 'Cross-Chain Development', url: '#' },
        { title: 'Testing Framework', url: '#' },
      ],
    },
    {
      title: 'API Reference',
      icon: <Terminal size={24} />,
      description: 'Complete API documentation',
      links: [
        { title: 'JSON-RPC API', url: '#' },
        { title: 'GraphQL API', url: '#' },
        { title: 'WebSocket Subscriptions', url: '#' },
        { title: 'Rate Limits & Authentication', url: '#' },
      ],
    },
    {
      title: 'Node Operations',
      icon: <GitBranch size={24} />,
      description: 'Run and maintain ZenChain nodes',
      links: [
        { title: 'Node Setup Guide', url: '#' },
        { title: 'Validator Requirements', url: '#' },
        { title: 'Monitoring & Maintenance', url: '#' },
        { title: 'Troubleshooting', url: '#' },
      ],
    },
  ];

  return (
    <div className="documentation">
      <section className="docs-hero">
        <div className="container">
          <h1 className="docs-title">
            <Book size={48} /> ZenChain <span className="gradient-text">Documentation</span>
          </h1>
          <p className="docs-subtitle">
            Everything you need to build, deploy, and scale on ZenChain.
          </p>
        </div>
      </section>

      <section className="doc-sections">
        <div className="container">
          <div className="sections-grid">
            {docSections.map(({ title, icon, description, links }) => (
              <div key={title} className="doc-section-card">
                <div className="section-header">
                  <div className="section-icon">{icon}</div>
                  <div className="section-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="section-links">
                  {links.map(({ title: linkTitle, url }) => (
                    <a key={linkTitle} href={url} className="doc-link">
                      {linkTitle} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
