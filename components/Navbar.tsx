// components/Navbar.tsx
'use client';
import React, { useState } from 'react';
import { NavbarProps } from './types';
import { EncryptedText, HoverEncryptedText } from './EncryptedText';

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  showMoreInfo, 
  onMoreInfoToggle 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-black/50 backdrop-blur-sm">
        <button onClick={() => onNavigate('work')} className="text-sm">
          <span className="text-cyan-400">[</span>
          <EncryptedText 
            text="VIKI"
            encryptedClassName="text-neutral-600"
            revealedClassName="text-white"
            revealDelayMs={30}
          />
          <span className="text-cyan-400">]</span>
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm items-center">
          <button 
            className="group hover:text-white transition"
            onClick={() => handleNavClick('work')}
          >
            {currentPage === 'work' && <span className="text-cyan-400">[</span>}
            <HoverEncryptedText text={currentPage === 'work' ? " WORK " : "WORK"} />
            {currentPage === 'work' && <span className="text-cyan-400">]</span>}
          </button>
          <button 
            className="group hover:text-white transition"
            onClick={() => handleNavClick('info')}
          >
            {currentPage === 'info' && <span className="text-cyan-400">[</span>}
            <HoverEncryptedText text={currentPage === 'info' ? " INFO " : "INFO"} />
            {currentPage === 'info' && <span className="text-cyan-400">]</span>}
          </button>
          <button 
            className="group hover:text-white transition"
            onClick={() => handleNavClick('archive')}
          >
            {currentPage === 'archive' && <span className="text-cyan-400">[</span>}
            <HoverEncryptedText text={currentPage === 'archive' ? " ARCHIVE " : "ARCHIVE"} />
            {currentPage === 'archive' && <span className="text-cyan-400">]</span>}
          </button>
          
          {currentPage === 'info' && onMoreInfoToggle && (
            <button 
              className="group hover:text-white transition"
              onClick={onMoreInfoToggle}
            >
              {showMoreInfo && <span className="text-cyan-400">[</span>}
              <HoverEncryptedText text={showMoreInfo ? " MORE INFO " : "MORE INFO"} />
              {showMoreInfo && <span className="text-cyan-400">]</span>}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sm hover:text-white transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-cyan-400">[</span>
          <span className="text-white px-2">☰</span>
          <span className="text-cyan-400">]</span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden flex items-center justify-center">
          <div className="flex flex-col gap-8 text-center text-2xl">
            <button 
              className="group hover:text-white transition"
              onClick={() => handleNavClick('work')}
            >
              {currentPage === 'work' && <span className="text-cyan-400">[</span>}
              <HoverEncryptedText text={currentPage === 'work' ? " WORK " : "WORK"} />
              {currentPage === 'work' && <span className="text-cyan-400">]</span>}
            </button>
            <button 
              className="group hover:text-white transition"
              onClick={() => handleNavClick('info')}
            >
              {currentPage === 'info' && <span className="text-cyan-400">[</span>}
              <HoverEncryptedText text={currentPage === 'info' ? " INFO " : "INFO"} />
              {currentPage === 'info' && <span className="text-cyan-400">]</span>}
            </button>
            <button 
              className="group hover:text-white transition"
              onClick={() => handleNavClick('archive')}
            >
              {currentPage === 'archive' && <span className="text-cyan-400">[</span>}
              <HoverEncryptedText text={currentPage === 'archive' ? " ARCHIVE " : "ARCHIVE"} />
              {currentPage === 'archive' && <span className="text-cyan-400">]</span>}
            </button>
            <button 
              className="text-neutral-500 hover:text-white transition mt-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-cyan-400">[</span>
              <span className="text-white px-2">✕</span>
              <span className="text-cyan-400">]</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};