"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Interactive Before/After Image Slider
 * Drag the handle to reveal the "after" image underneath the "before" image.
 */
export function BeforeAfterSlider() {
    const [sliderPos, setSliderPos] = useState(50);

    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mt-12 border border-neutral-800/80 shadow-2xl group select-none">
            {/* After Image (Background) */}
            <Image
                src="/images/after.jpg"
                alt="Studio space after the build"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
            />

            {/* Before Image (Foreground, Clipped) */}
            <div
                className="absolute top-0 left-0 bottom-0 w-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
                <Image
                    src="/images/before.jpg"
                    alt="Studio space before the build"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                />
            </div>

            {/* Custom SVG slider thumb and vertical line */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white drop-shadow-md z-10 pointer-events-none flex items-center justify-center transition-all duration-75"
                style={{ left: `calc(${sliderPos}%)` }}
            >
                <div className="w-8 h-8 -ml-4 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-950">
                        <path d="M15 18l6-6-6-6M9 6l-6 6 6 6" />
                    </svg>
                </div>
            </div>

            {/* Invisible native range input for precise cross-platform dragging */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 p-0"
                aria-label="Drag to compare before and after images"
            />

            {/* Labels overlay */}
            <div className="absolute top-4 left-4 z-0 pointer-events-none">
                <span className="px-2.5 py-1 rounded bg-neutral-950/70 backdrop-blur-md text-[10px] uppercase tracking-widest font-semibold text-white shadow-sm border border-neutral-700/50">
                    Before
                </span>
            </div>
            <div className="absolute top-4 right-4 z-0 pointer-events-none">
                <span className="px-2.5 py-1 rounded bg-indigo-600/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-semibold text-white shadow-sm border border-indigo-500/50">
                    After
                </span>
            </div>
        </div>
    );
}
