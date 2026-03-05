"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Cpu, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

/** Technology tags displayed in the sidebar. */
const TECHNOLOGIES = [
    "Vizrt TriCaster",
    "Allen & Heath QU-16",
    "Dante AoIP",
    "NDI",
    "PTZ Camera",
    "Multi-Camera Production",
    "Live Switching",
    "Structured Cabling",
] as const;

/** A single phase in the project timeline. */
interface TimelinePhase {
    week: string;
    title: string;
    tasks: string[];
    color: string;
}

const PHASES: TimelinePhase[] = [
    {
        week: "Week 1",
        title: "Site Prep",
        tasks: ["Demolition & Acoustics", "HVAC Routing", "Power Distribution"],
        color: "from-blue-500 to-blue-600",
    },
    {
        week: "Week 2",
        title: "Infrastructure",
        tasks: ["Structured Cabling", "Equipment Racks", "Overhead Grid"],
        color: "from-indigo-500 to-indigo-600",
    },
    {
        week: "Week 3",
        title: "Integration",
        tasks: ["Dante Network", "NDI Video Routing", "PTZ Programming"],
        color: "from-violet-500 to-violet-600",
    },
    {
        week: "Week 4",
        title: "Handover",
        tasks: ["Signal Flow Testing", "Color Calibration", "Client Training"],
        color: "from-emerald-500 to-emerald-600",
    },
];

/** Props for each detail card in the Bento grid. */
interface DetailCardProps {
    title: string;
    content: React.ReactNode;
    delay: number;
    icon?: React.ReactNode;
    isHighlight?: boolean;
    className?: string;
}

/**
 * Project details section - explains the challenge, approach, and outcome.
 * Uses a sticky sidebar with technology tags + a Bento-style card grid.
 */
export function ProjectDetails() {
    return (
        <section
            id="details"
            className="relative py-32 px-6 sm:px-12 lg:px-24 bg-neutral-950 text-white overflow-hidden border-t border-neutral-900"
        >
            {/* Dimmed construction phase background photo */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/images/20250807_132624.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-[0.06]"
                    sizes="100vw"
                    aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-[100%] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <h2 className="text-4xl font-medium tracking-tight mb-6">
                                About the Project
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed">
                                A purpose-built studio that puts the creative team fully in control.
                                Flawless routing, zero latency, maximum impact.
                            </p>

                            <div className="h-px w-full bg-gradient-to-r from-neutral-800 to-transparent my-8" />

                            <div className="flex flex-col gap-4">
                                <span className="text-sm font-semibold tracking-widest text-neutral-500 uppercase">
                                    Technologies
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {TECHNOLOGIES.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-900/50 border border-neutral-800 text-neutral-300 whitespace-nowrap"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Before/After Slider inside Sidebar */}
                            <div className="mt-12 hidden lg:block">
                                <BeforeAfterSlider />
                            </div>
                            <div className="mt-12 lg:hidden max-w-md mx-auto">
                                <BeforeAfterSlider />
                            </div>
                        </motion.div>
                    </div>

                    {/* Bento Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DetailCard
                            delay={0.1}
                            icon={<Target className="w-5 h-5 text-indigo-400" />}
                            title="The Challenge"
                            content="The client needed a fully operational broadcast studio capable of handling multiple live camera feeds, real-time audio mixing, and dynamic lighting - all delivered within a tight project timeline."
                        />
                        <DetailCard
                            delay={0.2}
                            icon={<Lightbulb className="w-5 h-5 text-amber-400" />}
                            title="Our Approach"
                            content="We developed a custom AV architecture from the ground up: Dante-enabled audio routing for crystal-clear sound, and a high-bandwidth video matrix for seamless switching."
                        />
                        <div className="sm:col-span-2">
                            <DetailCard
                                delay={0.3}
                                icon={<Cpu className="w-5 h-5 text-emerald-400" />}
                                title="Core Infrastructure"
                                content={
                                    <ul className="space-y-4 mt-2">
                                        {[
                                            "Vizrt TriCaster for centralized live switching and graphics",
                                            "Professional Digital Audio Mixing Console (Allen & Heath QU-16)",
                                            "Custom-built 19″ equipment racks with intelligent thermal management",
                                            "SDI / NDI video distribution and matrix switching infrastructure",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            />
                        </div>
                        {/* Compact Timeline Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="sm:col-span-2 p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-sm relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />
                            <div className="relative z-10 flex items-center gap-4 mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-950 border border-neutral-800 shrink-0">
                                    <Clock className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-neutral-200">4-Week Build Plan</h3>
                                    <p className="text-sm text-neutral-400">From empty shell to broadcast-ready</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                                {PHASES.map((phase, idx) => (
                                    <div key={phase.week} className="flex flex-col">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                                                {phase.week}
                                            </span>
                                            <div className="h-px flex-1 bg-neutral-800" />
                                        </div>
                                        <h4 className="text-sm font-medium text-neutral-300 mb-2">{phase.title}</h4>
                                        <ul className="space-y-1.5 flex-1">
                                            {phase.tasks.map(task => (
                                                <li key={task} className="flex items-start gap-2 text-neutral-500 text-xs leading-relaxed">
                                                    <div className="w-1 h-1 rounded-full bg-neutral-700 mt-1.5 shrink-0" />
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/** Individual detail card with optional icon and highlight variant. */
function DetailCard({ title, content, delay, icon, isHighlight, className }: DetailCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "p-8 rounded-3xl transition-all duration-300 group relative overflow-hidden backdrop-blur-sm",
                isHighlight
                    ? "bg-gradient-to-br from-neutral-100 to-neutral-300 text-neutral-950 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
                    : "bg-neutral-900/80 border border-neutral-800/80 text-white hover:border-neutral-700 hover:bg-neutral-800/80",
                className
            )}
        >
            {/* Hover Glow Effect */}
            {!isHighlight && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />
            )}

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5">
                    {icon && (
                        <div
                            className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-full shrink-0",
                                isHighlight
                                    ? "bg-white shadow-sm"
                                    : "bg-neutral-950 border border-neutral-800"
                            )}
                        >
                            {icon}
                        </div>
                    )}
                    <h3
                        className={cn(
                            "text-xl font-medium",
                            isHighlight ? "text-neutral-900" : "text-neutral-200"
                        )}
                    >
                        {title}
                    </h3>
                </div>

                <div
                    className={cn(
                        "text-base leading-relaxed flex-1",
                        isHighlight ? "text-neutral-700 font-medium" : "text-neutral-400"
                    )}
                >
                    {content}
                </div>
            </div>
        </motion.div>
    );
}
