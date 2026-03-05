"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CHAPTERS = [
    { num: "01", label: "The Story", href: "#details" },
    { num: "02", label: "Process", href: "#gallery" },
    { num: "03", label: "Tech & Impact", href: "#technologies" },
    { num: "04", label: "Let's Talk", href: "#contact" },
];

export function Navbar() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 lg:px-24 py-5 flex items-center justify-between"
        >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-md border-b border-neutral-800/50" />

            {/* Logo */}
            <a href="#hero" className="relative z-10 flex items-center gap-3">
                <div className="relative w-36 h-10">
                    <Image
                        src="/logo.png"
                        alt="ProMediaIT Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </a>

            {/* Document Index - Inline */}
            <nav className="relative z-10 hidden md:flex items-center gap-6 lg:gap-8">
                {CHAPTERS.map((chapter) => (
                    <a
                        key={chapter.num}
                        href={chapter.href}
                        className="flex items-center gap-2 group"
                    >
                        <span className="text-[10px] font-mono font-medium text-neutral-500 group-hover:text-indigo-400 transition-colors">
                            {chapter.num}.
                        </span>
                        <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase group-hover:text-white transition-colors">
                            {chapter.label}
                        </span>
                    </a>
                ))}
            </nav>

            {/* Mobile Document Index - Horizontal Scroll */}
            <div className="relative z-10 md:hidden w-full ml-4 overflow-x-auto no-scrollbar mask-image-r">
                <nav className="flex items-center gap-6 min-w-max pb-1">
                    {CHAPTERS.map((chapter) => (
                        <a
                            key={chapter.num}
                            href={chapter.href}
                            className="flex items-center gap-1.5 group snap-start"
                        >
                            <span className="text-[9px] font-mono font-medium text-neutral-500">
                                {chapter.num}.
                            </span>
                            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                                {chapter.label}
                            </span>
                        </a>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
}
