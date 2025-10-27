"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Play } from "lucide-react";

const songCovers = [
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
];

const youtubeLinks = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
];

export default function MusicSection() {
  const { t, language } = useLanguage();

  return (
    <section id="music" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
            language === "ar" ? "font-cairo" : "font-orbitron"
          }`}
          style={{
            textShadow: "0 0 30px rgba(0, 255, 140, 0.6)",
            color: "#00FF8C",
          }}
        >
          {t.music.title}
        </motion.h2>

        {/* Music Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.music.songs.map((song, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,140,0.4)] transition-all duration-500">
                {/* Album Cover */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={songCovers[index]}
                    alt={song.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gloss Animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent animate-gloss-slide"
                      style={{
                        transform: "translateX(-100%) translateY(-100%) rotate(45deg)",
                      }}
                    />
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 rounded-full bg-primary-light/90 flex items-center justify-center cursor-pointer shadow-lg"
                      onClick={() => window.open(youtubeLinks[index], "_blank")}
                    >
                      <Play className="w-8 h-8 text-primary-dark ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                </div>

                {/* Song Info */}
                <div className="p-4">
                  <h3
                    className={`text-lg font-bold text-white mb-1 ${
                      language === "ar" ? "font-cairo text-right" : "font-orbitron"
                    }`}
                  >
                    {song.title}
                  </h3>
                  <p
                    className={`text-sm text-white/60 ${
                      language === "ar" ? "font-cairo text-right" : "font-orbitron"
                    }`}
                  >
                    {song.artist}
                  </p>

                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(youtubeLinks[index], "_blank")}
                    className={`mt-4 w-full py-2 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-primary-light/20 hover:border-primary-light/40 transition-all duration-300 ${
                      language === "ar" ? "font-cairo" : "font-orbitron"
                    }`}
                  >
                    {t.music.play}
                  </motion.button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(0,255,140,0.3)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
