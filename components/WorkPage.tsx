// components/WorkPage.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { WorkPageProps, Project } from './types';
import { EncryptedText } from './EncryptedText';
import { projects } from './projectData';

export const WorkPage: React.FC<WorkPageProps> = ({ onProjectClick }) => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<string>("");
  
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
        <div className="max-w-7xl mx-auto flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative aspect-[4/3] min-w-[200px] max-w-[200px] flex-shrink-0 snap-center overflow-hidden bg-neutral-900 rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => onProjectClick(project)}
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