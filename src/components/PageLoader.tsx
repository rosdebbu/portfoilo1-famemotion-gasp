"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    // Counter animation
    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString();
        }
      },
    });

    // Text reveal
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".loader-char");
      tl.from(
        chars,
        {
          y: 100,
          opacity: 0,
          duration: 0.6,
          stagger: 0.03,
          ease: "power3.out",
        },
        0
      );
    }

    // Slide up loader
    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power3.inOut",
      delay: 0.3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  const name = "DEBJIT DAS";

  return (
    <div ref={loaderRef} className="page-loader">
      <div className="text-center">
        <div ref={textRef} className="loader-text mb-6">
          {name.split("").map((char, i) => (
            <span key={i} className="loader-char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <div className="text-text-muted text-lg tracking-widest">
          <span ref={counterRef}>0</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
}
