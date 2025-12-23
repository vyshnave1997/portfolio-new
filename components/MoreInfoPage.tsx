// components/MoreInfoPage.tsx
'use client';
import React from 'react';
import { MoreInfoPageProps } from './types';
import { EncryptedText, HoverEncryptedText } from './EncryptedText';

export const MoreInfoPage: React.FC<MoreInfoPageProps> = ({ onClose }) => {
  return (
    <div className="h-screen w-screen overflow-y-auto bg-black text-white font-mono flex flex-col pt-16">
      <div className="flex-1 flex items-start px-6 md:px-12 lg:px-16 pt-8 pb-12">
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
              <div className="space-y-6 text-neutral-300">
                <div>
                  <div className="text-white text-sm mb-1">Software Developer - Techfriar Pvt Ltd</div>
                  <div className="text-xs text-cyan-400 mb-2">Oct 2024 – Sept 2025 | Infopark, Kochi</div>
                  <div className="text-sm space-y-1">
                    <div>→ Spearheaded development of scalable web applications with Next.js and React.js</div>
                    <div>→ Achieved 25% increase in user engagement through optimized implementations</div>
                    <div>→ Implemented CI/CD pipelines and conducted code reviews</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-white text-sm mb-1">Front-End Developer - FindOwn Technologies</div>
                  <div className="text-xs text-cyan-400 mb-2">Aug 2022 - Feb 2024 | Malappuram, Kerala</div>
                  <div className="text-sm space-y-1">
                    <div>→ Reduced load times by 30% through caching and lazy loading</div>
                    <div>→ Built reusable components with SCSS and Tailwind CSS</div>
                    <div>→ Collaborated with backend teams for seamless API integration</div>
                  </div>
                </div>

                <div>
                  <div className="text-white text-sm mb-1">Web Developer - EmpireAe Pvt Ltd</div>
                  <div className="text-xs text-cyan-400 mb-2">June 2020 – Jan 2021 | Kochi, Kerala</div>
                  <div className="text-sm space-y-1">
                    <div>→ Launched 10+ responsive websites improving user satisfaction by 40%</div>
                    <div>→ Created interactive elements with JavaScript frameworks</div>
                  </div>
                </div>
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
                    <div>→ React.js & Next.js</div>
                    <div>→ TypeScript</div>
                    <div>→ JavaScript & jQuery</div>
                    <div>→ HTML5 & CSS3</div>
                    <div>→ Three.js & D3.js</div>
                  </div>
                </div>
                <div>
                  <div className="text-white mb-2">State & Styling</div>
                  <div className="text-sm space-y-1">
                    <div>→ Redux & Context API</div>
                    <div>→ Zustand & MobX</div>
                    <div>→ Tailwind CSS & SCSS</div>
                    <div>→ Material UI & Chakra UI</div>
                    <div>→ Bootstrap & AntD</div>
                  </div>
                </div>
                <div>
                  <div className="text-white mb-2">Tools & Testing</div>
                  <div className="text-sm space-y-1">
                    <div>→ Git & GitHub</div>
                    <div>→ VS Code & Figma</div>
                    <div>→ Jest & React Testing</div>
                    <div>→ Webpack & Babel</div>
                    <div>→ Jira & Trello</div>
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
                <p>4+ years of experience creating user-friendly and visually appealing websites and applications. I specialize in developing responsive and interactive user interfaces with a focus on accessibility, cross-browser compatibility, and optimal performance.</p>
                <p>My expertise spans from React Hooks and DOM manipulation to Progressive Web Apps (PWAs) and Web Accessibility (WCAG). I excel at collaborating with cross-functional teams, managing multiple projects, and delivering high-quality results that meet business objectives.</p>
              </div>
            </div>

            <div>
              <h2 className="text-cyan-400 text-sm mb-3">
                <EncryptedText 
                  text="[EDUCATION]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={50}
                />
              </h2>
              <div className="text-neutral-300">
                <div className="text-white text-sm mb-1">Bachelor of Technology in Computer Science and Engineering</div>
                <div className="text-xs text-cyan-400 mb-1">University of Calicut | 2018</div>
                <div className="text-xs">Eranad Knowledge City Technical Campus</div>
              </div>
            </div>

            <div>
              <h2 className="text-cyan-400 text-sm mb-3">
                <EncryptedText 
                  text="[AVAILABILITY]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={55}
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