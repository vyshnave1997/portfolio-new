// components/ArchivePage.tsx
'use client';
import React from 'react';
import { EncryptedText } from './EncryptedText';

export const ArchivePage: React.FC = () => {
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