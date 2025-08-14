"use client";
import { useState, useRef, useEffect } from 'react';
import type { ModelMessage } from 'ai';
import PersonaSwitch from './PersonaSwitch';
import { Persona } from '../lib/prompts';

export default function ChatWindow() {
  const [messages, setMessages] = useState<ModelMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [persona, setPersona] = useState<Persona>('hitesh');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Clear chat when persona changes
  const handlePersonaChange = (newPersona: Persona) => {
    setPersona(newPersona);
    setMessages([]); // Clear previous chat
    setInput(''); // Clear input
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: ModelMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          persona, 
          messages: newMessages 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const { messages: botMessages }: { messages: ModelMessage[] } = await response.json();
      setMessages(currentMessages => [...currentMessages, ...botMessages]);
    } catch (err) {
      console.error('Error sending message:', err);
      setMessages(currentMessages => [...currentMessages, {
        role: 'assistant',
        content: 'Sorry, there was an error processing your message. Please try again.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Header */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        marginBottom: '20px'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '10px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Persona AI Chat
        </h1>
        <p style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.9)',
          fontSize: '1.1rem',
          marginBottom: '30px'
        }}>
          Choose your AI personality and start chatting
        </p>
      </div>

      {/* Persona Switcher */}
      <div style={{ marginBottom: '20px' }}>
        <PersonaSwitch persona={persona} onChange={handlePersonaChange} />
      </div>

      {/* Chat Container */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        height: '600px',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Chat Header */}
        <div style={{
          padding: '20px',
          background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
          color: 'white',
          borderRadius: '20px 20px 0 0'
        }}>
          <h3 style={{ 
            margin: 0, 
            fontSize: '1.2rem',
            fontWeight: '600' 
          }}>
            Chatting with {persona === 'hitesh' ? 'Hitesh Choudhary' : 'Piyush Garg'}
          </h3>
          <p style={{ 
            margin: '5px 0 0 0', 
            fontSize: '0.9rem',
            opacity: 0.9 
          }}>
            {messages.length === 0 
              ? 'Start a conversation...' 
              : `${messages.length} messages`}
          </p>
        </div>

        {/* Chat Messages */}
        <div style={{ 
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          backgroundColor: '#f8fafc'
        }}>
          {messages.length === 0 ? (
            <div style={{
              textAlign: 'center',
              color: '#64748b',
              padding: '40px 20px',
              fontSize: '1.1rem'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💬</div>
              <p>No messages yet. Start the conversation!</p>
              <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
                {persona === 'hitesh' 
                  ? 'Ask Hitesh about coding, tech, or development tips' 
                  : 'Ask Piyush about programming, tutorials, or tech advice'}
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div key={`${message.role}-${index}`} style={{ 
                marginBottom: '20px',
                display: 'flex',
                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  maxWidth: '70%',
                  padding: '15px 20px',
                  borderRadius: message.role === 'user' ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
                  backgroundColor: message.role === 'user' 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                    : 'white',
                  color: message.role === 'user' ? 'white' : '#1f2937',
                  boxShadow: message.role === 'user' 
                    ? '0 4px 15px rgba(102, 126, 234, 0.3)'
                    : '0 4px 15px rgba(0,0,0,0.1)',
                  border: message.role === 'assistant' ? '1px solid #e5e7eb' : 'none',
                  position: 'relative'
                }}>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: '600',
                    marginBottom: '8px',
                    opacity: 0.8,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {message.role === 'user' ? 'You' : persona === 'hitesh' ? 'Hitesh' : 'Piyush'}
                  </div>
                  <div style={{ lineHeight: '1.6', fontSize: '1rem' }}>
                    {typeof message.content === 'string'
                      ? message.content
                      : message.content
                          .filter(part => part.type === 'text')
                          .map((part, partIndex) => (
                            <div key={partIndex}>{part.text}</div>
                          ))}
                  </div>
                </div>
              </div>
            ))
          )}
          
          {loading && (
            <div style={{ 
              display: 'flex',
              justifyContent: 'flex-start',
              marginBottom: '20px'
            }}>
              <div style={{
                maxWidth: '70%',
                padding: '15px 20px',
                borderRadius: '20px 20px 20px 5px',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '4px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#667eea',
                    animation: 'typing 1.4s infinite ease-in-out'
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#667eea',
                    animation: 'typing 1.4s infinite ease-in-out 0.2s'
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#667eea',
                    animation: 'typing 1.4s infinite ease-in-out 0.4s'
                  }}></div>
                </div>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  {persona === 'hitesh' ? 'Hitesh' : 'Piyush'} is typing...
                </span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderTop: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-end' }}>
            <textarea 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
              rows={1}
              style={{ 
                flex: 1,
                padding: '15px 20px',
                border: '2px solid #e5e7eb',
                borderRadius: '25px',
                resize: 'none',
                fontSize: '1rem',
                fontFamily: 'inherit',
                outline: 'none',
                transition: 'all 0.2s ease',
                maxHeight: '120px',
                minHeight: '50px'
              }}
              placeholder={`Ask ${persona === 'hitesh' ? 'Hitesh' : 'Piyush'} anything... (Press Enter to send)`}
              onFocus={e => (e.target as HTMLElement).style.borderColor = '#667eea'}
              onBlur={e => (e.target as HTMLElement).style.borderColor = '#e5e7eb'}
            />
            <button 
              onClick={sendMessage} 
              disabled={loading || !input.trim()}
              style={{
                padding: '15px 25px',
                background: loading || !input.trim() 
                  ? '#e5e7eb' 
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: loading || !input.trim() ? '#9ca3af' : 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                boxShadow: loading || !input.trim() 
                  ? 'none'
                  : '0 4px 15px rgba(102, 126, 234, 0.3)',
                transform: loading || !input.trim() ? 'none' : 'translateY(-2px)'
              }}
              onMouseEnter={e => {
                if (!loading && input.trim()) {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translateY(-3px)';
                  target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }
              }}
              onMouseLeave={e => {
                if (!loading && input.trim()) {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }
              }}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
          <p style={{
            fontSize: '0.8rem',
            color: '#64748b',
            margin: '10px 0 0 0',
            textAlign: 'center'
          }}>
            Press Enter to send • Shift+Enter for new line • Switch personas to start fresh
          </p>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
        
        textarea {
          font-family: inherit;
          line-height: 1.5;
        }
        
        textarea::-webkit-scrollbar {
          width: 6px;
        }
        
        textarea::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        textarea::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        textarea::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
}