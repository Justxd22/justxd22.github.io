"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [activeItem, setActiveItem] = useState("Projects")
  const [isVisible, setIsVisible] = useState(false)

  const navItems = [
    { name: "Projects", href: "#Projects" },
    { name: "About", href: "#About" },
  ]

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100) // slight delay for smoother animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-transform duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 py-3 rounded-[1.25rem] bg-[#5cacc666] border border-gray-800 backdrop-blur-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image src="/XD.svg" alt="Logo" width={50} height={50} />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium ${
                  activeItem === item.name
                    ? "text-white"
                    : "text-gray-400 hover:text-white/90 transition-colors"
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
