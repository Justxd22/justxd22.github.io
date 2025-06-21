"use client"
import { motion } from "framer-motion"
import type React from "react"

import { useState } from "react"
import AnimatedBalls from "@/components/animated-balls"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      label: "Email",
      value: "xdjust18@gmail.com",
      href: "mailto:xdjust18@gmail.com",
    },
    {
      label: "Location",
      value: "Available Worldwide",
      href: null,
    },
    {
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
    },
  ]

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          <h2 className="text-6xl font-bold text-white mb-4 font-dmserif">
            Let's <span className="text-teal-300">Connect</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="glass-card rounded-[40px] p-8 relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <AnimatedBalls />
            <div className="glass-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6 ii">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-[15px] px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-teal-300/50 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-[15px] px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-teal-300/50 transition-colors duration-200"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-[15px] px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-teal-300/50 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-[15px] px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-teal-300/50 transition-colors duration-200 resize-none"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-teal-300/20 hover:bg-teal-300/30 backdrop-blur-sm rounded-[20px] px-6 py-3 text-teal-300 font-semibold border border-teal-300/30 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              className="glass-card rounded-[40px] p-8 relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
            >
              <AnimatedBalls />
              <div className="glass-overlay"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4 ii">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-slate-400 text-sm mb-1">{info.label}</span>
                      {info.href ? (
                        <a href={info.href} className="text-white hover:text-teal-300 transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-white">{info.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card rounded-[40px] p-8 relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
            >
              <AnimatedBalls />
              <div className="glass-overlay"></div>
              <div className="relative z-10 ii">
  <h3 className="text-xl font-bold text-white mb-4">Why Work With Me?</h3>
  <ul className="space-y-3 text-slate-300">
    <li className="flex items-start">
      <span className="text-teal-300 mr-2">•</span>
      Full-stack expertise — from embedded systems to modern web apps
    </li>
    <li className="flex items-start">
      <span className="text-teal-300 mr-2">•</span>
      Proven open-source impact (CakeWallet, Monero, Web3 tools)
    </li>
    <li className="flex items-start">
      <span className="text-teal-300 mr-2">•</span>
      Hackathon-winning builder with fast turnaround under pressure
    </li>
    <li className="flex items-start">
      <span className="text-teal-300 mr-2">•</span>
      Strong Linux, DevOps & system-level development background
    </li>
    <li className="flex items-start">
      <span className="text-teal-300 mr-2">•</span>
      Clear communication and ownership from idea to delivery
    </li>
  </ul>
</div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
