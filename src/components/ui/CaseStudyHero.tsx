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
            <div className="absolute inset-0 z-0 bg-neutral-950">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                >
                    <source src="/video/hero_new2.mp4" type="video/mp4" />
                </video>
                {/* Refined Premium Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/20" />
                <div className="absolute inset-0 bg-neutral-950/10 backdrop-blur-[2px]" />
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7 }}
                    className="flex flex-wrap items-center gap-4 mb-8"
                >
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-md rounded-full px-5 py-2 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Case Study &bull; ProMediaIT &bull; 2025
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest text-neutral-400 uppercase">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        London, UK
                    </span>
                </motion.div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white mb-6 drop-shadow-2xl">
                    We Built a Broadcast<br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                        Studio From Scratch
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl font-light leading-relaxed drop-shadow-md">
                    From an empty room to a fully operational broadcast facility - seamlessly engineered for live production, global streaming, and uncompromised scalability.
                </p>

                {/* Key Results - Premium Glassmorphic Pills */}
                <div className="flex flex-wrap gap-4 mb-14">
                    <span className="px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-neutral-200 text-sm font-medium shadow-xl">
                        4K 60fps · NDI / Dante
                    </span>
                    <span className="px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-neutral-200 text-sm font-medium shadow-xl">
                        Zero downtime · 1+1 redundancy
                    </span>
                    <span className="px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-neutral-200 text-sm font-medium shadow-xl">
                        Setup time cut by <span className="text-emerald-400 font-bold">60%</span>
                    </span>
                </div>

                {/* CTA + Meta pills in one row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                    <a
                        href="#details"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105"
                    >
                        Explore the Case Study
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <div className="flex flex-wrap gap-6 text-sm text-neutral-400 font-medium">
                        {HERO_META.map(({ label, color }) => (
                            <span key={label} className="flex items-center gap-2.5">
                                <span className={`w-2 h-2 rounded-full ${color} inline-block shadow-sm`} />
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
