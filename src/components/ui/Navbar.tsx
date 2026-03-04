"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="/" className="relative z-10 flex items-center gap-3">
                <div className="relative w-36 h-10">
                    <Image
                        src="/logo.png"
                        alt="ProMediaIT Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </Link>

            {/* Right side label */}
            <div className="relative z-10">
                <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                    Case Study
                </span>
            </div>
        </motion.header>
    );
}
