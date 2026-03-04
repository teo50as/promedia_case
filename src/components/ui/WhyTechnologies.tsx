"use client";

import { motion } from "framer-motion";
import { Wifi, Volume2, Tv, Shield } from "lucide-react";

/** A single technology choice with rationale. */
interface TechChoice {
    icon: React.ReactNode;
    tech: string;
    alternative: string;
    reason: string;
    benefit: string;
}

const TECH_CHOICES: TechChoice[] = [
    {
        icon: <Volume2 className="w-5 h-5 text-amber-400" />,
        tech: "Dante AoIP",
        alternative: "Analog Audio",
        reason: "Digitally routed audio over standard Ethernet with sample-accurate sync.",
        benefit: "Near-zero latency, single-cable infrastructure, and instant reconfiguration without re-patching.",
    },
    {
        icon: <Tv className="w-5 h-5 text-indigo-400" />,
        tech: "NDI Video",
        alternative: "SDI-Only Distribution",
        reason: "Network-based video transport that coexists with IT infrastructure.",
        benefit: "Any source to any destination over LAN - no dedicated video cabling per feed.",
    },
    {
        icon: <Wifi className="w-5 h-5 text-emerald-400" />,
        tech: "Vizrt TriCaster",
        alternative: "Separate Switcher + Graphics",
        reason: "All-in-one live production system with built-in switching, streaming, and graphics.",
        benefit: "A single operator can control what previously needed a three-person crew.",
    },
    {
        icon: <Shield className="w-5 h-5 text-rose-400" />,
        tech: "Structured Cabling + VLAN",
        alternative: "Ad-hoc Wiring",
        reason: "Segregated broadcast traffic from IT traffic via VLANs on a managed switch fabric.",
        benefit: "Network reliability, security, and zero interference between AV and data traffic.",
    },
];

/**
 * Technology justification section.
 * Explains WHY specific technologies were chosen over alternatives.
 */
export function WhyTechnologies() {
    return (
        <section id="technologies" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-neutral-950 border-t border-neutral-900 overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-xl"
                >
                    <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">
                        Technology Decisions
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
                        Why These Technologies?
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Every component was selected for a reason. Here is our rationale behind the key choices.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TECH_CHOICES.map((choice, idx) => (
                        <motion.div
                            key={choice.tech}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/60 backdrop-blur-sm
                                hover:border-neutral-700 transition-all duration-500 group"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 shrink-0">
                                    {choice.icon}
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-white font-semibold text-base">{choice.tech}</span>
                                    <span className="text-neutral-600 text-sm">vs</span>
                                    <span className="text-neutral-500 text-sm line-through">{choice.alternative}</span>
                                </div>
                            </div>

                            {/* Reason */}
                            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                {choice.reason}
                            </p>

                            {/* Benefit highlight */}
                            <div className="flex items-start gap-2">
                                <div className="w-1 h-full min-h-[20px] rounded-full bg-gradient-to-b from-emerald-500 to-emerald-500/20 shrink-0 mt-0.5" />
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                    {choice.benefit}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
