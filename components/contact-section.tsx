"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 text-balance text-center"
        >
          Let's Work Together!
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <Link
                  href="mailto:bilalkhan.designs@gmail.com"
                  className="text-gray-300 hover:text-white hover:text-purple-400 transition"
                >
                  bilalkhan.designs@gmail.com
                </Link>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <p className="text-gray-300">0315-XXXXXXX</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-purple-600 focus:ring-0 transition hover:border-gray-700"
                required
              />
            </motion.div>

            <motion.div variants={item}>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-purple-600 focus:ring-0 transition hover:border-gray-700"
                required
              />
            </motion.div>

            <motion.div variants={item}>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-purple-600 focus:ring-0 transition hover:border-gray-700"
                required
              />
            </motion.div>

            <motion.div variants={item}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition shadow-lg hover:shadow-xl hover:shadow-purple-500/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </Button>
              {isSubmitted && (
                <motion.p
                  className="text-green-400 text-sm mt-2 font-medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
            </motion.div>
          </motion.form>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
          <div className="flex gap-6">
            {[
              { name: "Instagram", url: "https://instagram.com" },
              { name: "Behance", url: "https://behance.net" },
              { name: "Dribbble", url: "https://dribbble.com" },
            ].map((social) => (
              <motion.div key={social.name} whileHover={{ x: 3, scale: 1.1 }} transition={{ duration: 0.2 }}>
                <Link
                  href={social.url}
                  target="_blank"
                  className="text-gray-400 hover:text-white hover:text-purple-400 transition font-medium"
                >
                  {social.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
