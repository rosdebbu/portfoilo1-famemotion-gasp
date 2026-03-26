"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const blocks = sectionRef.current?.querySelectorAll(".about-block");
      if (blocks) {
        gsap.from(blocks, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-20"
        >
          Helping brands to
          <br />
          stand out in the
          <br />
          digital era.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
          <div className="about-block">
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </p>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              I love creating beautiful, engaging websites and applications that
              showcase brands at their finest. No nonsense, always on the cutting
              edge.
            </p>
          </div>

          <div className="about-block">
            <div className="w-full aspect-square bg-bg-card rounded-lg flex items-center justify-center border border-border">
              <svg
                className="w-32 h-32 text-text-dim/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="about-block mb-24">
          <h2 className="text-xs text-text-dim tracking-[0.3em] uppercase mb-8">
            I can help you with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="border-t border-border pt-6">
              <span className="text-xs text-text-dim mb-3 block">01</span>
              <h3 className="text-xl font-medium mb-3">Design</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                With a solid track record in designing websites, I deliver
                strong and user-friendly digital designs. Clean aesthetics,
                attention to detail.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <span className="text-xs text-text-dim mb-3 block">02</span>
              <h3 className="text-xl font-medium mb-3">Development</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                I build scalable websites from scratch that fit seamlessly with
                design. My focus is on micro-animations, transitions, and
                interaction.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <span className="text-xs text-text-dim mb-3 block">03</span>
              <h3 className="text-xl font-medium mb-3">The full package</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                A complete website from concept to launch — I handle both design
                and development for a unified, premium experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
