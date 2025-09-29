import React from "react";
import {
  Users,
  MessageCircle,
  Github,
  Twitter,
  Send,
  Calendar,
  Award,
} from "lucide-react";
import "./Community.css";

const Community = () => {
  const communityStats = [
    { label: "Community Members", value: "250K+", icon: <Users /> },
    { label: "Active Developers", value: "5K+", icon: <Github /> },
    { label: "Daily Messages", value: "10K+", icon: <MessageCircle /> },
    { label: "Countries", value: "150+", icon: <Award /> },
  ];

  const socialChannels = [
    {
      name: "Discord",
      description: "Join the main community for real-time discussions",
      members: "100K members",
      icon: <MessageCircle />,
      link: "https://discord.gg/zenchain",
      color: "#5865F2",
    },
    {
      name: "Twitter",
      description: "Follow us for latest updates and announcements",
      members: "75K followers",
      icon: <Twitter />,
      link: "https://twitter.com/zen_chain",
      color: "#1DA1F2",
    },
    {
      name: "Telegram",
      description: "Official Telegram group for community chats",
      members: "45K members",
      icon: <Send />,
      link: "https://t.me/zenchainofficial",
      color: "#0088CC",
    },
    {
      name: "GitHub",
      description: "Contribute to open-source ZenChain projects",
      members: "2K contributors",
      icon: <Github />,
      link: "https://github.com/zenchainprotocol",
      color: "#333",
    },
  ];

  const upcomingEvents = [
    {
      title: "ZenChain Developer Workshop",
      date: "Feb 15, 2025",
      time: "2 PM UTC",
      type: "Virtual Workshop",
      description: "Learn to build cross-chain dApps on ZenChain.",
    },
    {
      title: "Community AMA",
      date: "Feb 20, 2025",
      time: "6 PM UTC",
      type: "Live Q&A",
      description: "Ask the ZenChain team about the roadmap.",
    },
    {
      title: "Cross-Chain DeFi Summit",
      date: "Mar 5, 2025",
      time: "10 AM UTC",
      type: "Virtual Conference",
      description: "Explore the future of decentralized finance.",
    },
  ];

  return (
    <div className="community">
      <section className="community-hero">
        <div className="container">
          <h1 className="community-title">
            <Users size={48} /> Join the{" "}
            <span className="gradient-text">ZenChain Community</span>
          </h1>
          <p className="community-subtitle">
            Connect with developers, validators & enthusiasts building the
            future of the decentralized web.
          </p>
          <div className="community-stats">
            {communityStats.map(({ label, value, icon }, i) => (
              <div key={i} className="stat-item">
                <div className="stat-icon">{icon}</div>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="social-channels">
        <div className="container">
          <h2>Social Channels</h2>
          <div className="channels-grid">
            {socialChannels.map(({ name, description, members, icon, link, color }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
                style={{ borderColor: color }}
              >
                <div className="channel-icon" style={{ backgroundColor: color }}>
                  {icon}
                </div>
                <div className="channel-info">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <small>{members}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="upcoming-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map(({ title, date, time, type, description }, i) => (
              <div key={i} className="event-card">
                <h3>{title}</h3>
                <p>{type}</p>
                <p>{description}</p>
                <small>{date} • {time}</small>
                <button className="register-btn">Register</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
