"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Fullstack Dev Intern",
    company: "JLabs",
    period: "December 2024 - June 2025",
    location: "Remote",
    description: "Built, maintained and debugged full-stack apps using Laravel, React, and React Native, focusing on UI/UX improvements, error handling, validation logic, and API efficiency.",
    status: "current",
  },
  {
    title: "Fullstack Dev Intern",
    company: "Spiralytics",
    period: "August - September 2024",
    location: "Remote",
    description: "Automated task workflows by integrating Jira with internal tools, boosting productivity and enhancing client access to performance data.",
    status: "completed",
  },
  {
    title: "Fullstack Development Graduate",
    company: "Uplift Code Camp",
    period: "October 2023 - March 2024",
    location: "Online Bootcamp",
    description: "Completed a hands-on full-stack (MERN) program covering modern web development practices and technologies. Developed 6 mini projects for hands-on application of knowledge.",
    status: "completed",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-light-bgSecondary dark:bg-tokyo-bgDark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-tokyo-comment">{"// "}</span>
            <span className="text-tokyo-cyan">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="terminal-window glow-effect"
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-tokyo-red"></div>
                <div className="terminal-dot bg-tokyo-yellow"></div>
                <div className="terminal-dot bg-tokyo-green"></div>
                <span className="ml-4 text-tokyo-fgDark font-mono text-sm">
                  {exp.company.toLowerCase().replace(/\s+/g, "-")}.json
                </span>
                {exp.status === "current" && (
                  <span className="ml-auto text-tokyo-green font-mono text-xs">● ACTIVE</span>
                )}
              </div>

              <div className="p-6 bg-tokyo-bg">
                <div className="font-mono">
                  <div className="text-tokyo-blue mb-2">{"{"}</div>
                  <div className="ml-4 space-y-1">
                    <div>
                      <span className="text-tokyo-cyan">&quot;position&quot;</span>:
                      <span className="text-tokyo-green"> &quot;{exp.title}&quot;</span>,
                    </div>
                    <div>
                      <span className="text-tokyo-cyan">&quot;company&quot;</span>:
                      <span className="text-tokyo-green"> &quot;{exp.company}&quot;</span>,
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-tokyo-orange" />
                        <span className="text-tokyo-fgDark">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-tokyo-purple" />
                        <span className="text-tokyo-fgDark">{exp.location}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-tokyo-cyan">&quot;description&quot;</span>:
                      <span className="text-tokyo-green"> &quot;{exp.description}&quot;</span>
                    </div>
                  </div>
                  <div className="text-tokyo-blue">{"}"}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
