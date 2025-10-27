"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import WaveTransition from "./WaveTransition";

export default function LanguageSwitcher() {
  const { language, setLanguage, setIsTransitioning } = useLanguage();
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLanguageSwitch = () => {
    setIsAnimating(true);
    setIsTransitioning(true);

    // Animate progress from 0 to 1
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.02;
      setTransitionProgress(progress);

      if (progress >= 0.5 && progress < 0.52) {
        // Switch language at midpoint
        setLanguage(language === "en" ? "ar" : "en");
      }

      if (progress >= 1) {
        clearInterval(interval);
        setTimeout(() => {
          setIsAnimating(false);
          setIsTransitioning(false);
          setTransitionProgress(0);
        }, 300);
      }
    }, 20);
  };

  return (
    <>
      <motion.button
        onClick={handleLanguageSwitch}
        disabled={isAnimating}
        className="fixed top-8 right-8 z-50 w-16 h-16 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg flex items-center justify-center text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,140,0.5)]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: "0 8px 32px 0 rgba(0, 255, 140, 0.2)",
        }}
      >
        <span className="text-2xl">{language === "en" ? "ع" : "EN"}</span>
      </motion.button>

      <WaveTransition isActive={isAnimating} progress={transitionProgress} />
    </>
  );
}
