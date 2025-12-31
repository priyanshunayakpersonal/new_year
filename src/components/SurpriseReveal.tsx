"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles } from "lucide-react";

export default function SurpriseReveal() {
    const [revealed, setRevealed] = useState(false);

    const triggerSurprise = () => {
        setRevealed(true);

        // Fireworks Effect
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center">
            <AnimatePresence mode="wait">
                {!revealed ? (
                    <motion.button
                        key="button"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={triggerSurprise}
                        className="group relative px-8 py-4 bg-gradient-to-r from-romantic-pink to-romantic-gold rounded-full text-white font-bold text-xl shadow-[0_0_20px_rgba(255,105,180,0.5)] hover:shadow-[0_0_40px_rgba(255,105,180,0.8)] transition-all"
                    >
                        <span className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 animate-spin-slow" />
                            Click for a Surprise 💖
                        </span>
                        <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
                    </motion.button>
                ) : (
                    <motion.div
                        key="message"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="max-w-3xl bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-romantic-gold/50 shadow-[0_0_50px_rgba(255,215,0,0.3)]"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-romantic-pink via-white to-romantic-gold mb-8 animate-glow">
                            Happy New Year My Queen ❤️
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-serif">
                            "No matter how far we are today, my heart will always be with you.
                            This year is ours. I love you endlessly."
                        </p>
                        <div className="mt-8 text-6xl animate-bounce">
                            🎆
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
