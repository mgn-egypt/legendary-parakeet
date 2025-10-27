"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary-light/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary-light/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light to-primary-dark blur-xl opacity-50 animate-glow-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="Mahmoud Gamal Nassar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Name with glow effect */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-5xl md:text-7xl font-bold mb-4 ${
            language === "ar" ? "font-cairo" : "font-orbitron"
          }`}
          style={{
            textShadow: "0 0 40px rgba(0, 255, 140, 0.8), 0 0 80px rgba(0, 255, 140, 0.4)",
            color: "#00FF8C",
          }}
        >
          {t.hero.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-xl md:text-2xl text-white/80 mb-8 ${
            language === "ar" ? "font-cairo" : "font-orbitron"
          }`}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,140,0.6)] ${
            language === "ar" ? "font-cairo" : "font-orbitron"
          }`}
          onClick={() => {
            document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t.hero.cta}
        </motion.button>

        {/* 3D Model Viewer - Microphone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <div className="w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-primary-dark/20 rounded-full blur-2xl animate-float" />
            {/* Placeholder for 3D model - using a stylized representation */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-32 h-48 bg-gradient-to-b from-primary-light/30 to-primary-dark/30 backdrop-blur-xl rounded-full border border-white/20"
                style={{
                  boxShadow: "0 0 40px rgba(0, 255, 140, 0.3)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
