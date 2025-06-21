"use client"
import { motion } from "framer-motion"
import AnimatedBalls from "@/components/animated-balls"

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  type: "work" | "education" | "freelance"
}

const experiences: Experience[] = [
    {
      id: 1,
      title: "Software Engineering Program Graduate",
      company: "African Leadership Experience SE Program",
      period: "2023 – 2024",
      description:
        "Completed an intensive software engineering program focused on full-stack development, DevOps, and collaborative team projects. Led initiatives and participated in competitive challenges like SE Face Off.",
      technologies: ["TypeScript", "React", "Node.js", "Docker", "GitHub Actions"],
      type: "education",
    },
    {
      id: 2,
      title: "Freelance Web3 Developer (Bounty Hunter)",
      company: "Self-Employed / Remote",
      period: "2023 – Present",
      description:
        "Built and improved open-source crypto applications. Worked on front-end redesigns, Dockerized deployments, and internationalization of crypto wallets including CakeWallet and Monerod.",
      technologies: ["React", "Docker", "Next.js", "Git", "Bash", "Markdown"],
      type: "freelance",
    },
    {
      id: 3,
      title: "Full-Stack Developer – GDG Delta Hackathon",
      company: "Google Developer Group",
      period: "March 2024",
      description:
        "Built 'Localista', a full-stack ecommerce solution in 72 hours. Led both front-end and back-end development and contributed to business analysis and pitch presentation.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      type: "work",
    },
    {
      id: 4,
      title: "Smart Weather Station Developer",
      company: "Mansoura University – Mechanical Workshop",
      period: "Dec 2024",
      description:
        "Won first place for developing a smart weather station project using ESP32, sensors, and mechanical housing. Designed hardware, circuits, and full web interface.",
      technologies: ["ESP32", "C", "HTML/CSS", "SolidWorks"],
      type: "work",
    },
    {
      id: 5,
      title: "Mechanical Engineering Student",
      company: "Mansoura University",
      period: "2022 – 2027 (Expected)",
      description:
        "Pursuing a Bachelor's in Mechanical Engineering with coursework in thermal systems, mechanical stress analysis, and embedded design.",
      technologies: ["SolidWorks", "C++", "Blender", "Arduino"],
      type: "education",
    },
    {
        id: 6,
        title: "Moneroo_XD – Monero Mining Blockchain Bot",
        company: "Self‑Employed / GitHub",
        period: "2023 – 2024",
        description:
          "Developed Moneroo_XD, a robust Telegram bot Scaning the monero blockchain for mining info. Supports multiple pool APIs, real‑time updates, Redis caching, and deployment via Railway/Heroku.",
        technologies: ["Python", "Telegram Bot API (Pyrogram)", "Redis", "Heroku", "Railway"],
        type: "work",
      },

      {
        id: 7,
        title: "Monero `monerod` Man‑Page PR",
        company: "monero‑project (open‑source)",
        period: "August 2024",
        description:
          "Authored and merged a man‑page for `monerod` in the official Monero repository—enhancing documentation and usability for CLI users.",
        technologies: ["C++", "Shell", "Man‑Pages"],
        type: "work",
      },
      {
        id: 8,
        title: "CakeWallet Dockerfile Contribution",
        company: "CakeWallet (Wallet Scrutiny / GitHub)",
        period: "July 2024 – February 2025",
        description:
          "Submitted a PR and discussion to provide a fully working Dockerfile for CakeWallet used by hundreds crypto users. Collaborated with Wallet Scrutiny maintainers to enable reproducible Android builds",
        technologies: ["Docker", "Flutter", "Android CI"],
        type: "work",
      },
    {
      id: 9,
      title: "High School Diploma",
      company: "Rehab Saudi School",
      period: "2022",
      description:
        "Graduated with a 99% score, ranking among the top students of my class.",
      technologies: [],
      type: "education",
    }
  ];
  

export default function ExperienceSection() {
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-teal-300/20 text-teal-300 border-teal-300/30"
      case "freelance":
        return "bg-purple-300/20 text-purple-300 border-purple-300/30"
      case "education":
        return "bg-blue-300/20 text-blue-300 border-blue-300/30"
      default:
        return "bg-white/20 text-white border-white/30"
    }
  }

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
            Experience & <span className="text-teal-300">Journey</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            My professional journey and educational background in tech.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-300 to-transparent"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative flex items-start mb-12"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2 + index * 0.1}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-teal-300 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className="ml-20 w-full">
                  <div className="glass-card rounded-[30px] p-6 relative overflow-hidden">
                    <AnimatedBalls />
                    <div className="glass-overlay"></div>
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-4xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-teal-300 font-semibold text-xl">{exp.company}</p>
                        </div>
                        {/* <div className="flex gap-2 mt-2 sm:mt-0">
                          <span
                            className={`px-3 py-1 rounded-full text-xl font-semibold border ${getTypeColor(exp.type)}`}
                          >
                            {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                          </span>
                          <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
                            {exp.period}
                          </span>
                        </div> */}
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 ii">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
