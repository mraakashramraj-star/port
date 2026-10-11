'use client';

import React, {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type MouseEventHandler
} from 'react';
import './SpecularButton.css';

const PAD = 24;
const TAU = Math.PI * 2;



const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const wrap = (value: number) => value - Math.floor(value);

const loopPosition = (x: number, y: number, halfX: number, halfY: number, r: number) => {
  const innerX = halfX - r;
  const innerY = halfY - r;
  const arc = (Math.PI / 2) * r;
  const quarter = innerX + innerY + arc;
  const ax = Math.abs(x);
  const ay = Math.abs(y);
  const qx = ax - innerX;
  const qy = ay - innerY;
  let s: number;
  if (qx > 0 && qy > 0) s = innerY + Math.atan2(qy, qx) * r;
  else if (qx > qy) s = Math.min(ay, innerY);
  else s = innerY + arc + innerX - Math.min(ax, innerX);
  if (x < 0) s = y >= 0 ? 2 * quarter - s : 2 * quarter + s;
  else if (y < 0) s = 4 * quarter - s;
  return wrap(s / Math.max(4 * quarter, 0.0001));
};

const rimPoint = (position: number, halfX: number, halfY: number, r: number): [number, number] => {
  const innerX = halfX - r;
  const innerY = halfY - r;
  const arc = (Math.PI / 2) * r;
  const quarter = innerX + innerY + arc;
  let s = wrap(position) * 4 * quarter;
  let signX = 1;
  let signY = 1;
  if (s > 3 * quarter) {
    s = 4 * quarter - s;
    signY = -1;
  } else if (s > 2 * quarter) {
    s -= 2 * quarter;
    signX = -1;
    signY = -1;
  } else if (s > quarter) {
    s = 2 * quarter - s;
    signX = -1;
  }
  let x = innerX - (s - innerY - arc);
  let y = halfY;
  if (s <= innerY) {
    x = halfX;
    y = s;
  } else if (s <= innerY + arc) {
    const angle = (s - innerY) / Math.max(r, 0.0001);
    x = innerX + Math.cos(angle) * r;
    y = innerY + Math.sin(angle) * r;
  }
  return [x * signX, y * signY];
};



export interface SpecularButtonProps {
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  idleIntensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  glow?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
  id?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  title?: string;
  'aria-label'?: string;
}

