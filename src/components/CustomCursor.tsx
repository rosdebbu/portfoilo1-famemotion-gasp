"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;
    const textSpan = textRef.current;
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

    const handleMouseEnter = (e: Event) => {
      dot.classList.add("hovering");
      circle.classList.add("hovering");
      
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-cursor-text");
      if (text && textSpan && circle) {
        textSpan.innerText = text;
        circle.classList.add("has-text");
        dot.style.opacity = "0"; // hide dot when text is shown
      }
    };

    const handleMouseLeave = () => {
      dot.classList.remove("hovering");
      circle.classList.remove("hovering");
      circle.classList.remove("has-text");
      dot.style.opacity = "1";
      if (textSpan) {
        textSpan.innerText = "";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll(
      "a, button, .magnetic-btn, .cta-circle, .rw-row, .project-row, [data-cursor-text]"
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
      <div ref={circleRef} className="cursor-circle hidden md:flex items-center justify-center">
        <span ref={textRef} className="cursor-text text-[10px] font-bold text-bg tracking-wider uppercase opacity-0 transition-opacity duration-300"></span>
      </div>
    </>
  );
}
