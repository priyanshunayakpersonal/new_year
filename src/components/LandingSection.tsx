"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Heart {
    id: number;
    left: number;
    size: number;
    duration: number;
}

export default function LandingSection() {
    const [hearts, setHearts] = useState<Heart[]>([]);

    const [sparkles, setSparkles] = useState<{ id: number; top: number; left: number; opacity: number; duration: number; xOffset: number }[]>([]);

    useEffect(() => {
        const newSparkles = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            opacity: Math.random(),
            duration: Math.random() * 6 + 4,
            xOffset: Math.random() * 100 - 50,
        }));
        setSparkles(newSparkles);
    }, []);

    // ... (keep hearts effect)

    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

            {/* Soft dreamy gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b001a] via-[#2b0040] to-[#ffb6c1]/10" />

            {/* Magical glow ring */}
            <div className="absolute w-[900px] h-[900px] bg-pink-400/10 blur-[120px] rounded-full animate-pulse" />

            {/* Floating Hearts */}
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -500 }}
                    transition={{ duration: heart.duration, ease: "easeOut" }}
                    className="absolute text-pink-400/80"
                    style={{
                        left: `${heart.left}vw`,
                        fontSize: heart.size,
                    }}
                >
                    ❤️
                </motion.div>
            ))}

            {/* Floating Sparkles */}
            <div className="absolute w-full h-full pointer-events-none">
                {sparkles.map((sparkle) => (
                    <motion.span
                        key={sparkle.id}
                        className="absolute w-2 h-2 bg-pink-200 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: sparkle.opacity,
                            y: [-10, -200],
                            x: [0, sparkle.xOffset],
                        }}
                        transition={{
                            duration: sparkle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            top: `${sparkle.top}%`,
                            left: `${sparkle.left}%`,
                        }}
                    ></motion.span>
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="z-10 max-w-4xl"
            >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight 
                bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 
                bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,182,193,0.8)]
                animate-pulse"
                >
                    Happy New Year <br /> My Love ❤️
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.2 }}
                    className="mt-6 text-xl md:text-2xl text-pink-200 italic tracking-wide"
                >
                    Even distance bows down in front of our love ✨
                    <br />
                    Lo ek saal or nikal gya ladhe jhagadte 🤗🥰
                </motion.p>

                {/* Cute Subline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="mt-3 text-sm md:text-lg text-pink-100/80"
                >
                    You are my forever home, no matter how far we are 💖
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 3, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 text-white/60"
            >
                <p className="text-sm mb-2 tracking-widest uppercase">Scroll for our memories</p>
                <div className="w-7 h-12 border-2 border-white/40 rounded-full mx-auto flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 18, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-3 bg-white/70 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
