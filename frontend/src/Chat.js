// frontend/src/Chat.js
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import ReactMarkdown from 'react-markdown';

const Chat = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([{sender: 'bot', text: 'Hello! How may I assist you today?'}]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setHistory(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/chat', { query: currentInput });
      const botMessage = { sender: 'bot', text: res.data.response };
      setHistory(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        backgroundColor: '#222222', // #222222 background for the entire page
        fontFamily: 'Poppins, sans-serif',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Global style to hide scrollbars */}
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          * {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}
      </style>
      
      {/* Centered Header */}
      <header
        style={{
          backgroundColor: '#222222',
          padding: '1rem',
          textAlign: 'center',
          color: '#1DCD9F',
          fontSize: '1.5rem',
          borderBottom:'2px solid white'
        }}
      >
        Chat Assistant
      </header>
      
      {/* Chat Window */}
      <div
        style={{
          flex: 1,
          padding: '1rem',
          overflowY: 'auto',
          backgroundColor: '#222222' // Chat window also #222222
        }}
      >
        {/* {history.map((msg, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
              marginBottom: '0.5rem'
              
            }}
          >
            
            <div
              style={{
                backgroundColor: '#008170', // Green container for messages
                color: '#fff',           // White text
                padding: '10px 15px',
                borderRadius: '20px',
                maxWidth: '70%',
                boxShadow: '0 1px 1px rgba(0,0,0,0.1)'
              }}
            >
              {msg.text}
            </div>
          </div>
        ))} */}
        {history.map((msg, index) => (
  <div
    key={index}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
      marginBottom: '0.5rem'
    }}
  >
    <div
      style={{
        fontSize: '0.8rem',
        color: 'white',
        marginBottom: '2px',
        alignContent:'center'
      }}
    >
      {msg.sender === 'bot' ? 'Bot' : 'You'}
    </div>
    <div
      style={{
        backgroundColor: '#008170', // Green container for messages
        color: '#fff',              // White text
        padding: '10px 15px',
        borderRadius: '20px',
        maxWidth: '70%',
        boxShadow: '0 1px 1px rgba(0,0,0,0.1)'
      }}
    >
      <ReactMarkdown>{msg.text}</ReactMarkdown>
    </div>
  </div>
))}

        {loading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginBottom: '0.5rem'
            }}
          >
            <div
              style={{
                backgroundColor: '#1DCD9F',
                color: '#fff',
                padding: '10px 15px',
                borderRadius: '20px',
                maxWidth: '70%',
                boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                fontStyle: 'italic'
              }}
            >
              Bot is typing...
            </div>
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>
      
      {/* Message Composer */}
      <div
        style={{
          padding: '1rem',
          backgroundColor: '#222222',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            outline: 'none',
            fontFamily: 'inherit',
            backgroundColor:'#EFECEC'
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            borderRadius: '20px',
            backgroundColor: '#1DCD9F',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
