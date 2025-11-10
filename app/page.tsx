"use client"
import { CanvasBackground } from "@/components/canvas-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { GoToTop } from "@/components/go-to-top"

export default function Home() {
  return (
    <>
      <CanvasBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <GoToTop />
    </>
  )
}
