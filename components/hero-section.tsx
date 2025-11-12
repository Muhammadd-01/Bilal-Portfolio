"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// ------------------- Typing Animation Component -------------------
export function TypingAnimation({
  words,
  speed = 50,
  delayBetweenWords = 3000,
  loop = true,
}: {
  words: string[]
  speed?: number
  delayBetweenWords?: number
  loop?: boolean
}) {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index]
    let timer: NodeJS.Timeout

    if (!isDeleting && displayedText.length < currentWord.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1))
      }, speed)
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1))
      }, speed / 2)
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords)
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, index, words, speed, delayBetweenWords])

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// ------------------- Hero Section Component -------------------
export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  }

  const taglines = [
    "Crafting vectors that captivate",
    "Precision meets creativity",
    "Your vision, my design",
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(targetId)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset

        const startPosition = window.scrollY
        const distance = offsetPosition - startPosition
        const duration = 2000
        let start: number | null = null

        const ease = (t: number) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime
          const elapsed = currentTime - start
          const progress = Math.min(elapsed / duration, 1)
          const easeProgress = ease(progress)

          window.scrollTo(0, startPosition + distance * easeProgress)

          if (progress < 1) requestAnimationFrame(animation)
        }

        requestAnimationFrame(animation)
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Hero Image Circle Animation */}
        <motion.div
          variants={item}
          className="mb-12 flex justify-center relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {/* Rotating border */}
          <div className="relative w-64 h-64 rounded-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent animate-spin-slow bg-gradient-to-tr from-transparent via-purple-500 to-transparent blur-sm opacity-80"></div>
            <div className="absolute inset-[3px] rounded-full bg-gray-900 overflow-hidden flex items-center justify-center">
              <motion.img
                src="/BilalPic.jpeg"
                alt="Bilal Khan"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={item}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 text-balance">
            Bilal Khan
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={item}>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 text-balance">
            Vector Design Artist
          </p>
        </motion.div>

        {/* Typing Animation */}
        <motion.div variants={item} className="mb-8">
          <motion.p className="text-lg text-gray-400 text-balance min-h-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            <TypingAnimation words={taglines} loop={true} speed={40} delayBetweenWords={3000} />
          </motion.p>
        </motion.div>

        {/* Buttons */}
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
                      : i === 2
                      ? "border-gray-600 text-gray-300 hover:text-white hover:border-white bg-transparent hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-white/20"
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

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  )
}
