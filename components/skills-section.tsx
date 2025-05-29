"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "📘" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind", icon: "💨" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "NestJS", icon: "🐱" },
      { name: "PHP", icon: "🐘" },
      { name: "Laravel", icon: "🔴" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-light-bgSecondary dark:bg-tokyo-bgDark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-tokyo-comment">{"// "}</span>
            <span className="text-tokyo-cyan">Skills & Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="terminal-window"
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-tokyo-red"></div>
                <div className="terminal-dot bg-tokyo-yellow"></div>
                <div className="terminal-dot bg-tokyo-green"></div>
                <span className="ml-4 text-tokyo-fgDark font-mono text-sm">{category.title.toLowerCase()}.json</span>
              </div>

              <div className="p-6 bg-tokyo-bg">
                <h3 className="text-xl font-bold mb-4 text-tokyo-cyan font-mono">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-tokyo-bgHighlight rounded-lg hover:bg-tokyo-bgHighlight/80 transition-colors cursor-pointer group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                      <span className="font-mono text-tokyo-fg group-hover:text-tokyo-blue transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
