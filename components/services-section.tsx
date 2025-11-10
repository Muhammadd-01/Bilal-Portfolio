"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { SERVICES } from "@/lib/constants"

export function ServicesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-balance"
        >
          What I Offer
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service, index) => (
            <motion.div key={service.title} variants={item}>
              <Card className="bg-gray-900/50 border-gray-800 p-6 hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-900/30 hover:bg-gray-900/80 transition duration-300 group cursor-pointer h-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition duration-300"
                  whileHover={{ opacity: 0.15 }}
                />
                <motion.h3
                  className="text-xl font-semibold text-white mb-2 relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-400 relative z-10 leading-relaxed">{service.description}</p>
                <motion.div
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl">→</span>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
