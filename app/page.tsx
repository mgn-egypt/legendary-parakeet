"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Hero from "@/components/Hero";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const dynamic = 'force-dynamic';

export default function Home() {
  const { language } = useLanguage();
  
  // Initialize smooth scrolling
  useSmoothScroll();

  // Update document direction and font based on language
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    html.setAttribute("lang", language);
    
    // Update body font
    document.body.style.fontFamily = language === "ar" 
      ? "'Cairo', sans-serif" 
      : "'Orbitron', sans-serif";
  }, [language]);

  return (
    <main className="relative min-h-screen transition-language">
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <MusicSection />
        <AboutSection />
        <Footer />
      </div>

      {/* Background Gradient Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/80 to-primary-light/40" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-float"
            style={{
              background: "radial-gradient(circle, rgba(0,255,140,0.4) 0%, transparent 70%)",
              top: "10%",
              left: "10%",
              animationDelay: "0s",
            }}
          />
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float"
            style={{
              background: "radial-gradient(circle, rgba(0,255,140,0.3) 0%, transparent 70%)",
              bottom: "10%",
              right: "10%",
              animationDelay: "2s",
              animationDuration: "4s",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-25 blur-3xl animate-float"
            style={{
              background: "radial-gradient(circle, rgba(11,61,46,0.5) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animationDelay: "1s",
              animationDuration: "5s",
            }}
          />
        </div>
      </div>
    </main>
  );
}
