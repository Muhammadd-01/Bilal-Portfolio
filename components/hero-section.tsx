"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TypingAnimation } from "./typing-animation"

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  }

  const taglines = ["Crafting vectors that captivate", "Precision meets creativity", "Your vision, my design"]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(targetId)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        // Create smooth scroll animation with setTimeout for slower scroll
        const startPosition = window.scrollY
        const distance = offsetPosition - startPosition
        const duration = 2000 // 2 seconds for slower smooth scroll
        let start: number | null = null

        const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime
          const elapsed = currentTime - start
          const progress = Math.min(elapsed / duration, 1)
          const ease_progress = ease(progress)

          window.scrollTo(0, startPosition + distance * ease_progress)

          if (progress < 1) {
            requestAnimationFrame(animation)
          }
        }

        requestAnimationFrame(animation)
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div className="max-w-4xl mx-auto text-center" variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="mb-8 flex justify-center relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {/* Animated shiny border */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute w-48 h-48 rounded-full border-2 border-transparent"
              style={{
                backgroundImage: "conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.8), transparent 80%)",
                backgroundClip: "padding-box",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>

          <div className="w-40 h-40 rounded-full border-2 border-gray-600 p-1 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative z-10">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-5xl font-bold text-white">BK</div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 text-balance">Bilal Khan</h1>
        </motion.div>

        <motion.div variants={item}>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 text-balance">Vector Design Artist</p>
        </motion.div>

        <motion.div variants={item} className="mb-8">
          <motion.p className="text-lg text-gray-400 text-balance min-h-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            <TypingAnimation words={taglines} loop={true} speed={40} delayBetweenWords={3000} />
          </motion.p>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center flex-wrap mb-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[
            { label: "View My Work", link: "#portfolio" },
            { label: "Get Connected", link: "#contact" },
            { label: "View Resume", link: "/resume.pdf" },
          ].map((btn, i) => (
            <motion.div
              key={btn.label}
              variants={item}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href={btn.link}
                target={btn.label === "View Resume" ? "_blank" : undefined}
                onClick={(e) => handleSmoothScroll(e, btn.link)}
              >
                <Button
                  size="lg"
                  className={
                    i === 1
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
                      : "border-gray-600 text-gray-300 hover:text-white hover:border-white bg-transparent hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-white/20"
                  }
                >
                  {btn.label}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
