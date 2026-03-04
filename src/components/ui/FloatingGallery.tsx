"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
 * preparation → infrastructure → equipment → calibration → final result.
 *
 * WHY: A client reading the case study should experience the build journey
 * from empty room to finished studio as they scroll.
 */
const GALLERY_ITEMS: GalleryItem[] = [
    // Phase 1 - Preparation
    { id: 1, src: "/images/20250807_132624.jpg", alt: "Studio floor during the early construction and HVAC installation phase", caption: "Initial construction phase focusing on structural preparation and HVAC routing", stage: "Preparation" },
    { id: 2, src: "/images/20250807_132450.jpg", alt: "Preparation of the control room space", caption: "Early preparation of the control room workspace", stage: "Preparation" },

    // Phase 2 - Infrastructure
    { id: 3, src: "/images/20250821_165950.jpg", alt: "Wiring and cabling infrastructure", caption: "Extensive under-floor and rack cabling routes", stage: "Infrastructure" },
    { id: 4, src: "/images/20250822_213848.jpg", alt: "Custom 19-inch equipment racks housing SDI matrices, Dante routing, and thermal management", caption: "Custom 19″ equipment racks with active thermal management", stage: "Infrastructure" },

    // Phase 3 - Equipment
    { id: 5, src: "/images/20250915_183100.jpg", alt: "Mid-installation equipment rack", caption: "Detailed hardware seating and configuration", stage: "Equipment" },
    { id: 6, src: "/images/20251105_191944.jpg", alt: "Detailed view of the digital audio mixing console and control surface", caption: "Digital audio mixing console and control surface", stage: "Equipment" },

    // Phase 4 - Calibration
    { id: 7, src: "/images/20251016_082621.jpg", alt: "Close-up of the lighting and vision mixing control surface", caption: "Tactile vision mixing surface enabling swift multi-camera cuts", stage: "Calibration" },
    { id: 8, src: "/images/20251105_192322.jpg", alt: "Mixing console with illuminated dials", caption: "Final polished environment for audio tracking and broadcast", stage: "Calibration" },

    // Phase 5 - Final Result
    { id: 9, src: "/images/IMG-20251017-WA0007.jpeg", alt: "A secondary broadcast setup featuring mobile camera rigs and dynamic backdrop", caption: "Secondary broadcast setup with mobile camera rigs", stage: "Final Result" },
    { id: 10, src: "/images/IMG-20250908-WA0003.jpeg", alt: "Studio floor view", caption: "Finalized studio floor and lighting grid testing", stage: "Final Result" },
    { id: 11, src: "/images/20250908_203806.jpg", alt: "Wide angle showing the completed studio set", caption: "Wide angle perspective on the completed studio set", stage: "Final Result" },
    { id: 12, src: "/images/20250908_203238.jpg", alt: "Main Control Room overview with the primary mixing desk and multi-view monitor wall", caption: "Main Control Room - custom desk and primary video matrix monitoring", stage: "Final Result" },
];

const LEFT_COLUMN = GALLERY_ITEMS.slice(0, 6);
const RIGHT_COLUMN = GALLERY_ITEMS.slice(6, 12);

/**
 * Two-column parallax image gallery.
 * Columns scroll at different speeds to create a premium floating effect.
 */
export function FloatingGallery() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [150, -450]);

    return (
        <section
            id="gallery"
            ref={containerRef}
            className="py-32 px-6 sm:px-12 lg:px-24 bg-neutral-950"
        >
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
                        A closer look at the installation - captured during build, testing, and handover.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Left Column - slower parallax */}
                    <motion.div style={{ y: y1 }} className="flex flex-col gap-12 lg:gap-24 mt-0 md:-mt-24">
                        {LEFT_COLUMN.map((item) => (
                            <ParallaxImage key={item.id} item={item} />
                        ))}
                    </motion.div>

                    {/* Right Column - faster parallax */}
                    <motion.div style={{ y: y2 }} className="flex flex-col gap-12 lg:gap-24 mt-12 md:mt-32">
                        {RIGHT_COLUMN.map((item) => (
                            <ParallaxImage key={item.id} item={item} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/** Single gallery card with hover zoom, shadow depth, and caption. */
function ParallaxImage({ item }: { item: GalleryItem }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="group relative"
        >
            <div
                className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800
                    shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]
                    group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]
                    transition-shadow duration-500 ease-out mb-5"
            >
                <div className="aspect-[4/3] relative w-full overflow-hidden bg-neutral-900">
                    <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-1.5 px-2"
            >
                <span className="text-xs font-semibold tracking-widest text-neutral-600 uppercase">
                    {item.stage}
                </span>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                    {item.caption}
                </p>
            </motion.div>
        </motion.div>
    );
}
