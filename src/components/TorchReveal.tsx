
"use client";

import React, { useRef, useEffect, useState } from 'react';

export const TorchReveal = ({ text }: { text: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw blurry base text
      ctx.fillStyle = 'white';
      ctx.font = '900 8vw Poppins';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.filter = 'blur(20px)';
      ctx.globalAlpha = 0.3;
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      // Draw mask for "window"
      ctx.save();
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, 150, 0, Math.PI * 2);
      ctx.clip();

      // Draw clear text inside mask
      ctx.filter = 'none';
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#e60000'; // Primary neon red
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      ctx.restore();

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos, text]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-20" />;
};
