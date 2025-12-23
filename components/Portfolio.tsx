// components/Portfolio.tsx
'use client';
import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './Navbar';
import { WorkPage } from './WorkPage';
import { InfoPage } from './InfoPage';
import { MoreInfoPage } from './MoreInfoPage';
import { ArchivePage } from './ArchivePage';
import { ProjectDetailPage } from './ProjectDetailPage';

const Portfolio: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('work');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <style jsx global>{`
        .page-enter {
          --slide-from: ${direction === 'right' ? '100%' : '-100%'};
        }
        .page-exit {
          --slide-to: ${direction === 'right' ? '-100%' : '100%'};
        }
      `}</style>

      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        showMoreInfo={showMoreInfo}
        onMoreInfoToggle={currentPage === 'info' ? handleMoreInfoToggle : undefined}
      />
      
      {/* Project Detail Overlay */}
      {selectedProject && (
        <div className="project-detail-enter">
          <ProjectDetailPage project={selectedProject} onClose={handleCloseProject} />
        </div>
      )}
      
      {/* More Info Overlay */}
      {showMoreInfo && (
        <div className="absolute inset-0 z-30 more-info-enter">
          <MoreInfoPage onClose={() => setShowMoreInfo(false)} />
        </div>
      )}
      
      <div className={isTransitioning ? 'page-exit' : 'page-enter'}>
        {currentPage === 'work' && <WorkPage onProjectClick={handleProjectClick} />}
        {currentPage === 'info' && <InfoPage onMoreInfoToggle={handleMoreInfoToggle} />}
        {currentPage === 'archive' && <ArchivePage />}
      </div>
    </div>
  );
};

export default Portfolio;