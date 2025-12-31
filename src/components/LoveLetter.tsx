"use client";

import { motion } from "framer-motion";

export default function LoveLetter() {
    const letterText = `My Dearest Love,

Jaise jaise saal khatam ho raha hai, waise waise mujhe yeh mehsoos hota hai ki main kitna lucky hoon ki tum meri zindagi ka hissa ho.
Chahe hamare beech abhi kitni bhi doori ho, mera dil hamesha tumhare dil ke sabse kareeb rehta hai.

Tum meri khushi ho, mera sukoon ho, aur meri sabse khoobsurat journey ho.
Tumhaare saath guzara har din mere liye ek gift hai,
aur mujhe intezaar hai un sab khoobsurat lamhon ka
jo humein is naye saal mein milne wale hain. 💖

I love you more than words can say.

Forever yours,
Your Husband`;

    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4">
            <div className="relative max-w-2xl w-full bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-romantic-gold/30 shadow-[0_0_50px_rgba(255,215,0,0.1)]">
                {/* Decorative Corner Ribbons */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-romantic-gold rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-romantic-gold rounded-br-lg" />

                <h2 className="text-3xl md:text-4xl font-serif text-romantic-gold mb-8 text-center">
                    A Letter For You
                </h2>

                <div className="font-[family-name:var(--font-dancing-script)] text-2xl md:text-3xl text-romantic-pink leading-relaxed whitespace-pre-line">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {Array.from(letterText).map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.05,
                                    delay: index * 0.03, // Typing effect delay
                                    ease: "linear",
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
