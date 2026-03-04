"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

/** Hero metadata shown as status pills below the headline. */
const HERO_META = [
    { label: "Completed 2025", color: "bg-emerald-500" },
    { label: "AV Integration", color: "bg-neutral-500" },
    { label: "Broadcast Infrastructure", color: "bg-neutral-500" },
] as const;

/**
 * Full-screen hero section with auto-playing background video.
 * This is the first thing a client sees - sets the emotional tone.
 */
export function CaseStudyHero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-neutral-950 text-white px-6 sm:px-12 lg:px-24 pt-20"
        >
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-55 mix-blend-overlay"
                >
                    <source src="/video/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/20" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative max-w-5xl mx-auto w-full z-10"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-block text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase mb-6 border border-neutral-700 rounded-full px-4 py-1.5"
                >
                    Case Study - ProMediaIT
                </motion.span>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] mb-8">
                    Broadcast Studio<br className="hidden md:block" />
                    <span className="text-neutral-500">Integration</span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed mb-12">
                    We designed and built a complete broadcast studio from the ground up - delivering a
                    professional-grade AV environment that empowers the team to produce, stream, and
                    create at the highest level.
                </p>

                {/* Meta pills */}
                <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
                    {HERO_META.map(({ label, color }) => (
                        <span key={label} className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${color} inline-block`} />
                            {label}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Scroll prompt */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-6 sm:left-12 lg:left-24 z-10"
            >
                <a
                    href="#transformation"
                    className="flex items-center gap-3 text-xs font-semibold tracking-widest text-neutral-500 uppercase hover:text-neutral-300 transition-colors"
                >
                    <span className="animate-bounce">
                        <ArrowDown className="w-3.5 h-3.5" />
                    </span>
                    Scroll to explore
                </a>
            </motion.div>
        </section>
    );
}
