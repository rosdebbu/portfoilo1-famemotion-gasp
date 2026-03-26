"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;
    if (!dot || !circle) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(circle, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      dot.classList.add("hovering");
      circle.classList.add("hovering");
    };

    const handleMouseLeave = () => {
      dot.classList.remove("hovering");
      circle.classList.remove("hovering");
    };

    window.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll(
      "a, button, .magnetic-btn, .cta-circle, .project-row"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={circleRef} className="cursor-circle hidden md:block" />
    </>
  );
}
