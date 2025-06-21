"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';

export const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    positionRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const loop = () => {
      if (cursorRef.current) {
        const x = positionRef.current.x - cursorRef.current.offsetWidth / 2;
        const y = positionRef.current.y - cursorRef.current.offsetHeight / 2;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      animationFrameId.current = requestAnimationFrame(loop);
    };
    animationFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition, { passive: true });
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-effect-hover, [data-border], .hover');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      element.addEventListener('mouseleave', handleMouseLeave, { passive:true });
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [updateCursorPosition, handleMouseEnter, handleMouseLeave]);

  return (
    <div
      ref={cursorRef}
      className={`cursor-effect ${isHovering ? 'hover' : ''}`}
    />
  );
}; 