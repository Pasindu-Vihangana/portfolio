"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/useReducedMotion";

const TOTAL_FRAMES = 144;
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const FRAME_PATH = `${BASE_PATH}/images/frames/frame_`;
const FALLBACK_IMAGE = `${BASE_PATH}/images/frames/frame_0001.jpg`;

export function ParallaxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const scrollRef = useRef({
    targetFrame: 0,
    currentFrame: 0,
    imagesLoaded: 0,
  });
  const [loaded, setLoaded] = useState(false);
  const reduced = useReducedMotion();

  // Preload images on mount
  useEffect(() => {
    if (reduced) return;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = String(i).padStart(4, "0");
      img.src = `${FRAME_PATH}${num}.jpg`;
      img.onload = () => {
        loadedCount++;
        scrollRef.current.imagesLoaded = loadedCount;
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback load increment if a frame fails to load to prevent blocking
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, [reduced]);

  // Canvas drawing and interpolation loop
  useEffect(() => {
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw image to match object-fit: cover behavior
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let drawX = 0;
      let drawY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvasHeight * imgRatio;
        drawX = (canvasWidth - drawWidth) / 2;
      } else {
        drawHeight = canvasWidth / imgRatio;
        drawY = (canvasHeight - drawHeight) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.floor(scrollRef.current.currentFrame));
    };

    // Loop callback
    const tick = () => {
      const scrollData = scrollRef.current;

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;

      if (maxScroll > 0) {
        const p = Math.min(1, Math.max(0, scrollY / maxScroll));
        scrollData.targetFrame = p * (TOTAL_FRAMES - 1);
      }

      // Smooth easing (lerp) towards target frame index
      const ease = 0.08;
      const diff = scrollData.targetFrame - scrollData.currentFrame;

      if (Math.abs(diff) > 0.01) {
        scrollData.currentFrame += diff * ease;
        scrollData.currentFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, scrollData.currentFrame));
        drawFrame(Math.floor(scrollData.currentFrame));
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    tick();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [loaded, reduced]);

  // Accessibility / performance reduced motion fallback
  if (reduced) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-background">
        <div
          className="h-full w-full bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('${FALLBACK_IMAGE}')`,
          }}
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-background">
      <canvas
        ref={canvasRef}
        className="h-full w-full transition-opacity duration-500"
        style={{
          opacity: loaded ? 0.7 : 0,
        }}
      />
      {!loaded && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 transition-opacity duration-500"
          style={{
            backgroundImage: `url('${FALLBACK_IMAGE}')`,
          }}
        />
      )}
    </div>
  );
}
