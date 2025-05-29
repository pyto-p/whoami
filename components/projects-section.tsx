"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "DeFlakynator",
    description: "DeFlakynator is a tool designed to identify, analyze, and fix flaky tests in JavaScript software projects. It combines machine learning techniques and leverage RAG with Generative AI to not only detect problematic test cases but also provide automated fixes for them.",
    tech: ["Python", "React", "Sass", "Flask"],
    image: "/deflakynator-1.png",
    demo: "#",
    github: "https://github.com/pyto-p/DeFlakynator",
  },
  {
    title: "CalorAide",
    description: "CalorAide provides essential tools to track daily calorie intake with a simple, user-friendly experience that avoids the complexity of typical health apps. It features a calorie goal calculator, weight goal modes (lose, maintain, gain), a calorie tracker, and progress tracking through history and data visualization charts to support users in reaching their health goals.",
    tech: ["Python", "Kivy", "MVC", "Android"],
    image: "/caloraide-1.png",
    demo: "#",
    github: "https://github.com/pyto-p/CalorAide",
  },
  {
    title: "FilmWhisperer",
    description: "FilmWhisperer is an AI-powered movie recommendation app that helps users discover films through natural language input. It simplifies the movie search experience by generating tailored suggestions and providing detailed information using integrated movie databases.",
    tech: ["Next.js", "TailwindCSS", "Node.js", "Express", "Gemini", "TMDb"],
    image: "/film-whisperer-1.png",
    demo: "#",
    github: "https://github.com/pyto-p/film-whisperer-web",
  },
  {
    title: "NavCart",
    description: "Discover and track movies with detailed information and personal watchlists.",
    tech: ["React", "TMDb API", "Firebase", "Material-UI"],
    image: "/placeholder.svg?height=200&width=300",
    demo: "#",
    github: "#",
  },
  {
    title: "Tetris",
    description: "Intelligent chatbot powered by AI with natural language processing capabilities.",
    tech: ["Next.js", "Gemini API", "TypeScript", "Tailwind"],
    image: "/placeholder.svg?height=200&width=300",
    demo: "#",
    github: "#",
  },
  {
    title: "Where2Eat",
    description: "Personal portfolio website with modern design and smooth animations.",
    tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    image: "/placeholder.svg?height=200&width=300",
    demo: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-tokyo-comment">{"// "}</span>
            <span className="text-tokyo-cyan">Featured Projects</span>
          </h2>
          <p className="text-light-fgSecondary dark:text-tokyo-fgDark max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="terminal-window glow-effect group"
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-tokyo-red"></div>
                <div className="terminal-dot bg-tokyo-yellow"></div>
                <div className="terminal-dot bg-tokyo-green"></div>
                <span className="ml-4 text-tokyo-fgDark font-mono text-sm">
                  {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
                </span>
              </div>

              <div className="bg-tokyo-bg">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={400}
                    quality={100}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-tokyo-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-tokyo-cyan font-mono">{project.title}</h3>
                  <p className="text-light-fgSecondary dark:text-tokyo-fgDark mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-tokyo-bgHighlight text-tokyo-blue border border-tokyo-blue/30 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
