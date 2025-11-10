"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-gray-800"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-purple-400 transition-colors duration-300">
            Bilal Khan
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto" } : { height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white hover:text-purple-400 transition-colors duration-300 text-left"
                whileHover={{ x: 5 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
