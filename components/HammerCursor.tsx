'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import './HammerCursor.css';

interface ImpactEffect {
  id: number;
  x: number;
  y: number;
}

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
  duration: string;
}

const SPARK_COLORS = ['#ffffff', '#60a5fa', '#38bdf8', '#93c5fd', '#e0f2fe', '#fef08a'];

export default function HammerCursor() {
  const hammerRef = useRef<HTMLDivElement | null>(null);
  const [isStriking, setIsStriking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<ImpactEffect[]>([]);
  const [sparks, setSparks] = useState<SparkParticle[]>([]);
  const strikeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shakeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Offset so the strike face of the hammerhead aligns with the pointer hotspot
  const OFFSET_X = 12;
  const OFFSET_Y = 20;

  const triggerImpact = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();

    // 1. Ripple shockwave & central flash
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 450);

    // 2. Burst of radial spark particles
    const particleCount = 10;
    const newSparks: SparkParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.6;
      const distance = 28 + Math.random() * 42;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const size = 3 + Math.random() * 3.5;
      const color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
      const duration = `${(0.28 + Math.random() * 0.14).toFixed(2)}s`;

      newSparks.push({
        id: id + i,
        x,
        y,
        dx,
        dy,
        size,
        color,
        duration
      });
    }

    setSparks((prev) => [...prev, ...newSparks]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.some((ns) => ns.id === s.id)));
    }, 450);

    // 3. Subtle screen shake
    const mainContent = document.getElementById('main-content') || document.body;
    if (mainContent) {
      mainContent.classList.remove('hammer-shake-screen');
      // Trigger reflow to restart animation on rapid clicks
      void mainContent.offsetWidth;
      mainContent.classList.add('hammer-shake-screen');

      if (shakeTimeoutRef.current) clearTimeout(shakeTimeoutRef.current);
      shakeTimeoutRef.current = setTimeout(() => {
        mainContent.classList.remove('hammer-shake-screen');
      }, 160);
    }
  }, []);

  useEffect(() => {
    // Only activate cursor replacement on desktop / fine pointer devices
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    document.documentElement.classList.add('hammer-cursor-enabled');

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;

      setIsVisible(true);
      if (hammerRef.current) {
        const hx = e.clientX - OFFSET_X;
        const hy = e.clientY - OFFSET_Y;
        hammerRef.current.style.setProperty('--hx', `${hx}px`);
        hammerRef.current.style.setProperty('--hy', `${hy}px`);
        hammerRef.current.style.transform = `translate3d(${hx}px, ${hy}px, 0)`;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;

      // Retrigger strike animation on every click
      setIsStriking(false);
      requestAnimationFrame(() => {
        setIsStriking(true);
      });

      if (strikeTimeoutRef.current) clearTimeout(strikeTimeoutRef.current);
      strikeTimeoutRef.current = setTimeout(() => {
        setIsStriking(false);
      }, 280);

      // Trigger impact effects at mouse coordinates
      triggerImpact(e.clientX, e.clientY);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    document.addEventListener('mouseenter', handlePointerEnter);

    return () => {
      document.documentElement.classList.remove('hammer-cursor-enabled');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('mouseenter', handlePointerEnter);
      if (strikeTimeoutRef.current) clearTimeout(strikeTimeoutRef.current);
      if (shakeTimeoutRef.current) clearTimeout(shakeTimeoutRef.current);
      const mainContent = document.getElementById('main-content') || document.body;
      if (mainContent) mainContent.classList.remove('hammer-shake-screen');
    };
  }, [triggerImpact]);

  return (
    <div className="hammer-cursor-root" aria-hidden="true">
      {/* Animated Hammer Sprite */}
      <div
        ref={hammerRef}
        className={`hammer-cursor-sprite ${isStriking ? 'strike' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0
        }}
      >
        <img
          src="/hammer.png"
          alt=""
          width={52}
          height={50}
          className="w-full h-full object-contain pointer-events-none select-none"
          draggable={false}
        />
      </div>

      {/* Impact Shockwaves & Flashes */}
      {ripples.map((ripple) => (
        <React.Fragment key={ripple.id}>
          <div
            className="hammer-impact-ripple"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`
            }}
          />
          <div
            className="hammer-impact-flash"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`
            }}
          />
        </React.Fragment>
      ))}

      {/* Radial Spark Particles */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="hammer-spark-particle"
          style={
            {
              left: `${spark.x}px`,
              top: `${spark.y}px`,
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              backgroundColor: spark.color,
              boxShadow: `0 0 6px ${spark.color}`,
              '--dx': `${spark.dx}px`,
              '--dy': `${spark.dy}px`,
              '--duration': spark.duration
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
