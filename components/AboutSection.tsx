"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-6xl font-bold text-center mb-12 ${
            language === "ar" ? "font-cairo" : "font-orbitron"
          }`}
          style={{
            textShadow: "0 0 30px rgba(0, 255, 140, 0.6)",
            color: "#00FF8C",
          }}
        >
          {t.about.title}
        </motion.h2>

        {/* Glass Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-light/50 via-transparent to-primary-dark/50 blur-xl" />
          
          {/* Main Content */}
          <div className="relative backdrop-blur-2xl bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            {/* Light Reflection Effect */}
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                }}
                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
            </div>

            {/* Text Content */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`text-lg md:text-xl text-white/90 leading-relaxed ${
                language === "ar" ? "font-cairo text-right" : "font-orbitron text-left"
              }`}
              style={{
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              {t.about.description}
            </motion.p>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-light/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-dark/20 rounded-full blur-2xl" />
          </div>

          {/* Glow Effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(0,255,140,0.3)] pointer-events-none"
          />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-light/40 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
