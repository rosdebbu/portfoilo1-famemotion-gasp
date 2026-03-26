"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import CurveTransition from "./CurveTransition";

const routes: Record<string, string> = {
  "/": "Home",
  "/work": "Work",
  "/about": "About",
  "/contact": "Contact",
};

interface TransitionLayoutProps {
  children: ReactNode;
}

export default function TransitionLayout({ children }: TransitionLayoutProps) {
  const pathname = usePathname();
  const routeName = routes[pathname] || "Page";

  return (
    <AnimatePresence mode="wait">
      <CurveTransition key={pathname} routeName={routeName}>
        {children}
      </CurveTransition>
    </AnimatePresence>
  );
}
