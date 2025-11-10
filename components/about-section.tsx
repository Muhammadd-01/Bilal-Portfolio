"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function AboutSection() {
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  }

  const skillsWithInfo = [
    { skill: "Adobe Illustrator", proficiency: "Expert" },
    { skill: "Figma", proficiency: "Advanced" },
    { skill: "Adobe Photoshop", proficiency: "Advanced" },
    { skill: "CorelDRAW", proficiency: "Intermediate" },
    { skill: "Logo Design", proficiency: "Specialized" },
    { skill: "Branding", proficiency: "Specialized" },
    { skill: "UI/UX Design", proficiency: "Advanced" },
    { skill: "Vector Illustration", proficiency: "Expert" },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-balance"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border-gray-800 p-8 mb-8 hover:border-purple-600/30 hover:bg-gray-900/70 transition duration-300">
              <p className="text-gray-300 text-lg leading-relaxed text-balance mb-6">
                I'm Bilal Khan — a passionate vector design artist focused on crafting bold, precise, and creative
                visuals. I turn concepts into high-quality digital art that stands out across every platform.
              </p>
              <p className="text-gray-400 text-md leading-relaxed text-balance">
                With over 5 years of experience, I specialize in creating vector illustrations, logos, branding assets,
                and custom graphics that elevate brands and captivate audiences. I believe in combining technical
                precision with artistic vision to deliver designs that not only look exceptional but also communicate
                effectively.
              </p>
            </Card>
          </motion.div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Expertise</h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skillsWithInfo.map((skillItem) => (
                <motion.div
                  key={skillItem.skill}
                  variants={item}
                  className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-purple-600/50 hover:bg-gray-800/80 transition duration-300 group"
                  whileHover={{ scale: 1.03, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 font-medium">{skillItem.skill}</span>
                    <motion.span
                      className="text-xs px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skillItem.proficiency}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
