"use client"

import Image from "next/image"
import TypingText from "./TypingText"
import AnimatedBalls from "./animated-balls"

export default function MainContent() {
  const socialLinks = [
    { href: "https://github.com/justxd22", src: "/img/github.svg", alt: "GitHub", className: "git" },
    {
      href: "https://discordapp.com/users/578915464064008205",
      src: "/img/discord.svg",
      alt: "Discord",
      className: "discord",
    },
    { href: "https://www.reddit.com/user/_xd22", src: "/img/reddit.svg", alt: "Reddit", className: "redd" },
    { href: "https://t.me/xd2222", src: "/img/telegram.svg", alt: "Telegram", className: "tele" },
    { href: "https://instagram.com/_.xd22", src: "/img/instagram.svg", alt: "Instagram", className: "instagram" },
    { href: "https://twitter.com/_xd222", src: "/img/twitter.svg", alt: "Twitter", className: "tweet" },
    { href: "mailto:xdjust18@gmail.com", src: "/img/envelope.svg", alt: "Email", className: "email" },
    {
      href: "https://linkedin.com/in/noor-amjad-xd",
      src: "/img/linkedin-in.svg",
      alt: "LinkedIn",
      className: "linked",
    },
  ]

  return (
    <section className="main-section min-h-screen relative overflow-hidden">
      {/* Cards Grid Layout */}
      <div className="relative z-10 container mx-auto px-2 py-30">
        <div className="grid grid-cols-8 grid-rows-5 gap-6 h-[80vh] max-w-7xl max-h-[38rem] m-auto">
          {/* Left Brand Card */}
          <div className="col-span-3 row-span-3 glass-card rounded-[80px] p-8 flex flex-col justify-between relative overflow-hidden -mb-35">
            <AnimatedBalls />
            <div className="glass-overlay"></div>
            <div className="relative z-10 mt-10 ml-6">
              <h1 className="text-4xl font-bold text-white mb-2">
                .<span className="text-teal-300 hh1">xD</span>22
              </h1>
              <TypingText />
            </div>
          </div>

          {/* Main Hero Card */}
          <div className="col-span-5 row-span-3 glass-card rounded-[80px] p-8 flex items-center justify-between relative overflow-hidden">
            <AnimatedBalls />
            <div className="glass-overlay"></div>
            <div className="relative z-10 font-dmserif">
              <h2 className="text-7xl font-bold text-white leading-tight">
                Building Digital
                <br />
                <span className="text-slate-300">Experiences.</span>
              </h2>
            </div>
            <div className="relative z-10">
              <div className="w-48 h-48 relative">
                <Image
                  src="/lap.png"
                  alt="3D Laptop Illustration"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contact Card - Overlapping with Brand Card */}
          <div className="col-span-3 row-span-1 glass-card rounded-[80px] p-6 flex flex-col justify-center relative overflow-hidden -mt-15 -mb-30 z-20 rounded-tl-none">
            <AnimatedBalls />
            <div className="glass-overlay"></div>
            <div className="relative z-10 flex h-full w-full flex-col justify-between gap-4 ml-6">
              <div>
              <p className="text-slate-300 text-base mb-2">Have some</p>
              <p className="text-slate-300 mb-4 text-base font-black">questions?</p>
              </div>
              <h3 className="text-6xl font-bold text-white">Contact me</h3>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="col-span-3 row-span-2 glass-card rounded-[40px] p-6 flex items-center justify-center relative overflow-hidden mb-12 -mr-17">
            <AnimatedBalls />
            <div className="glass-overlay"></div>
            <div className="relative z-10 flex items-center gap-3 flex-wrap justify-center scale-130">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={link.src || "/placeholder.svg"}
                    alt={link.alt}
                    width={32}
                    height={32}
                    className={`social ${link.className} filter brightness-0 invert`}
                  />
                </a>
              ))}

              <a
                href="https://youtu.be/F2YpXC1itEE?t=24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                  <Image
                    src="/img/PEDRO_xD.png"
                    alt="Pedro the raccoon 2024 meme"
                    width={32}
                    height={32}
                    className="pedroo rounded-full"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Eyes Card */}
          <div className="col-span-2 row-span-2 glass-card rounded-[80px] p-6 flex items-center justify-center relative overflow-hidden ml-15">
            <AnimatedBalls />
            <div className="glass-overlay"></div>
            {/* MAKE THE FINAL size be:     
            width: 170px;
            height: 170px; */}
            <div className="catt">

              <div className="face">
                {/* Mouth */}
                <Image
                  src="/img/mouth.svg"
                  alt="mouth"
                  width={31}
                  height={100}
                  className="mouth preventSelect"
                />

                {/* Eyes */}

                <div>
                  <div className="eye eye-left preventSelect eyein">
                    <div className="eye-inner">
                      <div className="eyeafter"></div>
                    </div>
                  </div>
                  <div className="eye eye-right preventSelect eyein">
                    <div className="eye-inner">
                      <div className="eyeafter"></div>
                    </div>
                  </div>

                  {/* Muzzle */}
                  <div className="muzzle"></div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}
