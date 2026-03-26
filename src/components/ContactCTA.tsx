"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(ctaRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Magnetic effect
  useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        <div ref={headingRef} className="flex items-center gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-bg-card border border-border overflow-hidden flex items-center justify-center flex-shrink-0">
            <svg className="w-10 h-10 text-text-dim/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Let&apos;s work
            <br />
            together
          </h2>
        </div>

        <div ref={ctaRef} className="magnetic-btn">
          <Link href="/contact" className="cta-circle cursor-none">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
