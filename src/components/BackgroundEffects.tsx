"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Generate random positions for stars/sparkles
    const sparkles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 5,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

            {/* Sparkles */}
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-0"
                    style={{
                        left: sparkle.left,
                        top: sparkle.top,
                        boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.5)",
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        repeat: Infinity,
                        delay: sparkle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Floating Hearts (Subtle) */}
            {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                    key={`heart-${i}`}
                    className="absolute text-pink-300/20 text-4xl"
                    initial={{
                        y: "110vh",
                        x: Math.random() * 100 + "vw",
                        opacity: 0,
                        rotate: 0,
                    }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 0.5, 0],
                        rotate: [0, 45, -45, 0],
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 20,
                        ease: "linear",
                    }}
                >
                    ♥
                </motion.div>
            ))}
        </div>
    );
}
