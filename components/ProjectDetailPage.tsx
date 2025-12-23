// components/ProjectDetailPage.tsx
'use client';
import React, { useState } from 'react';
import { ProjectDetailPageProps } from './types';
import { EncryptedText, HoverEncryptedText } from './EncryptedText';

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white font-mono overflow-y-auto">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 text-sm hover:text-cyan-400 transition z-50"
      >
        <span className="text-cyan-400">[</span>
        <HoverEncryptedText text=" CLOSE " />
        <span className="text-cyan-400">]</span>
      </button>

      <div className="min-h-screen pt-20 pb-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Project Details */}
          <div className="space-y-8">
            {/* Project Title */}
            <div>
              <div className="text-sm text-cyan-400 mb-2">
                <EncryptedText 
                  text={`[PROJECT ${project.id}]`}
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={30}
                />
              </div>
              <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[0.85] font-bold tracking-tighter">
                <EncryptedText 
                  text={project.name}
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-white"
                  revealDelayMs={40}
                />
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-sm text-cyan-400">
                <EncryptedText 
                  text="[DESCRIPTION]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={35}
                />
              </h2>
              <p className="text-base leading-relaxed text-neutral-300">
                {project.description}
              </p>
            </div>

            {/* Year */}
            <div className="space-y-2">
              <h2 className="text-sm text-cyan-400">
                <EncryptedText 
                  text="[YEAR]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={40}
                />
              </h2>
              <p className="text-lg">{project.year}</p>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h2 className="text-sm text-cyan-400">
                <EncryptedText 
                  text="[SERVICES]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={45}
                />
              </h2>
              <div className="space-y-2 text-sm">
                {project.services.map((service, index) => (
                  <div key={index} className="text-neutral-300">
                    → {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="space-y-3">
              <h2 className="text-sm text-cyan-400">
                <EncryptedText 
                  text="[TOOLS USED]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={50}
                />
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs border border-neutral-700 hover:border-cyan-400 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h2 className="text-sm text-cyan-400">
                <EncryptedText 
                  text="[LINKS]"
                  encryptedClassName="text-neutral-700"
                  revealedClassName="text-cyan-400"
                  revealDelayMs={55}
                />
              </h2>
              <div className="space-y-2 text-sm">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-cyan-400 transition"
                  >
                    → LIVE SITE ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-cyan-400 transition"
                  >
                    → GITHUB ↗
                  </a>
                )}
              </div>
            </div>

            {/* Carbon Footprint */}
            {project.carbonFootprint && (
              <div className="space-y-2 pt-4 border-t border-neutral-800">
                <h2 className="text-sm text-cyan-400">
                  <EncryptedText 
                    text="[CARBON FOOTPRINT]"
                    encryptedClassName="text-neutral-700"
                    revealedClassName="text-cyan-400"
                    revealDelayMs={60}
                  />
                </h2>
                <p className="text-sm">
                  <span className="text-green-500">{project.carbonFootprint}</span>
                  <span className="text-neutral-500 ml-2">[B]</span>
                </p>
                <p className="text-xs text-neutral-500">
                  CLEANER THAN 67% OF WEB PAGES
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Media Gallery */}
          <div className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900">
              <img 
                src={project.media[currentMediaIndex].url}
                alt={`${project.name} - Image ${currentMediaIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded">
                <span className="text-cyan-400">[</span>
                {currentMediaIndex + 1}/{project.media.length}
                <span className="text-cyan-400">]</span>
              </div>

              {/* Navigation Arrows */}
              {project.media.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentMediaIndex((prev) => (prev > 0 ? prev - 1 : project.media.length - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 transition p-3 rounded"
                  >
                    ←
                  </button>
                  <button 
                    onClick={() => setCurrentMediaIndex((prev) => (prev < project.media.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 transition p-3 rounded"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {project.media.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {project.media.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`relative aspect-[4/3] overflow-hidden rounded bg-neutral-900 transition ${
                      currentMediaIndex === index ? 'ring-2 ring-cyan-400' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={media.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};