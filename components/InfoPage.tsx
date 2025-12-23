// components/InfoPage.tsx
'use client';
import React from 'react';
import { InfoPageProps } from './types';
import { EncryptedText, HoverEncryptedText } from './EncryptedText';

export const InfoPage: React.FC<InfoPageProps> = ({ onMoreInfoToggle }) => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('mail.vyshnave@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen w-screen bg-black text-white font-mono flex flex-col pt-16">
      {/* Scrollable Container for Mobile */}
      <div className="flex-1 overflow-y-auto px-6 md:px-12 lg:px-16 pt-8 pb-12">
        <div className="max-w-7xl w-full mx-auto">
          {/* Single Column on Mobile, Two Columns on Desktop */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-start">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8 order-1">
              <h1 className="text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[0.85] font-bold tracking-tighter">
                <EncryptedText 
                  text="INFO"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-white"
                  revealDelayMs={40}
                />
              </h1>
              
              {/* Text Content - Hidden on mobile, shown after image */}
              <div className="hidden lg:block space-y-6 text-base md:text-lg leading-relaxed max-w-xl">
                <p className="text-white">
                  I'm Vyshnave, an independent software developer shaping brands that stand out and drive meaningful growth.
                </p>
                
                <p className="text-white">
                  Originally from India and now based in Dubai, I'm passionate about bringing ambitious visions to life and partnering with founders and brands who refuse to settle for average.
                </p>
                
                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-neutral-400 text-sm mb-4">2025</p>
                  <p className="text-white">
                    Specialising in full-stack development, user centered design, and modern web technologies.
                  </p>
                </div>
              </div>

              {/* More Info Button - Desktop only */}
              <div className="hidden lg:block pt-4">
                <button 
                  onClick={onMoreInfoToggle}
                  className="group hover:text-cyan-400 transition text-sm"
                >
                  <span className="text-cyan-400">[</span>
                  <HoverEncryptedText text=" MORE INFO " />
                  <span className="text-cyan-400">]</span>
                </button>
              </div>

              {/* Footer - Desktop only */}
              <div className="hidden lg:block pt-8 text-xs text-neutral-600">
                <span>
                  <EncryptedText 
                    text="DESIGN & DEVELOPMENT BY VIKI VYSHNAVE"
                    encryptedClassName="text-neutral-800"
                    revealedClassName="text-neutral-600"
                    revealDelayMs={35}
                  />
                </span>
              </div>
            </div>

            {/* Right Column - Image & Links */}
            <div className="space-y-6 order-2">
              {/* Profile Image */}
              <div className="relative aspect-[4/5] max-w-sm lg:ml-auto overflow-hidden rounded-lg">
                <img 
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              
              {/* Social Links */}
              <div className="max-w-sm lg:ml-auto grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                <a href="mailto:mail.vyshnave@gmail.com" onClick={copyEmail} className="hover:text-cyan-400 transition cursor-pointer">
                  <div className="text-[10px] md:text-xs text-neutral-500 mb-1">
                    <EncryptedText 
                      text={copied ? "Copied! ✓" : "Email ↗"}
                      encryptedClassName="text-neutral-700"
                      revealedClassName={copied ? "text-cyan-400" : "text-neutral-500"}
                      revealDelayMs={35}
                    />
                  </div>
                  <div className="text-[11px] md:text-sm break-words">MAIL.VYSHNAVE@GMAIL.COM</div>
                </a>

                <a href="https://github.com/vyshnave1997" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  <div className="text-[10px] md:text-xs text-neutral-500 mb-1">
                    <EncryptedText 
                      text="GitHub ↗"
                      encryptedClassName="text-neutral-700"
                      revealedClassName="text-neutral-500"
                      revealDelayMs={40}
                    />
                  </div>
                  <div className="text-[11px] md:text-sm">/VYSHNAVE1997</div>
                </a>

                <a href="https://www.linkedin.com/in/vyshnave97/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  <div className="text-[10px] md:text-xs text-neutral-500 mb-1">
                    <EncryptedText 
                      text="LinkedIn ↗"
                      encryptedClassName="text-neutral-700"
                      revealedClassName="text-neutral-500"
                      revealDelayMs={45}
                    />
                  </div>
                  <div className="text-[11px] md:text-sm">/IN/VYSHNAVE97</div>
                </a>

                <a href="#" className="hover:text-cyan-400 transition">
                  <div className="text-[10px] md:text-xs text-neutral-500 mb-1">
                    <EncryptedText 
                      text="Behance ↗"
                      encryptedClassName="text-neutral-700"
                      revealedClassName="text-neutral-500"
                      revealDelayMs={50}
                    />
                  </div>
                  <div className="text-[11px] md:text-sm">/VIKIVYSHNAVE</div>
                </a>
              </div>
            </div>

            {/* Text Content - Mobile only, shown after image */}
            <div className="lg:hidden order-3 space-y-6 text-base md:text-lg leading-relaxed">
              <p className="text-white">
                I'm Viki Vyshnave, an independent software developer shaping brands that stand out and drive meaningful growth.
              </p>
              
              <p className="text-white">
                Originally from India and now based in Dubai, I'm passionate about bringing ambitious visions to life and partnering with founders and brands who refuse to settle for average.
              </p>
              
              <div className="pt-4 border-t border-neutral-800">
                <p className="text-neutral-400 text-sm mb-4">2025</p>
                <p className="text-white">
                  Specialising in full-stack development, user centered design, and modern web technologies.
                </p>
              </div>

              {/* More Info Button - Mobile */}
              <div className="pt-4">
                <button 
                  onClick={onMoreInfoToggle}
                  className="group hover:text-cyan-400 transition text-sm"
                >
                  <span className="text-cyan-400">[</span>
                  <HoverEncryptedText text=" MORE INFO " />
                  <span className="text-cyan-400">]</span>
                </button>
              </div>

              {/* Footer - Mobile */}
              <div className="pt-8 text-xs text-neutral-600">
                <span>
                  <EncryptedText 
                    text="DESIGN & DEVELOPMENT BY VIKI VYSHNAVE"
                    encryptedClassName="text-neutral-800"
                    revealedClassName="text-neutral-600"
                    revealDelayMs={35}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};