'use client';
import React, { useState, useEffect } from 'react';

// Types
interface EncryptedTextProps {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
  triggerKey?: number;
}

interface HoverEncryptedTextProps {
  text: string;
  className?: string;
}

interface Project {
  id: string;
  name: string;
  image: string;
  year: string;
}

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  showMoreInfo?: boolean;
  onMoreInfoToggle?: () => void;
}

// EncryptedText Component
const EncryptedText: React.FC<EncryptedTextProps> = ({ 
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

// Hover-triggered EncryptedText wrapper
const HoverEncryptedText: React.FC<HoverEncryptedTextProps> = ({ text, className = "" }) => {
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

// Navbar Component
const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, showMoreInfo, onMoreInfoToggle }) => {
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
          
          {/* More Info Button - Only show on info page */}
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

// Work Page Component
const WorkPage: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<string>("");
  
  const projects: Project[] = [
    { id: "01", name: "VIRTUAL REALITY", image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop", year: "2024" },
    { id: "02", name: "HEALTH PLATFORM", image: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=400&h=300&fit=crop", year: "2023" },
    { id: "03", name: "ATLAS BRAND", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop", year: "2023" },
    { id: "04", name: "MOBILE APP", image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=300&fit=crop", year: "2022" },
    { id: "05", name: "MUSIC STUDIO", image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=300&fit=crop", year: "2022" },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white font-mono flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center px-6 mb-12">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] leading-none font-bold tracking-tight mb-8">
            <div>
              {!isFirstLoad && !hoveredProject && <span className="text-cyan-400">[</span>}
              <EncryptedText 
                text={
                  isFirstLoad 
                    ? "WELCOME" 
                    : hoveredProject 
                      ? hoveredProject.name.split(' ')[0] 
                      : "VIKI"
                }
                encryptedClassName="text-neutral-700"
                revealedClassName="text-white"
                revealDelayMs={40}
                key={isFirstLoad ? 'welcome-1' : hoveredProject ? hoveredProject.id + '-1' : 'default-1'}
              />
              {!isFirstLoad && !hoveredProject && <span className="text-cyan-400">]</span>}
            </div>
            <div>
              <EncryptedText 
                text={
                  isFirstLoad 
                    ? "" 
                    : hoveredProject 
                      ? (hoveredProject.name.split(' ')[1] || '') 
                      : "VYSHNAVE"
                }
                encryptedClassName="text-neutral-700"
                revealedClassName="text-white"
                revealDelayMs={45}
                key={isFirstLoad ? 'welcome-2' : hoveredProject ? hoveredProject.id + '-2' : 'default-2'}
              />
            </div>
          </h1>
          
          <div className="flex justify-between items-end">
            <div className="text-sm space-y-1">
              <div>
                <EncryptedText 
                  text={hoveredProject ? "PROJECTS" : "SOFTWARE"}
                  encryptedClassName="text-neutral-600"
                  revealedClassName="text-white"
                  revealDelayMs={35}
                  key={hoveredProject ? `title1-${hoveredProject.id}` : 'title1-default'}
                />
              </div>
              <div>
                <EncryptedText 
                  text={hoveredProject ? "" : "DEVELOPER"}
                  encryptedClassName="text-neutral-600"
                  revealedClassName="text-white"
                  revealDelayMs={40}
                  key={hoveredProject ? `title2-${hoveredProject.id}` : 'title2-default'}
                />
              </div>
            </div>
            
            <div className="text-sm text-right">
              <div>
                <EncryptedText 
                  text={hoveredProject ? hoveredProject.year : "DUBAI, UAE"}
                  encryptedClassName="text-neutral-600"
                  revealedClassName="text-white"
                  revealDelayMs={35}
                  key={hoveredProject ? `location-${hoveredProject.id}` : 'location-default'}
                />
              </div>
              <div className="mt-1">
                {!hoveredProject && currentTime}
                {hoveredProject && (
                  <EncryptedText 
                    text="PROJECT"
                    encryptedClassName="text-neutral-600"
                    revealedClassName="text-white"
                    revealDelayMs={40}
                    key={`time-${hoveredProject.id}`}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-6 pb-6">
        <div className="max-w-7xl mx-auto flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative aspect-[4/3] min-w-[200px] max-w-[200px] flex-shrink-0 snap-center overflow-hidden bg-neutral-900 rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img 
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 text-sm">
                <EncryptedText 
                  text={`[${project.id}]`}
                  encryptedClassName="text-neutral-600"
                  revealedClassName="text-white"
                  revealDelayMs={50 + index * 10}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Info Page Component
const InfoPage: React.FC<{ onMoreInfoToggle: () => void }> = ({ onMoreInfoToggle }) => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white font-mono flex flex-col pt-16">
      <div className="flex-1 flex items-start px-6 md:px-12 lg:px-16 pt-8">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[0.85] font-bold tracking-tighter">
              <EncryptedText 
                text="INFO"
                encryptedClassName="text-neutral-700"
                revealedClassName="text-white"
                revealDelayMs={40}
              />
            </h1>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-xl">
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
            </div>

            {/* More Info Button */}
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

            {/* Footer */}
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

          {/* Right Column - Image & Links */}
          <div className="hidden lg:block space-y-6">
            <div className="relative aspect-[4/5] max-w-sm ml-auto overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            
            {/* Image Bottom Links */}
            <div className="max-w-sm ml-auto grid grid-cols-2 gap-4 text-sm">
              <a href="mailto:viki@vyshnave.com" className="hover:text-cyan-400 transition">
                <div className="text-xs text-neutral-500 mb-1">
                  <EncryptedText 
                    text="Email ↗"
                    encryptedClassName="text-neutral-700"
                    revealedClassName="text-neutral-500"
                    revealDelayMs={35}
                  />
                </div>
                <div>VIKI@VYSHNAVE.COM</div>
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                <div className="text-xs text-neutral-500 mb-1">
                  <EncryptedText 
                    text="GitHub ↗"
                    encryptedClassName="text-neutral-700"
                    revealedClassName="text-neutral-500"
                    revealDelayMs={40}
                  />
                </div>
                <div>/VIKIVYSHNAVE</div>
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                <div className="text-xs text-neutral-500 mb-1">
                  <EncryptedText 
                    text="LinkedIn ↗"
                    encryptedClassName="text-neutral-700"
                    revealedClassName="text-neutral-500"
                    revealDelayMs={45}
                  />
                </div>
                <div>/IN/VIKI-VYSHNAVE</div>
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                <div className="text-xs text-neutral-500 mb-1">
                  <EncryptedText 
                    text="Behance ↗"
                    encryptedClassName="text-neutral-700"
                    revealedClassName="text-neutral-500"
                    revealDelayMs={50}
                  />
                </div>
                <div>/VIKIVYSHNAVE</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// More Info Page Component
const MoreInfoPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white font-mono flex flex-col pt-16">
      <div className="flex-1 flex items-start px-6 md:px-12 lg:px-16 pt-8">
        <div className="max-w-4xl w-full mx-auto space-y-12">
          <div className="flex justify-between items-start">
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[0.85] font-bold tracking-tighter">
              <EncryptedText 
                text="MORE INFO"
                encryptedClassName="text-neutral-700"
                revealedClassName="text-white"
                revealDelayMs={40}
              />
            </h1>
            
            <button 
              onClick={onClose}
              className="text-sm hover:text-cyan-400 transition mt-4"
            >
              <span className="text-cyan-400">[</span>
              <HoverEncryptedText text=" CLOSE " />
              <span className="text-cyan-400">]</span>
            </button>
          </div>

          <div className="space-y-8 text-base leading-relaxed">
            <div>
              <h2 className="text-cyan-400 text-sm mb-3">
                <EncryptedText 
                  text="[EXPERIENCE]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={35}
                />
              </h2>
              <div className="space-y-4 text-neutral-300">
                <p>5+ years of experience building modern web applications and digital experiences.</p>
                <p>Worked with startups and established companies across various industries including fintech, healthcare, and e-commerce.</p>
              </div>
            </div>

            <div>
              <h2 className="text-cyan-400 text-sm mb-3">
                <EncryptedText 
                  text="[SKILLS & TECHNOLOGIES]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={40}
                />
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-neutral-300">
                <div>
                  <div className="text-white mb-2">Frontend</div>
                  <div className="text-sm space-y-1">
                    <div>→ React & Next.js</div>
                    <div>→ TypeScript</div>
                    <div>→ Tailwind CSS</div>
                    <div>→ Three.js</div>
                  </div>
                </div>
                <div>
                  <div className="text-white mb-2">Backend</div>
                  <div className="text-sm space-y-1">
                    <div>→ Node.js</div>
                    <div>→ Python</div>
                    <div>→ PostgreSQL</div>
                    <div>→ MongoDB</div>
                  </div>
                </div>
                <div>
                  <div className="text-white mb-2">Tools</div>
                  <div className="text-sm space-y-1">
                    <div>→ Git</div>
                    <div>→ Docker</div>
                    <div>→ Figma</div>
                    <div>→ AWS</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-cyan-400 text-sm mb-3">
                <EncryptedText 
                  text="[APPROACH]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={45}
                />
              </h2>
              <div className="space-y-4 text-neutral-300">
                <p>I believe in creating meaningful digital experiences that solve real problems. My approach combines technical expertise with design thinking to deliver solutions that are both beautiful and functional.</p>
                <p>Whether it's building a complex web application or crafting a simple landing page, I focus on performance, accessibility, and user experience.</p>
              </div>
            </div>

            <div>
              <h2 className="text-cyan-400 text-sm mb-3">
                <EncryptedText 
                  text="[AVAILABILITY]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={50}
                />
              </h2>
              <p className="text-neutral-300">
                Currently available for freelance projects and collaborations. Open to both short-term and long-term engagements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ArchivePage: React.FC = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white font-mono flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[3rem] md:text-[5rem] leading-none font-bold tracking-tight mb-4">
          <EncryptedText 
            text="ARCHIVE"
            encryptedClassName="text-neutral-700"
            revealedClassName="text-white"
            revealDelayMs={40}
          />
        </h1>
        <p className="text-neutral-500">
          <EncryptedText 
            text="COMING SOON"
            encryptedClassName="text-neutral-700"
            revealedClassName="text-neutral-500"
            revealDelayMs={45}
          />
        </p>
      </div>
    </div>
  );
};

// Main App Component
const Portfolio: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('work');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    
    const pages = ['work', 'info', 'archive'];
    const currentIndex = pages.indexOf(currentPage);
    const newIndex = pages.indexOf(page);
    
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setIsTransitioning(true);
    setShowMoreInfo(false);
    
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300);
  };

  const handleMoreInfoToggle = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body, html {
          overflow: hidden;
        }
        .page-enter {
          animation: slideIn 0.3s ease-out forwards;
        }
        .page-exit {
          animation: slideOut 0.3s ease-out forwards;
        }
        .more-info-enter {
          animation: slideInFromLeft 0.4s ease-out forwards;
        }
        .more-info-exit {
          animation: slideOutToLeft 0.4s ease-out forwards;
        }
        @keyframes slideIn {
          from {
            transform: translateX(${direction === 'right' ? '100%' : '-100%'});
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(${direction === 'right' ? '-100%' : '100%'});
            opacity: 0;
          }
        }
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutToLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
      `}</style>

      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        showMoreInfo={showMoreInfo}
        onMoreInfoToggle={currentPage === 'info' ? handleMoreInfoToggle : undefined}
      />
      
      {/* More Info Overlay */}
      {showMoreInfo && (
        <div className="absolute inset-0 z-30 more-info-enter">
          <MoreInfoPage onClose={() => setShowMoreInfo(false)} />
        </div>
      )}
      
      <div className={isTransitioning ? 'page-exit' : 'page-enter'}>
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'info' && <InfoPage onMoreInfoToggle={handleMoreInfoToggle} />}
        {currentPage === 'archive' && <ArchivePage />}
      </div>
    </div>
  );
};

export default Portfolio;