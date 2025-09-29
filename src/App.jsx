import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import News from "./News";
import ChatBot from "./ChatBot";
import Bridge from "./Bridge";
import Staking from "./Staking";
import Explorer from "./Explorer";
import Documentation from "./Documentation";
import Community from "./Community";
import "./App.css";

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsWalletConnected(true);
      } catch {
        alert("Failed to connect wallet.");
      }
    } else {
      alert("Please install MetaMask to connect wallet.");
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar isWalletConnected={isWalletConnected} connectWallet={connectWallet} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/news" element={<News />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/bridge" element={<Bridge />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
