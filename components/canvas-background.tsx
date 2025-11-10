"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function CanvasBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 1)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 50

    const curves: THREE.Line[] = []

    // Create more organic, flowing vector paths
    for (let i = 0; i < 12; i++) {
      const points: THREE.Vector3[] = []
      const count = 200

      for (let j = 0; j < count; j++) {
        const t = j / count
        // Create smooth, flowing curves like vector paths
        const x = Math.sin(t * Math.PI * 3 + i * 0.5) * 45 * Math.cos(t * Math.PI * 1.5 + i)
        const y = Math.cos(t * Math.PI * 3.5 + i * 0.5) * 45 * Math.sin(t * Math.PI * 1.5 + i)
        const z = Math.sin(t * Math.PI * 2.5 + i * 0.3) * 25 * Math.cos(t * Math.PI + i * 0.2)
        points.push(new THREE.Vector3(x, y, z))
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      // Create gradient-like colors typical of vector design
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color().setHSL((i % 6) / 6, 0.6, 0.55),
        linewidth: 2,
        transparent: true,
        opacity: 0.25,
      })

      const line = new THREE.Line(geometry, material)
      scene.add(line)
      curves.push(line)
    }

    // Create artistic particles scattered like design elements
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 200
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 250
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.8,
      color: 0xb8a6db,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.4,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Animation
    let animationFrameId: number
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      particles.rotation.x += 0.00002
      particles.rotation.y += 0.00003

      // Animate vector curves with smooth, organic motion
      curves.forEach((curve, index) => {
        curve.rotation.x += 0.00008 * Math.sin(index * 0.5)
        curve.rotation.y += 0.00012 * Math.cos(index * 0.5)
        curve.rotation.z += 0.00004 * Math.sin(index * 0.3)
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
}
