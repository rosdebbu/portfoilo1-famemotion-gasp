"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { expand, stairsOpacity } from "./anim";

interface StairsTransitionProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anim = (variants: any, custom: number | null = null) => {
  return {
    initial: "initial" as const,
    animate: "enter" as const,
    exit: "exit" as const,
    custom,
    variants: variants as Variants,
  };
};

export default function StairsTransition({
  children,
  backgroundColor = "#1a1a1a",
}: StairsTransitionProps) {
  const nbOfColumns = 5;

  return (
    <div className="stairs-page" style={{ backgroundColor }}>
      <motion.div
        {...anim(stairsOpacity)}
        className="stairs-transition-background"
      />
      <div className="stairs-transition-container">
        {[...Array(nbOfColumns)].map((_, i) => (
          <motion.div key={i} {...anim(expand, nbOfColumns - i)} />
        ))}
      </div>
      {children}
    </div>
  );
}
