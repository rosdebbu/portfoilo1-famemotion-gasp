"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { text, curve, translate } from "./anim";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anim = (variants: any) => {
  return {
    variants: variants as Variants,
    initial: "initial" as const,
    animate: "enter" as const,
    exit: "exit" as const,
  };
};

interface CurveTransitionProps {
  children: React.ReactNode;
  routeName: string;
  backgroundColor?: string;
}

export default function CurveTransition({
  children,
  routeName,
  backgroundColor = "#1a1a1a",
}: CurveTransitionProps) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="curve-page" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width === 0 ? 1 : 0 }}
        className="curve-background"
      />
      <motion.p className="curve-route" {...anim(text)}>
        {routeName}
      </motion.p>
      {dimensions.width > 0 && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}
      {children}
    </div>
  );
}

const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg className="curve-svg" {...anim(translate)}>
      <motion.path
        fill="#1a1a1a"
        {...anim(curve(initialPath, targetPath))}
      />
    </motion.svg>
  );
};
