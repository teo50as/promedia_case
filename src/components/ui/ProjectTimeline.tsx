"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        title: "Site Preparation",
        tasks: [
            "Structural assessment & floor plan finalization",
            "HVAC routing and acoustic treatment",
            "Electrical infrastructure and power distribution",
        ],
        color: "from-blue-500 to-blue-600",
    },
    {
        week: "Week 2",
        title: "Infrastructure & Cabling",
        tasks: [
            "Structured cabling installation (Cat6A, fiber)",
            "Equipment rack assembly and thermal management",
            "Lighting truss and overhead grid rigging",
        ],
        color: "from-indigo-500 to-indigo-600",
    },
    {
        week: "Week 3",
        title: "Equipment & Integration",
        tasks: [
            "Dante audio network configuration",
            "NDI video routing and TriCaster setup",
            "Camera positioning and PTZ programming",
        ],
        color: "from-violet-500 to-violet-600",
    },
    {
        week: "Week 4",
        title: "Testing & Handover",
        tasks: [
            "End-to-end signal flow testing",
            "Color calibration and multi-view sync",
            "Client training and final handover",
        ],
        color: "from-emerald-500 to-emerald-600",
    },
];

/**
 * 4-week project timeline section.
 * Visualizes the build schedule as a vertical timeline with phase cards.
 */
export function ProjectTimeline() {
    return (
        <section id="timeline" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-neutral-950 border-t border-neutral-900 overflow-hidden">
            {/* Dimmed studio background photo */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/images/20250908_203806.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-[0.06]"
                    sizes="100vw"
                    aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
            </div>
            {/* Background glow */}
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-violet-900/8 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-xl"
                >
                    <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4 block">
                        Project Schedule
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
                        4-Week Build Plan
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        From empty shell to broadcast-ready studio - a tight but meticulously planned schedule.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800" />

                    <div className="flex flex-col gap-8">
                        {PHASES.map((phase, idx) => (
                            <motion.div
                                key={phase.week}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative pl-12 sm:pl-20"
                            >
                                {/* Timeline dot */}
                                <div className={`absolute left-2.5 sm:left-6.5 top-3 w-3 h-3 rounded-full bg-gradient-to-br ${phase.color} ring-4 ring-neutral-950`} />

                                {/* Card */}
                                <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/60 backdrop-blur-sm
                                    hover:border-neutral-700 transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                                            {phase.week}
                                        </span>
                                        <div className="h-px flex-1 bg-neutral-800" />
                                    </div>

                                    <h3 className="text-lg font-medium text-white mb-4">
                                        {phase.title}
                                    </h3>

                                    <ul className="space-y-2.5">
                                        {phase.tasks.map((task) => (
                                            <li key={task} className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
