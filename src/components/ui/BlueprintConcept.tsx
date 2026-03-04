"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BlueprintConcept() {
    return (
        <section className="py-24 px-6 sm:px-12 lg:px-24 bg-neutral-950 border-t border-neutral-900 border-b relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-[100%] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">



                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full relative aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl"
                >
                    <Image
                        src="/images/blueprint-concept.png"
                        alt="Architectural Blueprint of the Broadcast Studio"
                        fill
                        className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-[1.02]"
                        sizes="100vw"
                    />
                </motion.div>

            </div>
        </section>
    );
}
