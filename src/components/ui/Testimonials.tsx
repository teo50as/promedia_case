"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

/** Data for a client testimonial. */
interface TestimonialData {
    quote: string;
    author: string;
    role: string;
}

const TESTIMONIALS: TestimonialData[] = [
    {
        quote: "ProMediaIT transformed our vision into reality. The studio exceeded every expectation - the audio clarity, the seamless switching, everything just works. What impressed us most was the attention to detail, from cable management to thermal design. Four weeks felt ambitious, but they delivered a facility that rivals studios ten times the budget.",
        author: "Studio Director",
        role: "Broadcasting Client",
    },
];

/**
 * Client testimonials section.
 * Two quote cards + a team photo to build credibility and trust.
 */
export function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-neutral-950 overflow-hidden">
            {/* Dimmed studio background photo */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/images/IMG-20250908-WA0003.jpeg"
                    alt=""
                    fill
                    className="object-cover opacity-[0.06]"
                    sizes="100vw"
                    aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
            </div>
            {/* Background glow */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-indigo-900/8 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4 block">
                        Client Feedback
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
                        What Our Client Says
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    {/* Testimonial Cards */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        {TESTIMONIALS.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="relative p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/60 backdrop-blur-sm
                                    hover:border-neutral-700 transition-all duration-500 group"
                            >
                                {/* Quote icon */}
                                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <Quote className="w-12 h-12 text-white" />
                                </div>

                                <blockquote className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6 relative z-10">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>

                                <div className="flex items-center gap-3">
                                    {/* Avatar placeholder */}
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                                        {t.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">{t.author}</p>
                                        <p className="text-neutral-500 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Team Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-neutral-800/60 min-h-[400px]"
                    >
                        <Image
                            src="/images/mixer.jpg"
                            alt="Detailed view of the digital audio mixing console"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-white text-sm font-medium">Precision Control</p>
                            <p className="text-neutral-400 text-xs mt-1">Every detail engineered for flawless live production</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
