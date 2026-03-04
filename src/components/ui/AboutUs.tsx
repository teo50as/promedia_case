"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * About Us section.
 * Introduces the ProMediaIT team with a friendly, passionate description.
 */
export function AboutUs() {
    return (
        <section id="about-us" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-neutral-950 overflow-hidden border-t border-neutral-900">
            {/* Background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4 block">
                            Who We Are
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                            Passionate about the perfect setup.
                        </h2>
                        <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                            <p>
                                At <strong className="text-neutral-200 font-medium">ProMediaIT</strong>, we don&apos;t just plug in cables and hope for the best. We genuinely love building systems that just <em>work</em> — effortlessly and reliably.
                            </p>
                            <p>
                                Whether it&apos;s a multi-camera broadcast studio, an advanced AoIP network, or a complex corporate AV environment, we approach every project with the same level of care, precision, and a bit of geeky enthusiasm. We believe that great technology should make your life easier, not more complicated.
                            </p>
                            <p className="text-neutral-300 font-medium pt-4">
                                Let&apos;s build something amazing together!
                            </p>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden border border-neutral-800/60 aspect-square sm:aspect-[4/3] lg:aspect-square"
                    >
                        <Image
                            src="/images/us.jpg"
                            alt="The ProMediaIT Team"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <p className="text-xl text-white font-medium mb-1">The ProMediaIT Team</p>
                            <p className="text-indigo-400 text-sm">Ready for the next challenge</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
