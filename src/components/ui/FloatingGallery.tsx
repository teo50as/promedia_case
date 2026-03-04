"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/** Data for a single gallery image with grid spanding metadata. */
interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    caption: string;
    stage: string;
    spanClass: string;
}

/**
 * Gallery images mapped into a dense Bento grid.
 * Sizes are deliberately varied to create a dynamic, premium "wall of work".
 */
const GALLERY_ITEMS: GalleryItem[] = [
    // Phase 1 - Preparation
    { id: 1, src: "/images/20250807_132624.jpg", spanClass: "col-span-1 sm:col-span-2 row-span-1", alt: "Studio floor during the early construction", caption: "Structural preparation and HVAC routing.", stage: "Preparation" },
    { id: 2, src: "/images/20250807_132450.jpg", spanClass: "col-span-1 row-span-1", alt: "Preparation of the control room space", caption: "Control room workspace layout.", stage: "Preparation" },

    // Phase 2 - Infrastructure
    { id: 3, src: "/images/20250820_191209.jpg", spanClass: "col-span-1 row-span-2", alt: "Equipment arrival and unboxing", caption: "Central equipment racks positioned before wiring.", stage: "Infrastructure" },
    { id: 4, src: "/images/20250821_165950.jpg", spanClass: "col-span-1 row-span-1", alt: "Wiring and cabling infrastructure", caption: "Under-floor and rack cabling routes.", stage: "Infrastructure" },
    { id: 5, src: "/images/20250822_213848.jpg", spanClass: "col-span-1 sm:col-span-2 row-span-2", alt: "Custom 19-inch equipment racks", caption: "Custom 19″ racks with thermal management.", stage: "Infrastructure" },
    { id: 6, src: "/images/20250904_171608.jpg", spanClass: "col-span-1 row-span-1", alt: "Ceiling lighting truss rigging", caption: "Overhead lighting grid and primary cable runs.", stage: "Infrastructure" },

    // Phase 3 - Equipment Setup
    { id: 7, src: "/images/20250915_183100.jpg", spanClass: "col-span-1 row-span-1", alt: "Mid-installation equipment rack", caption: "Detailed hardware seating and configuration.", stage: "Equipment" },
    { id: 8, src: "/images/20250904_215414.jpg", spanClass: "col-span-1 row-span-2", alt: "Audio console signal routing", caption: "Cable management and signal routing at audio console.", stage: "Equipment" },
    { id: 9, src: "/images/20251021_143055.jpg", spanClass: "col-span-1 sm:col-span-2 row-span-1", alt: "Teleprompter testing", caption: "Camera optics aligned with teleprompter system.", stage: "Equipment" },
    { id: 10, src: "/images/20251105_191944.jpg", spanClass: "col-span-1 row-span-1", alt: "Digital audio mixing console", caption: "Audio mixing console and control surface.", stage: "Equipment" },

    // Phase 4 - Calibration & Testing
    { id: 11, src: "/images/20251016_082621.jpg", spanClass: "col-span-1 row-span-1", alt: "Vision mixing control surface", caption: "Vision mixing surface for multi-camera cuts.", stage: "Calibration" },
    { id: 12, src: "/images/IMG-20250909-WA0000.jpeg", spanClass: "col-span-1 row-span-1", alt: "Final system calibration checks", caption: "Color-bar calibration and multi-screen sync.", stage: "Calibration" },
    { id: 13, src: "/images/20251105_192322.jpg", spanClass: "col-span-1 sm:col-span-2 row-span-2", alt: "Mixing console with illuminated dials", caption: "Audio tracking and broadcast routing.", stage: "Calibration" },

    // Phase 5 - Final Result
    { id: 14, src: "/images/IMG-20251017-WA0007.jpeg", spanClass: "col-span-1 row-span-1", alt: "Secondary broadcast setup", caption: "Mobile camera rigs and dynamic backdrop.", stage: "Final Result" },
    { id: 15, src: "/images/IMG-20250908-WA0003.jpeg", spanClass: "col-span-1 row-span-1", alt: "Studio floor view", caption: "Main studio floor and lighting grid.", stage: "Final Result" },
    { id: 16, src: "/images/20250908_203806.jpg", spanClass: "col-span-1 row-span-2", alt: "Wide angle showing the completed studio set", caption: "Completed main studio set.", stage: "Final Result" },
    { id: 17, src: "/images/20250908_203238.jpg", spanClass: "col-span-1 sm:col-span-2 row-span-2", alt: "Main Control Room overview", caption: "Control Room with customized mixing desk.", stage: "Final Result" },
];

/**
 * Compact Bento Gallery.
 * All images packed tightly into a high-end dense grid to save vertical space.
 * Stage labels are floating badges to preserve chronological narrative.
 */
export function FloatingGallery() {
    return (
        <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-neutral-950 border-t border-neutral-900 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/10 blur-[200px] rounded-[100%] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mb-12 sm:mb-16 text-center mx-auto"
                >
                    <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4 block">
                        Visual Journey
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
                        The Build Process
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Every stage of the installation - from empty room to broadcast-ready studio, seamlessly packed.
                    </p>
                </motion.div>

                {/* Dense Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[250px] gap-3 sm:gap-4 lg:gap-5 grid-flow-dense">
                    {GALLERY_ITEMS.map((item, idx) => (
                        <GalleryCard key={item.id} item={item} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/** Single gallery card with hover effects, stage badge, and caption overlay. */
function GalleryCard({ item, idx }: { item: GalleryItem; idx: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: (idx % 8) * 0.05, ease: "easeOut" }}
            className={`group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/60 shadow-lg hover:shadow-xl hover:border-neutral-700 transition-all duration-500 ${item.spanClass}`}
        >
            <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Phase Badge (Top Left) */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                <span className="px-3 py-1.5 rounded-full bg-neutral-950/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-semibold text-white shadow-sm">
                    {item.stage}
                </span>
            </div>

            {/* Bottom gradient fade for caption legibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Caption on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5
                translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-500 ease-out z-20">
                <p className="text-white text-sm sm:text-base font-medium leading-relaxed drop-shadow-md">
                    {item.caption}
                </p>
            </div>
        </motion.div>
    );
}
