// components/EncryptedText.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { EncryptedTextProps, HoverEncryptedTextProps } from './types';

export const EncryptedText: React.FC<EncryptedTextProps> = ({ 
  text, 
  encryptedClassName = "text-neutral-500", 
  revealedClassName = "text-white",
  revealDelayMs = 50,
  triggerKey = 0
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  
  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;
    
    setIsRevealed(false);
    setDisplayText(text);
    
    const scramble = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        
        iteration += 1 / 3;
        
        if (iteration >= text.length) {
          clearInterval(interval);
          setIsRevealed(true);
          setDisplayText(text);
        }
      }, revealDelayMs);
    };
    
    scramble();
    
    return () => clearInterval(interval);
  }, [text, revealDelayMs, triggerKey, chars]);
  
  return (
    <span className={isRevealed ? revealedClassName : encryptedClassName}>
      {displayText}
    </span>
  );
};

export const HoverEncryptedText: React.FC<HoverEncryptedTextProps> = ({ text, className = "" }) => {
  const [hoverKey, setHoverKey] = useState<number>(0);
  
  return (
    <span 
      className={className}
      onMouseEnter={() => setHoverKey(prev => prev + 1)}
    >
      <EncryptedText 
        text={text}
        encryptedClassName="text-neutral-600"
        revealedClassName="text-white"
        revealDelayMs={30}
        triggerKey={hoverKey}
      />
    </span>
  );
};