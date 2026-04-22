"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const recentProjects = [
  { name: "TWICE", services: "Design & Development", year: "2026" },
  { name: "Portfolio V2", services: "Development", year: "2025" },
  { name: "Brand Studio", services: "Design", year: "2025" },
];

export default function RecentWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = sectionRef.current?.querySelectorAll(".rw-row");
      if (rows) {
        gsap.from(rows, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-text-dim tracking-[0.3em] uppercase mb-12">
          Recent Work
        </p>

        {recentProjects.map((project, i) => (
          <Link
            href="/work"
            key={i}
            className="rw-row block border-b border-border/40 py-8 group cursor-none"
            data-cursor-text="VIEW"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight transition-transform duration-300 group-hover:translate-x-4">
                {project.name}
              </h3>
              <div className="flex items-center gap-8">
                <span className="hidden md:block text-sm text-text-muted">
                  {project.services}
                </span>
                <span className="text-sm text-text-dim">{project.year}</span>
              </div>
            </div>
          </Link>
        ))}

        <Link
          href="/work"
          className="inline-block mt-8 text-sm text-text-muted hover:text-white transition-colors cursor-none nav-link"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
