import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Loader, HelpCircle } from 'lucide-react'
import './ChatBot.css'

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm ZenBot, your AI assistant for all things ZenChain. How can I help you?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const predefinedResponses = {
    'what is zenchain': {
      text: "ZenChain is a fully decentralized blockchain combining Bitcoin's security with Ethereum programmability.",
      followUp: ['How does cross-chain work?', 'What makes ZenChain secure?', 'How to get started?']
    },
    'how to connect wallet': {
      text: "You can connect using MetaMask or other EVM-compatible wallets. Add ZenChain with RPC and chain ID.",
      followUp: ['What is ZTC token?', 'How to get test tokens?', 'Supported wallets?']
    },
    // more predefined entries...
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const getResponse = (msg) => {
    const query = msg.toLowerCase()
    for (const key in predefinedResponses) {
      if (query.includes(key)) {
        return predefinedResponses[key]
      }
    }
    return {
      text: "Sorry, I don't understand that. Ask me about ZenChain features, staking, or security.",
      followUp: ['What is ZenChain?', 'Staking guide', 'Security features']
    }
  }

  const sendMessage = () => {
    const text = inputMessage.trim()
    if (!text) return
    setMessages(prev => [...prev, { id: prev.length+1, text, sender: 'user', timestamp: new Date() }])
    setInputMessage('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getResponse(text)
      setMessages(prev => [...prev, { id: prev.length+1, text: response.text, sender: 'bot', timestamp: new Date(), followUp: response.followUp }])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="chatbot">
      <section className="chatbot-hero">
        <div className="container">
          <h1 className="chatbot-title fade-in"><Bot size={48} /> ZenChain <span className="gradient-text">AI Assistant</span></h1>
          <p className="chatbot-subtitle fade-in">Ask me anything about ZenChain's features, staking or cross-chain capabilities.</p>
          {messages[messages.length-1].followUp && (
            <div className="quick-actions">
              {messages[messages.length-1].followUp.map((q, i) => (
                <button key={i} className="quick-action-btn" onClick={() => { setInputMessage(q); sendMessage()}}>
                  <HelpCircle size={16} /> {q}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="chat-section">
        <div className="container">
          <div className="chat-container">
            <div className="messages-container">
              {messages.map(m => (
                <div key={m.id} className={`message ${m.sender==='user' ? 'user-message' : 'bot-message'}`}>
                  <div className="message-avatar">{m.sender==='user' ? <User size={20} /> : <Bot size={20} />}</div>
                  <div className="message-content">
                    <div className="message-text">{m.text.split('\n').map((line, i) => <div key={i}>{line}</div>)}</div>
                    <div className="message-time">{m.timestamp.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message bot-message">
                  <div className="message-avatar"><Bot size={20} /></div>
                  <div className="message-content">
                    <div className="typing-indicator">ZenBot is typing...</div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="message-input-container">
              <div className="message-input-wrapper">
                <input 
                  type="text"
                  value={inputMessage}
                  onChange={e => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about ZenChain..."
                  disabled={isTyping}
                  className="message-input"
                />
                <button onClick={sendMessage} disabled={!inputMessage.trim() || isTyping} className="send-button">
                  <Send size={20} />
                </button>
              </div>
              <p className="input-disclaimer">ZenBot provides general info. Visit <a href="/docs">docs</a> or community for detailed support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChatBot
