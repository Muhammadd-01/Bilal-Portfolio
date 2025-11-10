"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { PORTFOLIO_PROJECTS } from "@/lib/constants"

export function PortfolioSection() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter((p) => p.category === filter)

  const categories = ["all", "logos", "illustrations", "branding"]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-balance"
        >
          My Work
        </motion.h2>

        {/* Filter tabs with enhanced styling */}
        <motion.div
          className="flex gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                filter === cat
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-gray-900 text-gray-300 hover:text-white border border-gray-800 hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-500/20"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={item}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.p
                      className="text-white text-lg font-semibold"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <motion.p className="col-span-full text-center text-gray-400 py-12">
                No projects found in this category.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
