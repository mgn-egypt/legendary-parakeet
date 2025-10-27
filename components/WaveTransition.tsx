"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WaveTransition({
  isActive,
  progress,
}: {
  isActive: boolean;
  progress: number;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
        >
          {/* Glass Wave Effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ y: "100%" }}
            animate={{ y: progress > 0.5 ? "-100%" : `${100 - progress * 200}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            <div className="relative w-full h-full">
              {/* Wave layers */}
              <div
                className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-t from-primary-light/40 to-primary-dark/40"
                style={{
                  clipPath: "polygon(0 20%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
              <div
                className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-t from-primary-light/30 to-primary-dark/30"
                style={{
                  clipPath: "polygon(0 30%, 100% 10%, 100% 100%, 0% 100%)",
                }}
              />
              <div
                className="absolute inset-0 backdrop-blur-xl bg-gradient-to-t from-primary-light/20 to-primary-dark/20"
                style={{
                  clipPath: "polygon(0 40%, 100% 20%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Flying Birds */}
          {progress > 0.3 && progress < 0.7 && (
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: `${-20 + i * 30}%`,
                    y: "120%",
                  }}
                  animate={{
                    x: `${-10 + i * 25}%`,
                    y: "50%",
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {/* Bird representation */}
                  <div className="relative w-16 h-16">
                    {/* Bird body */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0"
                    >
                      <div className="w-8 h-8 mx-auto bg-primary-light/80 rounded-full shadow-lg shadow-primary-light/50" />
                      {/* Wings */}
                      <motion.div
                        animate={{
                          scaleX: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute top-3 left-0 right-0 flex justify-center gap-4"
                      >
                        <div className="w-6 h-2 bg-primary-dark/60 rounded-full transform -rotate-45" />
                        <div className="w-6 h-2 bg-primary-dark/60 rounded-full transform rotate-45" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Glow overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary-light/10 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
