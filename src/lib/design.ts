// Nudge Design System — Shared Constants

export const colors = {
    black: "#050507",
    surface: "#0A0A0F",
    surfaceLight: "#111118",
    cyan: "#00F0FF",
    cyanDim: "rgba(0, 240, 255, 0.15)",
    cyanGlow: "rgba(0, 240, 255, 0.4)",
    steel: "#8A8A8E",
    muted: "#5A5A60",
    white: "#EAEAEA",
    whiteDim: "#9A9A9E",
  } as const;
  
  // Reusable animation configs for Framer Motion
  export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };
  
  export const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    }),
  };
  
  // The bracket frame used around cards (from the Manus build)
  export const bracketStyles = {
    wrapper: "relative p-8",
    topLeft:
      "absolute top-0 left-0 w-5 h-5 border-t border-l border-[#8A8A8E]/30",
    bottomRight:
      "absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#8A8A8E]/30",
  };
  
  // Section label style like "[01] HOW IT WORKS"
  export const sectionLabel = (num: string, text: string) =>
    `[${num}]  ${text.toUpperCase()}`;
  