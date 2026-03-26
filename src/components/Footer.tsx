"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      setTime(formatted + " GMT+5:30");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border px-8 md:px-16 lg:px-24 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-8">
          <div>
            <p className="text-[10px] text-text-dim tracking-widest uppercase mb-1">
              VERSION
            </p>
            <p className="text-sm text-text-muted">2026 © Edition</p>
          </div>
          <div>
            <p className="text-[10px] text-text-dim tracking-widest uppercase mb-1">
              LOCAL TIME
            </p>
            <p className="text-sm text-text-muted font-medium">{time}</p>
          </div>
        </div>

        {/* Right - Socials */}
        <div>
          <p className="text-[10px] text-text-dim tracking-widest uppercase mb-1">
            SOCIALS
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link text-sm cursor-none"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link text-sm cursor-none"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link text-sm cursor-none"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link text-sm cursor-none"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
