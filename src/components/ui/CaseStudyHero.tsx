"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

/** Hero metadata shown as status pills at the bottom. */
const HERO_META = [
    { label: "Completed 2025", color: "bg-emerald-500" },
    { label: "AV Integration", color: "bg-neutral-500" },
    { label: "Broadcast Infrastructure", color: "bg-neutral-500" },
] as const;

/**
 * Full-screen hero section with auto-playing background video.
 * Streamlined: badge → headline → key results → CTA → tags.
 */
export function CaseStudyHero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-neutral-950 text-white px-6 sm:px-12 lg:px-24 pb-24 pt-32"
        >
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                >
                    <source src="/new_hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/30" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative max-w-5xl w-full z-10"
            >
                {/* Badge row: case study label + location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-wrap items-center gap-3 mb-6"
                >
                    <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase border border-neutral-700/60 rounded-full px-4 py-1.5">
                        Case Study &bull; ProMediaIT &bull; 2025
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-neutral-500 uppercase">
                        <MapPin className="w-3 h-3 text-indigo-400" />
                        London, UK
                    </span>
                </motion.div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-3">
                    We Built a Broadcast<br className="hidden sm:block" />
                    Studio From Scratch
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl">
                    From an empty room to a fully operational broadcast facility - ready for live production, streaming, and content at scale.
                </p>

                {/* Key Results - compact inline */}
                <div className="flex flex-wrap gap-3 mb-10">
                    <span className="px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                        4K 60fps · NDI/Dante
                    </span>
                    <span className="px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                        Zero downtime · 1+1 redundancy
                    </span>
                    <span className="px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                        Setup time cut by 60%
                    </span>
                </div>

                {/* CTA + Meta pills in one row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                    <a
                        href="#details"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-800/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Read the full case study
                        <ArrowRight className="w-4 h-4" />
                    </a>

                    <div className="flex flex-wrap gap-5 text-sm text-neutral-500">
                        {HERO_META.map(({ label, color }) => (
                            <span key={label} className="flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${color} inline-block`} />
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Scroll prompt */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 right-6 sm:right-12 lg:right-24 z-10"
            >
                <a
                    href="#details"
                    className="flex items-center gap-3 text-xs font-semibold tracking-widest text-neutral-500 uppercase hover:text-neutral-300 transition-colors"
                >
                    <span className="animate-bounce">
                        <ArrowDown className="w-3.5 h-3.5" />
                    </span>
                    Scroll
                </a>
            </motion.div>
        </section>
    );
}
