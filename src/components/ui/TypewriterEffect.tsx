"use client";

import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  speed?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, delay = 1000, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else if (delay > 0) {
        // Optional: Reset after a delay for continuous typing
        // setTimeout(() => {
        //   setDisplayText('');
        //   setCurrentIndex(0);
        // }, delay);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, speed, text, delay]);

  return <>{displayText}</>;
};

export default TypewriterEffect;