const SpecularButton: React.FC<SpecularButtonProps> = ({
  children = 'Get Started',
  size = 'lg',
  radius = 18,
  tint = '#ffffff',
  tintOpacity = 0.04,
  blur = 0,
  textColor = '#f5f5f5',
  lineColor = '#ffffff',
  baseColor = '#525252',
  intensity = 1,
  idleIntensity = 0.35,
  shineSize = 10,
  shineFade = 34,
  thickness = 1.2,
  glow = 1,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  style,
  href,
  target,
  rel,
  download,
  ...rest
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wakeRef = useRef<(() => void) | null>(null);

  const settings = {
    radius: Math.max(0, radius),
    lineColor: String(lineColor),
    baseColor: String(baseColor),
    intensity: Math.max(0, intensity),
    idleIntensity: clamp(idleIntensity, 0, 1),
    shineSize: Math.max(0, shineSize),
    shineFade: Math.max(0, shineFade),
    thickness: Math.max(0, thickness),
    glow: Math.max(0, glow),
    speed,
    followMouse,
    proximity: Math.max(1, proximity),
    autoAnimate,
    disabled
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const element = containerRef.current;
    const canvas = canvasRef.current;
    if (!element || !canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      canvas.style.display = 'none';
      return undefined;
    }

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const view = { width: 1, height: 1, ratio: 1 };
    const pointer = { x: 0, y: 0, known: false };
    const state = { spot: 0, level: 0, press: 0, ready: false };
    let raf = 0;
    let last = 0;
    let visible = true;

    const cornerRadius = (s: typeof settings) => Math.min(s.radius, view.width / 2, view.height / 2);

    const restSpot = (s: typeof settings) => {
      const r = cornerRadius(s);
      const inset = r * (1 - Math.SQRT1_2);
      return loopPosition(inset - view.width / 2, view.height / 2 - inset, view.width / 2, view.height / 2, r);
    };

    const aim = (s: typeof settings) => {
      if (!s.followMouse || s.disabled || !pointer.known) return null;
      const rect = element.getBoundingClientRect();
      const scale = rect.width / view.width || 1;
      const halfX = view.width / 2;
      const halfY = view.height / 2;
      const x = (pointer.x - rect.left - rect.width / 2) / scale;
      const y = (rect.top + rect.height / 2 - pointer.y) / scale;
      const distance = Math.hypot(Math.max(Math.abs(x) - halfX, 0), Math.max(Math.abs(y) - halfY, 0));
      const t = clamp(1 - distance / s.proximity, 0, 1);
      const near = t * t * (3 - 2 * t);
      const nearest = loopPosition(x, y, halfX, halfY, cornerRadius(s));
      if (distance > 0) return { spot: nearest, near };
      const depth = clamp(Math.min(halfX - Math.abs(x), halfY - Math.abs(y)) / (halfY * 0.8), 0, 1);
      const sway = restSpot(s) - (x / halfX) * 0.06 - (y / halfY) * 0.02;
      const offset = sway - nearest - Math.round(sway - nearest);
      return { spot: wrap(nearest + offset * depth * depth * (3 - 2 * depth)), near };
    };

    const draw = (s: typeof settings) => {
      if (!ctx) return;
      const { width, height } = view;
      const scaleX = canvas.width / (width + PAD * 2);
      const scaleY = canvas.height / (height + PAD * 2);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const r = Math.min(s.radius, width / 2, height / 2) * scaleX;
      const x = PAD * scaleX;
      const y = PAD * scaleY;
      const w = width * scaleX;
      const h = height * scaleY;

      // 1. Subtle base border
      ctx.save();
      ctx.strokeStyle = s.baseColor;
      ctx.lineWidth = Math.max(1, s.thickness * view.ratio);
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(x, y, w, h, r);
      } else {
        ctx.rect(x, y, w, h);
      }
      ctx.stroke();

      // 2. Specular highlight spot tracking state.spot
      const [rimX, rimY] = rimPoint(state.spot, width / 2, height / 2, r / scaleX);
      const spotCenterX = (PAD + width / 2 + rimX) * scaleX;
      const spotCenterY = (PAD + height / 2 - rimY) * scaleY;
      const shineRadius = Math.max(28, (s.shineSize + s.shineFade) * 1.5) * scaleX;

      const grad = ctx.createRadialGradient(spotCenterX, spotCenterY, 0, spotCenterX, spotCenterY, shineRadius);
      const intensity = Math.min(1, s.intensity * (state.level + state.press * 0.8));
      grad.addColorStop(0, s.lineColor);
      grad.addColorStop(1, 'transparent');

      ctx.strokeStyle = grad;
      ctx.lineWidth = Math.max(1.5, (s.thickness + 1.2) * view.ratio);
      ctx.shadowColor = s.lineColor;
      ctx.shadowBlur = s.glow * 10 * view.ratio * intensity;
      ctx.globalAlpha = intensity;
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(x, y, w, h, r);
      } else {
        ctx.rect(x, y, w, h);
      }
      ctx.stroke();
      ctx.restore();
    };

    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      const target = aim(s);
      const spinning = s.autoAnimate && !reduce;
      const steering = !!target && target.near > 0;
      if (!state.ready) {
        state.spot = restSpot(s);
        state.level = s.autoAnimate ? 1 : s.idleIntensity;
        state.ready = true;
      }
      let diff = 0;
      if (spinning && !steering) state.spot = wrap(state.spot + (s.speed / TAU) * dt);
      else {
        diff = (steering ? target.spot : restSpot(s)) - state.spot;
        diff -= Math.round(diff);
        state.spot = wrap(state.spot + diff * (1 - Math.exp(-dt * 8)));
      }
      const level = s.autoAnimate ? 1 : s.idleIntensity + (1 - s.idleIntensity) * (target ? target.near : 0);
      state.level += (level - state.level) * (1 - Math.exp(-dt * 7));
      state.press *= Math.exp(-dt * 5);
      draw(s);
      const settling = Math.abs(diff) > 0.0002 || Math.abs(level - state.level) > 0.001 || state.press > 0.002;
      if (settling || (spinning && !steering)) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    const wake = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };

    const measure = (entry?: ResizeObserverEntry) => {
      const box = entry?.borderBoxSize?.[0];
      view.width = Math.max(1, box ? box.inlineSize : element.offsetWidth);
      view.height = Math.max(1, box ? box.blockSize : element.offsetHeight);
      view.ratio = Math.min(window.devicePixelRatio || 1, 3);
      canvas.width = Math.max(1, Math.round((view.width + PAD * 2) * view.ratio));
      canvas.height = Math.max(1, Math.round((view.height + PAD * 2) * view.ratio));
      if (state.ready) draw(settingsRef.current);
      wake();
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.known = true;
      wake();
    };

    const onPointerDown = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.known = true;
      if (!settingsRef.current.disabled) state.press = 1;
      wake();
    };

    const onPointerEnd = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') return;
      pointer.known = false;
      wake();
    };

    const onPointerLeave = () => {
      pointer.known = false;
      wake();
    };

    const resizeObserver = new ResizeObserver((entries) => measure(entries[entries.length - 1]));
    resizeObserver.observe(element);
    const intersection = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (visible) {
        last = 0;
        wake();
      }
    });
    intersection.observe(element);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerEnd, { passive: true });
    window.addEventListener('pointercancel', onPointerEnd, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    element.addEventListener('pointerdown', onPointerDown as any);
    measure();
    wakeRef.current = wake;

    return () => {
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerEnd);
      window.removeEventListener('pointercancel', onPointerEnd);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      element.removeEventListener('pointerdown', onPointerDown as any);
    };
  }, []);

  useEffect(() => {
    wakeRef.current?.();
  });

  const customStyle: CSSProperties & Record<string, string | number | undefined> = {
    '--sb-radius': `${radius}px`,
    '--sb-tint': tint,
    '--sb-tint-opacity': tintOpacity,
    '--sb-blur': `${blur}px`,
    '--sb-text-color': textColor,
    '--sb-line-color': lineColor,
    ...style
  };

  const buttonClass = `specular-button specular-button--${size}${className ? ` ${className}` : ''}`;

  if (href) {
    return (
      <a
        ref={containerRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        onClick={onClick as any}
        className={buttonClass}
        style={customStyle}
        {...(rest as any)}
      >
        <canvas ref={canvasRef} className="specular-button__light" aria-hidden="true" />
        <span className="specular-button__label">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={containerRef as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClass}
      style={customStyle}
      {...(rest as any)}
    >
      <canvas ref={canvasRef} className="specular-button__light" aria-hidden="true" />
      <span className="specular-button__label">{children}</span>
    </button>
  );
};

export default SpecularButton;
