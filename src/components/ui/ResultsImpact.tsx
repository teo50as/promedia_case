"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Zap, Monitor, Clock } from "lucide-react";

/** Animated counter that counts up when visible. */
function AnimatedStat({
    value,
    suffix = "",
    prefix = "",
    label,
    icon,
    delay = 0,
}: {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    icon: React.ReactNode;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
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
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="relative group"
        >
            <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/60 backdrop-blur-sm
                hover:border-neutral-700 transition-all duration-500">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-950 border border-neutral-800 mb-6">
                    {icon}
                </div>

                {/* Counter */}
                <div className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-2">
                    {prefix}{isInView ? count : 0}{suffix}
                </div>

                {/* Label */}
                <p className="text-neutral-400 text-sm leading-relaxed">
                    {label}
                </p>
            </div>
        </motion.div>
    );
}

/**
 * Results & Impact section.
 * Displays 4 key metrics with animated counters to convince prospective clients.
 */
export function ResultsImpact() {
    return (
        <section id="results" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-neutral-950 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-900/8 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest text-emerald-500 uppercase mb-4 block">
                        Measurable Outcomes
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
                        Results & Impact
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                        The numbers that matter - real performance gains delivered on time and within budget.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <AnimatedStat
                        value={4}
                        label="From empty shell to broadcast-ready studio in under a month."
                        icon={<Clock className="w-5 h-5 text-blue-400" />}
                        suffix=" Weeks"
                        delay={0}
                    />
                    <AnimatedStat
                        value={6}
                        label="Simultaneous live camera feeds with real-time NDI switching."
                        icon={<Monitor className="w-5 h-5 text-indigo-400" />}
                        suffix=" Cameras"
                        delay={0.1}
                    />
                    <AnimatedStat
                        value={0}
                        label="Zero perceptible audio/video latency across Dante AoIP network."
                        icon={<Zap className="w-5 h-5 text-amber-400" />}
                        suffix="ms Latency"
                        prefix="<"
                        delay={0.2}
                    />
                    <AnimatedStat
                        value={70}
                        label="Reduced setup time per broadcast compared to previous workflow."
                        icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
                        suffix="%"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}
