"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    category: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const projectSlug = project.title.toLowerCase().replace(/ /g, "-")

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full p-6 transition-all duration-300"
        style={{
          transform: isHovered ? "translateY(0)" : "translateY(20px)",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-white/80">{project.description}</p>
        <Button variant="secondary" size="sm" className="mt-4" asChild>
          <Link href={`/project/${projectSlug}`}>
            View Project
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
