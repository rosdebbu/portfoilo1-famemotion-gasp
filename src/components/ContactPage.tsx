"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      if (formRef.current) {
        const fields = formRef.current.querySelectorAll(".form-field");
        gsap.from(fields, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      gsap.from(detailsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-20">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
          >
            Let&apos;s start a
            <br />
            project together
          </h1>
          <div className="w-20 h-20 rounded-full bg-bg-card border border-border overflow-hidden flex items-center justify-center flex-shrink-0 mt-4">
            <svg
              className="w-10 h-10 text-text-dim/50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {/* Form */}
          <form ref={formRef} className="md:col-span-2 space-y-12">
            <div className="form-field">
              <label className="flex items-baseline gap-4 mb-4">
                <span className="text-xs text-text-dim">01</span>
                <span className="text-sm text-text-muted">
                  What&apos;s your name?
                </span>
              </label>
              <input
                type="text"
                placeholder="John Doe *"
                className="w-full bg-transparent border-b border-border/50 pb-4 text-lg text-white placeholder-text-dim focus:outline-none focus:border-text-muted transition-colors cursor-none"
              />
            </div>

            <div className="form-field">
              <label className="flex items-baseline gap-4 mb-4">
                <span className="text-xs text-text-dim">02</span>
                <span className="text-sm text-text-muted">
                  What&apos;s your email?
                </span>
              </label>
              <input
                type="email"
                placeholder="john@doe.com *"
                className="w-full bg-transparent border-b border-border/50 pb-4 text-lg text-white placeholder-text-dim focus:outline-none focus:border-text-muted transition-colors cursor-none"
              />
            </div>

            <div className="form-field">
              <label className="flex items-baseline gap-4 mb-4">
                <span className="text-xs text-text-dim">03</span>
                <span className="text-sm text-text-muted">
                  What&apos;s the name of your organization?
                </span>
              </label>
              <input
                type="text"
                placeholder="Acme Inc *"
                className="w-full bg-transparent border-b border-border/50 pb-4 text-lg text-white placeholder-text-dim focus:outline-none focus:border-text-muted transition-colors cursor-none"
              />
            </div>

            <div className="form-field">
              <label className="flex items-baseline gap-4 mb-4">
                <span className="text-xs text-text-dim">04</span>
                <span className="text-sm text-text-muted">
                  What services are you looking for?
                </span>
              </label>
              <input
                type="text"
                placeholder="Web Design, Development..."
                className="w-full bg-transparent border-b border-border/50 pb-4 text-lg text-white placeholder-text-dim focus:outline-none focus:border-text-muted transition-colors cursor-none"
              />
            </div>

            <div className="form-field">
              <label className="flex items-baseline gap-4 mb-4">
                <span className="text-xs text-text-dim">05</span>
                <span className="text-sm text-text-muted">Your message</span>
              </label>
              <textarea
                placeholder="Hello Debjit, I'd like to..."
                rows={3}
                className="w-full bg-transparent border-b border-border/50 pb-4 text-lg text-white placeholder-text-dim focus:outline-none focus:border-text-muted transition-colors resize-none cursor-none"
              />
            </div>

            <button
              type="submit"
              className="magnetic-btn cta-circle w-[140px] h-[140px] text-sm cursor-none"
            >
              Send it!
            </button>
          </form>

          {/* Contact Details */}
          <div ref={detailsRef} className="space-y-12">
            <div>
              <h3 className="text-xs text-text-dim tracking-[0.3em] uppercase mb-4">
                Contact Details
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:debjitdas@email.com"
                  className="block text-sm text-text-muted hover:text-white transition-colors cursor-none"
                >
                  debjitdas@email.com
                </a>
                <a
                  href="tel:+919876543210"
                  className="block text-sm text-text-muted hover:text-white transition-colors cursor-none"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs text-text-dim tracking-[0.3em] uppercase mb-4">
                Business Details
              </h3>
              <div className="space-y-1">
                <p className="text-sm text-text-muted">Debjit Das</p>
                <p className="text-sm text-text-muted">
                  Freelance Designer & Developer
                </p>
                <p className="text-sm text-text-muted">India</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs text-text-dim tracking-[0.3em] uppercase mb-4">
                Socials
              </h3>
              <div className="space-y-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-text-muted hover:text-white transition-colors cursor-none"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-text-muted hover:text-white transition-colors cursor-none"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-text-muted hover:text-white transition-colors cursor-none"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-text-muted hover:text-white transition-colors cursor-none"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
