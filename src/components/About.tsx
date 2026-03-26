"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left tagline reveal
      const leftWords = leftRef.current?.querySelectorAll(".about-word");
      if (leftWords) {
        gsap.from(leftWords, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Right text reveal
      gsap.from(rightRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tagline =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 md:py-48 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left - Tagline */}
        <div ref={leftRef}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight">
            {tagline.split(" ").map((word, i) => (
              <span key={i} className="about-word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Right - Description */}
        <div ref={rightRef} className="flex flex-col justify-start pt-4">
          <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-md">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
        </div>
      </div>
    </section>
  );
}
