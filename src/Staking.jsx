import React, { useState } from "react";
import {
  TrendingUp,
  Shield,
  Coins,
  Users,
  ExternalLink,
  Lock,
} from "lucide-react";
import "./Staking.css";

const Staking = () => {
  const [stakingAmount, setStakingAmount] = useState("");
  const [selectedValidator, setSelectedValidator] = useState("");
  const [stakingPeriod, setStakingPeriod] = useState("flexible");

  const stakingStats = [
    { label: "Total Staked", value: "250M ZTC", change: "+12.5%" },
    { label: "Staking APY", value: "8.5%", change: "+0.5%" },
    { label: "Active Validators", value: "1,247", change: "+23" },
    { label: "Network Security", value: "99.9%", change: "Stable" },
  ];

  const validators = [
    {
      name: "ZenChain Foundation",
      commission: "5%",
      apy: "8.8%",
      staked: "25M",
      status: "active",
    },
    {
      name: "Crypto Validators",
      commission: "7%",
      apy: "8.1%",
      staked: "18M",
      status: "active",
    },
    {
      name: "Staking Pro",
      commission: "6%",
      apy: "8.4%",
      staked: "22M",
      status: "active",
    },
    {
      name: "Secure Node",
      commission: "8%",
      apy: "7.9%",
      staked: "15M",
      status: "active",
    },
    {
      name: "Chain Guard",
      commission: "5.5%",
      apy: "8.6%",
      staked: "20M",
      status: "active",
    },
  ];

  const stakingBenefits = [
    {
      icon: <TrendingUp />,
      title: "Competitive Returns",
      description:
        "Earn up to 12% APY with our optimized staking rewards system",
      highlight: "5-12% APY",
    },
    {
      icon: <Shield />,
      title: "Network Security",
      description: "Help secure the network while earning rewards",
      highlight: "Secured by Bitcoin",
    },
    {
      icon: <Coins />,
      title: "Flexible Staking",
      description: "Choose from flexible or fixed-term staking options",
      highlight: "No Lock-up Required",
    },
    {
      icon: <Users />,
      title: "Governance Rights",
      description: "Participate in network governance and voting",
      highlight: "Vote on Proposals",
    },
  ];

  const calculateRewards = () => {
    if (!stakingAmount) return "0.0000";
    const amount = parseFloat(stakingAmount);
    const apy = 0.085;
    return ((amount * apy) / 365).toFixed(4);
  };

  return (
    <div className="staking">
      <section className="staking-hero">
        <div className="container">
          <div className="staking-hero-content">
            <h1 className="staking-title">
              <TrendingUp size={48} /> Earn with{" "}
              <span className="gradient-text">ZenChain Staking</span>
            </h1>
            <p className="staking-subtitle">
              Stake your ZTC tokens to earn rewards while securing the network.
              Start earning today.
            </p>
            <div className="staking-stats">
              {stakingStats.map(({ label, value, change }) => (
                <div key={label} className="staking-stat">
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{label}</div>
                  <div className="stat-change">{change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="staking-interface">
        <div className="container staking-grid">
          <div className="staking-card">
            <div className="card-header">
              <h2>Start Staking</h2>
              <div className="staking-status">● Active</div>
            </div>

            <div className="staking-form">
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="number"
                  value={stakingAmount}
                  onChange={(e) => setStakingAmount(e.target.value)}
                  placeholder="0.0"
                  className="staking-input"
                />
                <div className="balance-info">
                  Available: 1000 ZTC ● Min: 1 ZTC
                </div>
              </div>

              <div className="form-group">
                <label>Validator</label>
                <select
                  value={selectedValidator}
                  onChange={(e) => setSelectedValidator(e.target.value)}
                  className="validator-select"
                >
                  <option value="">Select Validator</option>
                  {validators.map(({ name, apy, commission }, i) => (
                    <option key={i} value={name}>
                      {name} ● {apy} APY ● Commission: {commission}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Staking Duration</label>
                <div className="duration-options">
                  <button
                    className={
                      stakingPeriod === "flexible" ? "duration-button active" : "duration-button"
                    }
                    onClick={() => setStakingPeriod("flexible")}
                  >
                    Flexible
                  </button>
                  <button
                    className={stakingPeriod === "fixed" ? "duration-button active" : "duration-button"}
                    onClick={() => setStakingPeriod("fixed")}
                  >
                    30 Days
                  </button>
                </div>
              </div>
              <div className="reward-preview">
                <p>Estimated daily reward:</p>
                <p className="reward-amount">{calculateRewards()} ZTC</p>
              </div>
              <button className="stake-btn">
                <Lock size={20} /> Stake Tokens
              </button>
            </div>
          </div>

          <div className="staking-benefits">
            <h2>Benefits</h2>
            {stakingBenefits.map(({ icon, title, description, highlight }) => (
              <div key={title} className="benefit-card">
                <div className="benefit-icon">{icon}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span>{highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Staking;

