"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  location: string;
  services: string;
  year: string;
  color: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Portfolio V2",
    location: "India",
    services: "Design & Development",
    year: "2026",
    color: "#455CE9",
    image: "https://picsum.photos/seed/portv2/420/280",
  },
  {
    name: "E-Commerce App",
    location: "Remote",
    services: "Development",
    year: "2025",
    color: "#2D8B61",
    image: "https://picsum.photos/seed/ecom/420/280",
  },
  {
    name: "Brand Identity",
    location: "India",
    services: "Design",
    year: "2025",
    color: "#B85C38",
    image: "https://picsum.photos/seed/brand/420/280",
  },
  {
    name: "Dashboard UI",
    location: "Remote",
    services: "Design & Development",
    year: "2024",
    color: "#8B5CF6",
    image: "https://picsum.photos/seed/dash/420/280",
  },
  {
    name: "Mobile App",
    location: "India",
    services: "Development",
    year: "2024",
    color: "#E85D75",
    image: "https://picsum.photos/seed/mobile/420/280",
  },
  {
    name: "Landing Page",
    location: "Remote",
    services: "Design & Development",
    year: "2023",
    color: "#0EA5E9",
    image: "https://picsum.photos/seed/landing/420/280",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(headerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Table header
      const tableHeader = tableRef.current?.querySelector(".table-header");
      if (tableHeader) {
        gsap.from(tableHeader, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Project rows stagger
      const rows = tableRef.current?.querySelectorAll(".project-row");
      if (rows) {
        gsap.from(rows, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (previewRef.current && activeProject !== null) {
        gsap.to(previewRef.current, {
          x: e.clientX - 210,
          y: e.clientY - 140,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (viewRef.current && activeProject !== null) {
        gsap.to(viewRef.current, {
          x: e.clientX - 45,
          y: e.clientY - 45,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [activeProject]);

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-40 px-8 md:px-16 lg:px-24">
      {/* Section Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto mb-20">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight">
          Creating next level
          <br />
          digital products
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-text text-bg rounded-full text-sm font-medium cursor-none">
            All
          </button>
          <button className="px-6 py-2 text-text-muted text-sm cursor-none hover:text-white transition-colors">
            Design <sup className="text-xs">7</sup>
          </button>
          <button className="px-6 py-2 text-text-muted text-sm cursor-none hover:text-white transition-colors">
            Development <sup className="text-xs">11</sup>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center cursor-none hover:border-text-muted transition-colors">
            <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center cursor-none hover:border-text-muted transition-colors">
            <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h4v4H4V5zm8 0h4v4h-4V5zm-8 8h4v4H4v-4zm8 0h4v4h-4v-4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div ref={tableRef} className="max-w-7xl mx-auto">
        {/* Table Header */}
        <div className="table-header grid grid-cols-4 py-4 border-b border-border text-xs text-text-dim tracking-widest uppercase">
          <span>Client</span>
          <span className="text-center">Location</span>
          <span className="text-center">Services</span>
          <span className="text-right">Year</span>
        </div>

        {/* Project Rows */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-row grid grid-cols-4 items-center py-6 md:py-8 border-b border-border/50 cursor-none group transition-all duration-300 hover:opacity-100"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
            style={{
              opacity: activeProject !== null && activeProject !== index ? 0.3 : 1,
            }}
          >
            <span className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight transition-transform duration-300 group-hover:translate-x-3">
              {project.name}
            </span>
            <span className="text-sm text-text-muted text-center">
              {project.location}
            </span>
            <span className="text-sm text-text-muted text-center">
              {project.services}
            </span>
            <span className="text-sm text-text-muted text-right font-medium">
              {project.year}
            </span>
          </div>
        ))}
      </div>

      {/* Floating Preview Image */}
      <div
        ref={previewRef}
        className={`project-image-preview ${activeProject !== null ? "visible" : ""}`}
      >
        {activeProject !== null && (
          <div className="w-full h-full relative border border-border/20 rounded-[8px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={projects[activeProject].image} 
              alt={projects[activeProject].name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* View Circle */}
      <div
        ref={viewRef}
        className={`view-circle ${activeProject !== null ? "visible" : ""}`}
      >
        View
      </div>
    </section>
  );
}
