"use client";

import { Persona } from "../lib/prompts";

interface PersonaSwitchProps {
  persona: Persona;
  onChange: (p: Persona) => void;
}

export default function PersonaSwitch({ persona, onChange }: PersonaSwitchProps) {
  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      padding: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Hitesh Persona */}
      <button
        onClick={() => onChange("hitesh")}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 24px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backgroundColor: persona === "hitesh" 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.1)',
          color: persona === "hitesh" ? '#1f2937' : 'rgba(255, 255, 255, 0.9)',
          fontWeight: '600',
          fontSize: '1rem',
          boxShadow: persona === "hitesh" 
            ? '0 8px 25px rgba(0, 0, 0, 0.15)' 
            : 'none',
          transform: persona === "hitesh" ? 'translateY(-2px)' : 'translateY(0)',
          backdropFilter: 'blur(10px)',
          minWidth: '200px',
          textAlign: 'left'
        }}
        onMouseEnter={e => {
          if (persona !== "hitesh") {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            target.style.transform = 'translateY(-1px)';
          }
        }}
        onMouseLeave={e => {
          if (persona !== "hitesh") {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            target.style.transform = 'translateY(0)';
          }
        }}
      >
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          color: 'white',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
        }}>
          H
        </div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>
            Hitesh Choudhary
          </div>
          <div style={{ 
            fontSize: '0.85rem', 
            opacity: 0.8,
            marginTop: '2px'
          }}>
            Tech Educator & YouTuber
          </div>
          {persona === "hitesh" && (
            <div style={{
              fontSize: '0.75rem',
              marginTop: '4px',
              padding: '2px 8px',
              backgroundColor: '#10b981',
              color: 'white',
              borderRadius: '10px',
              display: 'inline-block'
            }}>
              Active
            </div>
          )}
        </div>
      </button>

      {/* Piyush Persona */}
      <button
        onClick={() => onChange("piyush")}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 24px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backgroundColor: persona === "piyush" 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.1)',
          color: persona === "piyush" ? '#1f2937' : 'rgba(255, 255, 255, 0.9)',
          fontWeight: '600',
          fontSize: '1rem',
          boxShadow: persona === "piyush" 
            ? '0 8px 25px rgba(0, 0, 0, 0.15)' 
            : 'none',
          transform: persona === "piyush" ? 'translateY(-2px)' : 'translateY(0)',
          backdropFilter: 'blur(10px)',
          minWidth: '200px',
          textAlign: 'left'
        }}
        onMouseEnter={e => {
          if (persona !== "piyush") {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            target.style.transform = 'translateY(-1px)';
          }
        }}
        onMouseLeave={e => {
          if (persona !== "piyush") {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            target.style.transform = 'translateY(0)';
          }
        }}
      >
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          color: 'white',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
        }}>
          P
        </div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>
            Piyush Garg
          </div>
          <div style={{ 
            fontSize: '0.85rem', 
            opacity: 0.8,
            marginTop: '2px'
          }}>
            Full Stack Developer
          </div>
          {persona === "piyush" && (
            <div style={{
              fontSize: '0.75rem',
              marginTop: '4px',
              padding: '2px 8px',
              backgroundColor: '#10b981',
              color: 'white',
              borderRadius: '10px',
              display: 'inline-block'
            }}>
              Active
            </div>
          )}
        </div>
      </button>
    </div>
  );
}