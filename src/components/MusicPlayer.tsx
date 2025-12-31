"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt auto-play on mount
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Auto-play prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} loop src="/music/romantic-bgm.mp3" />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-romantic-pink hover:bg-white/20 transition-all shadow-lg shadow-pink-500/20"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
