import React, { useState, useEffect, useRef } from "react";
import {
  Activity,
  Blocks,
  Users,
  TrendingUp,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import "./Explorer.css";

const Explorer = () => {
  const [activeTab, setActiveTab] = useState("blocks");
  const [searchQuery, setSearchQuery] = useState("");
  const [networkStats, setNetworkStats] = useState({
    blockHeight: 2847293,
    totalTransactions: 15678234,
    activeValidators: 1247,
    networkHashrate: "1.2 EH/s",
  });

  const recentBlocks = [
    {
      height: 2847293,
      hash: "0x1a2b3c",
      timestamp: "2 seconds ago",
      transactions: 45,
      validator: "ZenChain Foundation",
    },
    {
      height: 2847292,
      hash: "0x4d5e6f",
      timestamp: "8 seconds ago",
      transactions: 32,
      validator: "Crypto Validators",
    },
    // more...
  ];

  const recentTransactions = [
    {
      hash: "0xabcd",
      from: "0x1234",
      to: "0x5678",
      value: "2.5 ZTC",
      fee: "0.001 ZTC",
      status: "Success",
    },
    // more...
  ];

  const validators = [
    {
      name: "ZenChain Foundation",
      stake: "25M ZTC",
      commission: "5%",
      uptime: "99.9%",
    },
    // more...
  ];

  const [copiedHash, setCopiedHash] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNetworkStats((prev) => ({
        ...prev,
        blockHeight: prev.blockHeight + 1,
        totalTransactions: prev.totalTransactions + Math.floor(Math.random() * 10),
      }));
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(text);
    setTimeout(() => setCopiedHash(""), 2000);
  };

  return (
    <div className="explorer">
      <section className="explorer-hero">
        <div className="container">
          <h1 className="explorer-title">
            <Blocks size={48} /> ZenChain Explorer
          </h1>
          <p className="explorer-subtitle">
            Explore blocks, transactions, and validators on the ZenChain network.
          </p>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by block number, tx hash or address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </section>

      <section className="network-stats">
        <div className="container">
          <div className="stats-grid">
            {/* Network stats here */}
          </div>
        </div>
      </section>

      <section className="explorer-content">
        <div className="container">
          <div className="tabs">
            <button
              className={activeTab === "blocks" ? "tab active" : "tab"}
              onClick={() => setActiveTab("blocks")}
            >
              Blocks
            </button>
            <button
              className={activeTab === "transactions" ? "tab active" : "tab"}
              onClick={() => setActiveTab("transactions")}
            >
              Transactions
            </button>
            <button
              className={activeTab === "validators" ? "tab active" : "tab"}
              onClick={() => setActiveTab("validators")}
            >
              Validators
            </button>
          </div>

          {activeTab === "blocks" && (
            <div className="blocks-list">
              {/* List recent blocks with copy buttons */}
              {recentBlocks.map((block) => (
                <div key={block.height} className="block-item">
                  <span>Block #{block.height}</span>
                  <button onClick={() => copyToClipboard(block.hash)}>
                    {copiedHash === block.hash ? <Check /> : <Copy />}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="transactions-list">
              {/* List recent transactions */}
              {recentTransactions.map((tx, idx) => (
                <div key={idx} className="transaction-item">
                  <span>{tx.hash}</span>
                  <button onClick={() => copyToClipboard(tx.hash)}>
                    {copiedHash === tx.hash ? <Check /> : <Copy />}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "validators" && (
            <div className="validators-list">
              {/* List validators */}
              {validators.map((validator, idx) => (
                <div key={idx} className="validator-item">
                  <span>{validator.name}</span>
                  <span>{validator.stake}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div ref={messagesEndRef} />
    </div>
  );
};

export default Explorer;
