"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon, Video } from "lucide-react";

// Placeholder data for Photos
const photos = [
    { id: 1, src: "/memories/pic.png", caption: "Memory 1", type: "image" },
    { id: 2, src: "/memories/pic1.png", caption: "Memory 2", type: "image" },
    { id: 3, src: "/memories/pic2.png", caption: "Memory 3", type: "image" },
    { id: 4, src: "/memories/pic3.png", caption: "Memory 4", type: "image" },

    { id: 5, src: "/memories/pic4.png", caption: "Memory 5", type: "image" },
    { id: 6, src: "/memories/pic15.png", caption: "Memory 6", type: "image" },
    { id: 7, src: "/memories/pic6.png", caption: "Memory 7", type: "image" },
    { id: 8, src: "/memories/pic7.png", caption: "Memory 8", type: "image" },
];

// Placeholder data for Videos
const videos = Array.from({ length: 3 }).map((_, i) => ({
    id: i + 1,
    src: `/memories/video${i + 1}.mp4`, // Assumes files are named video1.mp4, video2.mp4, etc.
    caption: `Video Memory ${i + 1}`,
    type: "video"
}));

export default function MemoriesGallery() {
    const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentData = activeTab === "photos" ? photos : videos;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % currentData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + currentData.length) % currentData.length);
    };

    const handleTabChange = (tab: "photos" | "videos") => {
        setActiveTab(tab);
        setCurrentIndex(0);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
            <h2 className="text-4xl font-bold text-romantic-pink mb-8 animate-glow">
                Beautiful Memories
            </h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 bg-white/10 p-1 rounded-full backdrop-blur-sm border border-white/20">
                <button
                    onClick={() => handleTabChange("photos")}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${activeTab === "photos"
                        ? "bg-romantic-pink text-romantic-dark font-bold shadow-[0_0_15px_rgba(255,209,220,0.5)]"
                        : "text-white/70 hover:bg-white/10"
                        }`}
                >
                    <ImageIcon size={18} />
                    Photos
                </button>
                <button
                    onClick={() => handleTabChange("videos")}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${activeTab === "videos"
                        ? "bg-romantic-pink text-romantic-dark font-bold shadow-[0_0_15px_rgba(255,209,220,0.5)]"
                        : "text-white/70 hover:bg-white/10"
                        }`}
                >
                    <Video size={18} />
                    Videos
                </button>
            </div>

            <div className="relative w-full max-w-4xl aspect-video bg-black/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,209,220,0.3)] border border-white/10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeTab}-${currentIndex}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        {activeTab === "photos" ? (
                            <div
                                className="w-full h-full bg-contain bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${currentData[currentIndex].src})` }}
                            />
                        ) : (
                            <video
                                src={currentData[currentIndex].src}
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                                muted
                                loop
                            />
                        )}

                        {/* Caption Overlay */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-center pointer-events-none">
                            <p className="text-2xl text-white font-serif italic">
                                "{currentData[currentIndex].caption}"
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all text-white z-10"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all text-white z-10"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Indicators */}
            <div className="mt-8 flex gap-2">
                {currentData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${currentIndex === idx
                            ? "bg-romantic-gold shadow-[0_0_10px_#ffd700]"
                            : "bg-white/20"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
