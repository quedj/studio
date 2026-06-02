"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(12, 0.4, 256, 32);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xff3366, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.15 
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for(let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 150;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.3 });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 40;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.002;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.002;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.001;
      torusKnot.rotation.y += 0.002;
      particles.rotation.y += 0.0005;

      torusKnot.position.x += (mouseX - torusKnot.position.x) * 0.05;
      torusKnot.position.y += (-mouseY - torusKnot.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none opacity-40" />;
};