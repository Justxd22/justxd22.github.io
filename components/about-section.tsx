"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedBalls from "@/components/animated-balls"

export default function AboutSection() {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            z: -40,
            scale: 0.9,
        },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            z: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                delay: custom,
            },
        }),
    }

    const stats = [
        { number: "3+", label: "Years Programming" },
        { number: "100+", label: "Open Source projects on my github" },
        { number: "20+", label: "Technologies" },
        { number: "100%", label: "Hackathon Delivery Rate" },
    ]

    return (
        <section className="min-h-screen relative overflow-hidden py-20">
            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
                    {/* Left Side - About Content */}
                    <motion.div
                        className="space-y-8"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                    >
                        <div>
                            <h2 className="text-6xl font-bold text-white mb-6 font-dmserif">
                                About <span className="text-teal-300">Me</span>
                            </h2>
                            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                                <p className="iii">
                                    I’m a <span className="font-semibold text-teal-300">Software & Mechanical Engineer</span> with a passion for building—from low-level systems to full-stack apps. I focus on
                                    <span className="font-semibold text-teal-300"> Web3, embedded systems</span>, and scalable web platforms.
                                </p>
                                <p className="iii">
                                    I’ve contributed to <span className="font-semibold text-teal-300">CakeWallet</span> and
                                    <span className="font-semibold text-teal-300"> Monero</span>, and built projects like “SkySnap,” a smart ESP32-powered weather station.
                                </p>
                                <p className="iii">
                                    Outside of coding, I prototype tools on Linux, mentor peers in the
                                    <span className="font-semibold text-teal-300"> African Leadership SE Program</span>, and thrive in fast-paced hackathons.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 ii">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="glass-card rounded-[20px] p-4 relative overflow-hidden text-center"
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.3 + index * 0.1}
                                >
                                    <AnimatedBalls />
                                    <div className="glass-overlay"></div>
                                    <div className="relative z-10">
                                        <div className="text-2xl font-bold text-teal-300 mb-1">{stat.number}</div>
                                        <div className="text-sm text-slate-300">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Profile Card */}
                    <motion.div
                        className="glass-card rounded-[80px] p-8 relative overflow-hidden"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                    >
                        <AnimatedBalls />
                        <div className="glass-overlay"></div>
                        <div className="relative z-10 text-center">
                            {/* Profile Image */}
                            <div className="w-48 h-48 mx-auto mb-6 rounded-4xl overflow-hidden bg-gradient-to-br from-teal-300/20 to-slate-800/50 p-2">
                                <div className="w-full h-full rounded-4xl overflow-hidden">
                                    <Image
                                        src="/pic2.png"
                                        alt="Profile"
                                        width={200}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Profile Info */}
                            <h3 className="text-3xl font-bold text-white mb-2">Noor Amjad</h3>
                            <p className="text-teal-300 text-lg mb-4">Full-Stack Developer</p>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Crafting digital solutions with passion and precision. Always ready for the next challenge.
                            </p>

                            {/* Download CV Button */}
                            <a href="/cv.pdf" download>
                                <motion.button
                                    className="mt-6 bg-teal-300/20 hover:bg-teal-300/30 backdrop-blur-sm rounded-[20px] px-6 py-3 text-teal-300 font-semibold border border-teal-300/30 transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Download CV
                                </motion.button>
                            </a>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
