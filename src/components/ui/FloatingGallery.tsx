"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/** Data for a single gallery image with stage metadata. */
interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    caption: string;
    stage: string;
}

/**
 * Gallery images ordered chronologically:
 * preparation -> infrastructure -> equipment -> calibration -> final result.
 *
 * WHY: The client experiences the build journey from empty room to finished studio
 * as they scroll, with phase dividers providing narrative context.
 */
const GALLERY_ITEMS: GalleryItem[] = [
    // Phase 1 - Preparation
    { id: 1, src: "/images/20250807_132624.jpg", alt: "Studio floor during the early construction", caption: "Structural preparation and HVAC routing.", stage: "Preparation" },
    { id: 2, src: "/images/20250807_132450.jpg", alt: "Preparation of the control room space", caption: "Control room workspace layout.", stage: "Preparation" },

    // Phase 2 - Infrastructure
    { id: 3, src: "/images/20250820_191209.jpg", alt: "Equipment arrival and unboxing", caption: "Central equipment racks positioned before wiring.", stage: "Infrastructure" },
    { id: 4, src: "/images/20250821_165950.jpg", alt: "Wiring and cabling infrastructure", caption: "Under-floor and rack cabling routes.", stage: "Infrastructure" },
    { id: 5, src: "/images/20250822_213848.jpg", alt: "Custom 19-inch equipment racks", caption: "Custom 19\u2033 racks with thermal management.", stage: "Infrastructure" },
    { id: 6, src: "/images/20250904_171608.jpg", alt: "Ceiling lighting truss rigging", caption: "Overhead lighting grid and primary cable runs.", stage: "Infrastructure" },

    // Phase 3 - Equipment Setup
    { id: 7, src: "/images/20250915_183100.jpg", alt: "Mid-installation equipment rack", caption: "Detailed hardware seating and configuration.", stage: "Equipment" },
    { id: 8, src: "/images/20250904_215414.jpg", alt: "Audio console signal routing", caption: "Cable management and signal routing at audio console.", stage: "Equipment" },
    { id: 9, src: "/images/20251021_143055.jpg", alt: "Teleprompter testing", caption: "Camera optics aligned with teleprompter system.", stage: "Equipment" },
    { id: 10, src: "/images/20251105_191944.jpg", alt: "Digital audio mixing console", caption: "Audio mixing console and control surface.", stage: "Equipment" },

    // Phase 4 - Calibration & Testing
    { id: 11, src: "/images/20251016_082621.jpg", alt: "Vision mixing control surface", caption: "Vision mixing surface for multi-camera cuts.", stage: "Calibration" },
    { id: 12, src: "/images/IMG-20250909-WA0000.jpeg", alt: "Final system calibration checks", caption: "Color-bar calibration and multi-screen sync.", stage: "Calibration" },
    { id: 13, src: "/images/20251105_192322.jpg", alt: "Mixing console with illuminated dials", caption: "Audio tracking and broadcast routing.", stage: "Calibration" },

    // Phase 5 - Final Result
    { id: 14, src: "/images/IMG-20251017-WA0007.jpeg", alt: "Secondary broadcast setup", caption: "Mobile camera rigs and dynamic backdrop.", stage: "Final Result" },
    { id: 15, src: "/images/IMG-20250908-WA0003.jpeg", alt: "Studio floor view", caption: "Main studio floor and lighting grid.", stage: "Final Result" },
    { id: 16, src: "/images/20250908_203806.jpg", alt: "Wide angle showing the completed studio set", caption: "Completed main studio set.", stage: "Final Result" },
    { id: 17, src: "/images/20250908_203238.jpg", alt: "Main Control Room overview", caption: "Control Room with customized mixing desk.", stage: "Final Result" },
];

/** Phase metadata for section dividers */
const PHASE_META: Record<string, { label: string; index: string }> = {
    "Preparation": { label: "Site prep, HVAC routing, and space planning", index: "01" },
    "Infrastructure": { label: "Cabling, rack builds, and lighting grid", index: "02" },
    "Equipment": { label: "Hardware seating, console setup, and optics", index: "03" },
    "Calibration": { label: "Signal testing, color calibration, and sync", index: "04" },
    "Final Result": { label: "Completed studio, control room, and handover", index: "05" },
};

/** Group items by stage, preserving order */
function groupByStage(items: GalleryItem[]): { stage: string; items: GalleryItem[] }[] {
    const groups: { stage: string; items: GalleryItem[] }[] = [];
    let current: { stage: string; items: GalleryItem[] } | null = null;

    for (const item of items) {
        if (!current || current.stage !== item.stage) {
            current = { stage: item.stage, items: [] };
            groups.push(current);
        }
        current.items.push(item);
    }

    return groups;
}

const GROUPED = groupByStage(GALLERY_ITEMS);

/**
 * Sequential compact gallery with phase dividers.
 * All images flow chronologically in a responsive grid.
 * Phase dividers provide narrative context between stages.
 */
export function FloatingGallery() {
    return (
        <section id="gallery" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mb-20"
                >
                    <h2 className="text-3xl font-medium tracking-tight text-white mb-3">
                        The Build Process
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Every stage of the installation - from empty room to broadcast-ready studio.
                    </p>
                </motion.div>

                {/* Phase groups rendered sequentially */}
                <div className="flex flex-col gap-16">
                    {GROUPED.map((group) => {
                        const meta = PHASE_META[group.stage];
                        return (
                            <div key={group.stage}>
                                {/* Phase divider */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center gap-4 mb-8"
                                >
                                    <span className="text-xs font-mono text-neutral-600 tabular-nums">
                                        {meta.index}
                                    </span>
                                    <div className="h-px flex-1 bg-neutral-800" />
                                    <div className="flex flex-col items-end gap-0.5">
                                        <span className="text-sm font-semibold text-white tracking-wide">
                                            {group.stage}
                                        </span>
                                        <span className="text-xs text-neutral-500">
                                            {meta.label}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Images grid - 2 cols for 2 items, 3 cols for 3+  */}
                                <div className={`grid gap-4 sm:gap-6 ${group.items.length <= 2
                                        ? "grid-cols-1 sm:grid-cols-2"
                                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                                    }`}>
                                    {group.items.map((item, idx) => (
                                        <GalleryCard key={item.id} item={item} idx={idx} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/** Single gallery card with hover effects and caption overlay. */
function GalleryCard({ item, idx }: { item: GalleryItem; idx: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            className="group relative"
        >
            <div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/60
                shadow-lg hover:shadow-2xl hover:border-neutral-700/80
                transition-all duration-500 ease-out">
                <div className="aspect-[4/3] relative w-full overflow-hidden">
                    <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Bottom gradient for caption legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Caption on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4
                        translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                        transition-all duration-500 ease-out">
                        <p className="text-white text-sm leading-relaxed drop-shadow-lg">
                            {item.caption}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
