"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Youtube, Instagram, Music2 } from "lucide-react";

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@mahmoudgamalnassar",
    color: "#FF0000",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/mahmoudgamalnassar",
    color: "#E4405F",
  },
  {
    name: "TikTok",
    icon: Music2,
    url: "https://tiktok.com/@mahmoudgamalnassar",
    color: "#00F2EA",
  },
  {
    name: "X",
    icon: XIcon,
    url: "https://x.com/mahmoudgnassar",
    color: "#000000",
  },
];

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="relative py-12 px-4 backdrop-blur-xl bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Follow Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3
            className={`text-2xl font-bold mb-6 ${
              language === "ar" ? "font-cairo" : "font-orbitron"
            }`}
            style={{
              textShadow: "0 0 20px rgba(0, 255, 140, 0.5)",
              color: "#00FF8C",
            }}
          >
            {t.footer.follow}
          </h3>

          {/* Social Icons */}
          <div
            className={`flex items-center justify-center gap-6 ${
              language === "ar" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: social.color,
                    filter: "blur(20px)",
                  }}
                />

                {/* Icon Container */}
                <div className="relative w-14 h-14 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                  <social.icon className="w-7 h-7 text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className={`px-3 py-1 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 text-white text-sm whitespace-nowrap ${
                      language === "ar" ? "font-cairo" : "font-orbitron"
                    }`}
                  >
                    {social.name}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p
            className={`text-white/60 text-sm ${
              language === "ar" ? "font-cairo" : "font-orbitron"
            }`}
          >
            {t.footer.rights}
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-light/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-primary-dark/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </footer>
  );
}
