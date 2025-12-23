// components/Portfolio.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Project } from './types';
import { Navbar } from './Navbar';
import { WorkPage } from './WorkPage';
import { InfoPage } from './InfoPage';
import { MoreInfoPage } from './MoreInfoPage';
import { ArchivePage } from './ArchivePage';
import { ProjectDetailPage } from './ProjectDetailPage';

const Portfolio: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('work');
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const archiveRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef<boolean>(false);

  useEffect(() => {
    // Initial setup - position all pages
    if (workRef.current && infoRef.current && archiveRef.current) {
      gsap.set(workRef.current, { xPercent: 0, opacity: 1 });
      gsap.set(infoRef.current, { xPercent: 100, opacity: 0 });
      gsap.set(archiveRef.current, { xPercent: 100, opacity: 0 });
    }
  }, []);

  const handleNavigate = (page: string) => {
    if (page === currentPage || isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    setShowMoreInfo(false);
    
    const pages = ['work', 'info', 'archive'];
    const currentIndex = pages.indexOf(currentPage);
    const newIndex = pages.indexOf(page);
    const direction = newIndex > currentIndex ? 1 : -1;
    
    const refs = {
      work: workRef.current,
      info: infoRef.current,
      archive: archiveRef.current
    };
    
    const currentRef = refs[currentPage as keyof typeof refs];
    const newRef = refs[page as keyof typeof refs];
    
    if (!currentRef || !newRef) return;
    
    const timeline = gsap.timeline({
      onComplete: () => {
        setCurrentPage(page);
        isAnimatingRef.current = false;
      }
    });
    
    // Set initial position for incoming page
    gsap.set(newRef, { 
      xPercent: direction * 100, 
      opacity: 0 
    });
    
    // Animate both pages
    timeline
      .to(currentRef, {
        xPercent: direction * -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut"
      }, 0)
      .to(newRef, {
        xPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut"
      }, 0);
  };

  const handleMoreInfoToggle = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        showMoreInfo={showMoreInfo}
        onMoreInfoToggle={currentPage === 'info' ? handleMoreInfoToggle : undefined}
      />
      
      {/* Project Detail Overlay */}
      {selectedProject && (
        <div className="absolute inset-0 z-40 project-detail-enter">
          <ProjectDetailPage project={selectedProject} onClose={handleCloseProject} />
        </div>
      )}
      
      {/* More Info Overlay */}
      {showMoreInfo && (
        <div className="absolute inset-0 z-30 more-info-enter">
          <MoreInfoPage onClose={() => setShowMoreInfo(false)} />
        </div>
      )}
      
      {/* Pages Container */}
      <div ref={pageContainerRef} className="absolute inset-0">
        {/* Work Page */}
        <div ref={workRef} className="absolute inset-0">
          <WorkPage onProjectClick={handleProjectClick} />
        </div>
        
        {/* Info Page */}
        <div ref={infoRef} className="absolute inset-0">
          <InfoPage onMoreInfoToggle={handleMoreInfoToggle} />
        </div>
        
        {/* Archive Page */}
        <div ref={archiveRef} className="absolute inset-0">
          <ArchivePage />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;