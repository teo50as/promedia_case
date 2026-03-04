"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

/**
 * Combined Footer component featuring an "About Us" and "Contact" Bento grid layout.
 * Designed to save vertical space while maintaining an ultra-premium look.
 */
export function Footer() {
    return (
        <footer className="relative bg-neutral-950 border-t border-neutral-900 overflow-hidden pt-24 pb-12">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-900/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

                {/* Unified Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-16">

                    {/* Who We Are Header Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/80 rounded-[2rem] p-8 sm:p-12 flex flex-col justify-center"
                    >
                        <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4 block">
                            Who We Are
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6">
                            Passionate about the perfect setup.
                        </h2>
                        <div className="space-y-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
                            <p>
                                At <strong className="text-neutral-200 font-medium">ProMediaIT</strong>, we don&apos;t just plug in cables and hope for the best. We genuinely love building systems that just <em>work</em> — effortlessly and reliably.
                            </p>
                            <p>
                                Whether it&apos;s a multi-camera broadcast studio, an advanced AoIP network, or a complex corporate AV setup, we approach every project with care, precision, and a bit of geeky enthusiasm.
                            </p>
                        </div>
                    </motion.div>

                    {/* Team Photo Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:col-span-5 relative rounded-[2rem] overflow-hidden border border-neutral-800/80 aspect-[4/3] lg:aspect-auto h-full group"
                    >
                        <Image
                            src="/images/us.jpg"
                            alt="The ProMediaIT Team"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                            <p className="text-lg text-white font-medium mb-1">The ProMediaIT Team</p>
                            <p className="text-indigo-300 text-sm">Ready for the next challenge</p>
                        </div>
                    </motion.div>

                    {/* Contact Details Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/80 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-medium text-white mb-8">Get In Touch</h3>

                        <div className="space-y-6">
                            <a href="tel:+4407393329970" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-950 border border-neutral-800 group-hover:border-indigo-500/30 transition-colors">
                                    <Phone className="w-4 h-4 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500 mb-0.5">Call Us</p>
                                    <p className="text-base font-medium">+44 07393 329 970</p>
                                </div>
                            </a>

                            <a href="mailto:info@promediait.co.uk" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-950 border border-neutral-800 group-hover:border-indigo-500/30 transition-colors">
                                    <Mail className="w-4 h-4 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500 mb-0.5">Email Us</p>
                                    <p className="text-base font-medium">info@promediait.co.uk</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-neutral-300">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-950 border border-neutral-800 shrink-0">
                                    <MapPin className="w-4 h-4 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500 mb-0.5">Our Location</p>
                                    <p className="text-sm font-medium leading-relaxed">
                                        17 Hornbeam Close, Leighton Buzzard<br />
                                        Bedfordshire, LU73FE, UK
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Google Map Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-7 relative rounded-[2rem] overflow-hidden border border-neutral-800/80 aspect-square sm:aspect-video lg:aspect-auto h-full bg-neutral-900"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=ProMediaIT%20Ltd.,%20Hornbeam%20Close,%20Leighton%20Buzzard,%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) brightness(85%) hue-rotate(180deg)' }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="ProMediaIT Location Map"
                            className="absolute inset-0"
                        />
                        {/* Overlay to enforce dark mode style on map if css filters aren't perfect */}
                        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay pointer-events-none" />
                    </motion.div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="pt-8 border-t border-neutral-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-neutral-500">
                        &copy; {new Date().getFullYear()} ProMediaIT. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
