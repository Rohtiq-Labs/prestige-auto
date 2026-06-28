"use client";

import { useEffect, useRef, useState } from "react";

export const CustomCursor = (): React.ReactNode => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setVisible(true);

    const handleMove = (e: MouseEvent): void => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleEnter = (): void => setExpanded(true);
    const handleLeave = (): void => setExpanded(false);

    document.addEventListener("mousemove", handleMove);

    const interactiveSelectors =
      "a, button, .service-panel, .masonry-item, .tech-tab, .filter-btn, .testimonial-dot, .slide-btn";

    const attachListeners = (): void => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let rafId: number;
    const animateRing = (): void => {
      setRingPos((prev) => ({
        x: prev.x + (posRef.current.x - prev.x) * 0.12,
        y: prev.y + (posRef.current.y - prev.y) * 0.12,
      }));
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      observer.disconnect();
      cancelAnimationFrame(rafId);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className={`pointer-events-none fixed z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
          expanded
            ? "h-[60px] w-[60px] border border-brand-red bg-transparent"
            : "h-2 w-2 bg-brand-silver"
        }`}
        style={{ left: pos.x, top: pos.y }}
        aria-hidden="true"
      />
      {!expanded && (
        <div
          className="pointer-events-none fixed z-[9999] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-silver/30 transition-transform duration-150"
          style={{ left: ringPos.x, top: ringPos.y }}
          aria-hidden="true"
        />
      )}
    </>
  );
};
