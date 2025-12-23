// components/CustomCursor.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    
    if (!cursorDot || !cursorRing) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'A' || 
                          target.tagName === 'BUTTON' || 
                          target.getAttribute('role') === 'button' ||
                          target.closest('a') !== null ||
                          target.closest('button') !== null;
      
      if (isClickable) {
        cursorDot?.classList.add('hovering');
        cursorRing?.classList.add('hovering');
      } else {
        cursorDot?.classList.remove('hovering');
        cursorRing?.classList.remove('hovering');
      }
    };

    // Smooth follow animation for ring
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      if (cursorRing) {
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
      }
      
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="custom-cursor" />
      <div ref={cursorRingRef} className="custom-cursor-ring" />
    </>
  );
}