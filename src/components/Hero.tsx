"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });

    // Photo reveal
    tl.from(photoRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Title marquee reveal
    tl.from(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Subtitle
    tl.from(
      subtitleRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Badge
    tl.from(
      badgeRef.current,
      {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Arrow
    tl.from(
      arrowRef.current,
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.3"
    );

    // Parallax on scroll
    const handleScroll = () => {
      if (!heroRef.current || !photoRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      if (scrollY < heroHeight) {
        gsap.set(photoRef.current, {
          y: scrollY * 0.3,
        });
        gsap.set(titleRef.current, {
          y: scrollY * 0.15,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Photo */}
      <div
        ref={photoRef}
        className="relative w-[280px] h-[340px] md:w-[350px] md:h-[430px] rounded-md overflow-hidden mb-4 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/60 z-10" />
        <div className="w-full h-full bg-gradient-to-br from-text-dim/30 to-bg-card flex items-center justify-center">
          <svg
            className="w-32 h-32 text-text-dim/50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>

      {/* Subtitle */}
      <div
        ref={subtitleRef}
        className="relative z-20 text-right w-full max-w-4xl px-8 mt-2"
      >
        <p className="text-lg md:text-xl font-light text-text-muted tracking-wide">
          Freelance
        </p>
        <p className="text-lg md:text-xl font-light text-text-muted tracking-wide">
          Designer & Developer
        </p>
      </div>

      {/* Marquee Name */}
      <div
        ref={titleRef}
        className="w-full overflow-hidden mt-6"
      >
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[8vw] md:text-[8vw] font-bold tracking-tighter whitespace-nowrap mx-4"
            >
              Debjit Das — Developer
            </span>
          ))}
        </div>
      </div>

      {/* Location Badge */}
      <div
        ref={badgeRef}
        className="absolute bottom-24 left-8 md:left-12 flex items-center gap-3 bg-bg-card/80 backdrop-blur-sm border border-border rounded-full px-5 py-3 z-20"
      >
        <span className="text-xs text-text-muted leading-tight">
          Located
          <br />
          in India
        </span>
        <div className="w-10 h-10 rounded-full border border-text-dim flex items-center justify-center">
          <svg
            className="w-5 h-5 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div
        ref={arrowRef}
        className="absolute bottom-24 right-8 md:right-12 text-text-dim z-20"
      >
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
