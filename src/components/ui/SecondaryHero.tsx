"use client";

import { motion } from "framer-motion";

/**
 * Secondary hero section showcasing the "sketch to reality" transformation video.
 * Acts as a visual bridge between the main hero and the detailed project breakdown.
 */
export function SecondaryHero() {
    return (
        <section
            id="transformation"
            className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-neutral-950 text-white px-6 sm:px-12 lg:px-24"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                >
                    <source src="/video/Od_Szkicu_Do_Realizacji_Filmu.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/40 to-neutral-950" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative max-w-5xl mx-auto w-full z-10 text-center"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-block text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase mb-6 border border-neutral-700 rounded-full px-4 py-1.5"
                >
                    Behind the Scenes
                </motion.span>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-8">
                    From Sketch<br className="hidden md:block" />
                    <span className="text-neutral-500">To Reality</span>
                </h2>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed">
                    See how an empty room was transformed into a fully operational,
                    broadcast-ready studio - from the first cable to the final calibration.
                </p>
            </motion.div>
        </section>
    );
}
