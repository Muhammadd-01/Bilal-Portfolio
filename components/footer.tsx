"use client"

import { motion } from "framer-motion"
import { Mail, Smartphone, Facebook, Instagram, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"

export function Footer() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0)

  const currentYear = new Date().getFullYear()

  const taglines = ["Creative • Precise • Innovative", "Design Excellence Daily", "Your Vision, My Design"]

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-500" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com", color: "hover:text-blue-600" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", href: "mailto:bilalkhan.designs@gmail.com", color: "hover:text-purple-500" },
    { icon: Smartphone, label: "WhatsApp", href: "https://wa.me/1234567890", color: "hover:text-green-500" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="border-t border-gray-800 py-12 px-4 bg-black/50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-12 pb-6 border-b border-gray-800">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold text-white mb-2">Bilal Khan</h3>
            <motion.p
              className="text-gray-400 text-sm italic mb-2"
              key={currentTaglineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              "{taglines[currentTaglineIndex]}"
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-white mb-2">Bilal Khan</h3>
            <p className="text-gray-400 text-sm">Vector Design Artist</p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              {["Privacy", "Terms", "Sitemap"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  whileHover={{ x: 2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-400 space-y-1">
              <p>Email: bilalkhan.designs@gmail.com</p>
              <p>WhatsApp: +1 (234) 567-8900</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 justify-center mb-8 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 transition ${social.color}`}
              >
                <Icon size={24} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 pt-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-400 text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Bilal Khan. All rights reserved. Crafted with passion and precision.
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
