"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Volume2, Tv, Wifi, Shield } from "lucide-react";
import Image from "next/image";

/** A single technology choice mapped directly to its measurable impact. */
interface TechImpactItem {
    icon: React.ReactNode;
    tech: string;
    vs: string;
    reason: string;
    impactValue: number;
    impactSuffix?: string;
    impactPrefix?: string;
    impactLabel: string;
}

const ITEMS: TechImpactItem[] = [
    {
        icon: <Volume2 className="w-5 h-5 text-amber-400" />,
        tech: "Dante AoIP",
        vs: "Analog Audio",
        reason: "Near-zero latency, single-cable infrastructure, and instant reconfiguration without re-patching.",
        impactValue: 100,
        impactSuffix: "+",
        impactLabel: "Audio channels routed across the entire facility over standard Ethernet.",
    },
    {
        icon: <Tv className="w-5 h-5 text-indigo-400" />,
        tech: "NDI Video",
        vs: "SDI-Only Distribution",
        reason: "Any source to any destination over LAN - no dedicated video cabling per feed.",
        impactValue: 6,
        impactSuffix: " Feeds",
        impactLabel: "Simultaneous live camera feeds with real-time switching and recording.",
    },
    {
        icon: <Wifi className="w-5 h-5 text-emerald-400" />,
        tech: "Vizrt TriCaster",
        vs: "Separate Switcher + Graphics",
        reason: "Unified system with powerful macro automation and integrated media playback.",
        impactValue: 60,
        impactSuffix: "%",
        impactPrefix: "-",
        impactLabel: "Reduction in daily live-show setup time compared to traditional multi-system workflows.",
    },
    {
        icon: <Shield className="w-5 h-5 text-rose-400" />,
        tech: "Structured Cabling + VLAN",
        vs: "Ad-hoc Wiring",
        reason: "Network reliability, security, and zero interference between AV and data traffic.",
        impactValue: 1,
        impactSuffix: "ms",
        impactPrefix: "<",
        impactLabel: "Perceptible latency across the entire AV network.",
    },
];

/** Small animated counter. */
function Counter({
    value,
    suffix = "",
    prefix = "",
    delay = 0,
}: {
    value: number;
    suffix?: string;
    prefix?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 1800;
        const steps = 50;
        const increment = value / steps;
        let current = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [isInView, value, delay]);

    return (
        <span ref={ref} className="text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
            {prefix}{isInView ? count : 0}{suffix}
        </span>
    );
}

/**
 * Unified Technology → Impact section.
 * Each tech choice is paired directly with its measurable outcome.
 */
export function TechImpact() {
    return (
        <section id="technologies" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-neutral-950 border-t border-neutral-900 overflow-hidden">
            {/* Dimmed equipment rack background photo */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/images/20250822_213848.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-[0.06]"
                    sizes="100vw"
                    aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-2xl"
                >
                    <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">
                        Technology → Impact
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
                        Every choice has a measurable outcome.
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        We don&apos;t pick tech for the spec sheet - we pick it for the result it delivers on set.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {ITEMS.map((item, idx) => (
                        <motion.div
                            key={item.tech}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/60 backdrop-blur-sm hover:border-neutral-700 transition-all duration-500 group"
                        >
                            {/* Left: Tech Choice */}
                            <div className="lg:col-span-7 flex flex-col justify-center lg:pr-8 lg:border-r lg:border-neutral-800/50">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-white font-semibold text-base">{item.tech}</span>
                                        <span className="text-neutral-600 text-sm">vs</span>
                                        <span className="text-neutral-500 text-sm line-through">{item.vs}</span>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {item.reason}
                                </p>
                            </div>

                            {/* Right: Impact Stat */}
                            <div className="lg:col-span-5 flex flex-col justify-center lg:pl-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-neutral-800/50">
                                <Counter
                                    value={item.impactValue}
                                    suffix={item.impactSuffix}
                                    prefix={item.impactPrefix}
                                    delay={idx * 0.1}
                                />
                                <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                                    {item.impactLabel}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
