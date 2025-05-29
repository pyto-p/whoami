"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const achievements = [
  "2x Full Stack Dev Intern",
  "9x President's Lister",
  "Bootcamp Graduate",
  "Computer Science Graduate",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
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
            <span className="text-tokyo-cyan">About Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-tokyo-red"></div>
                <div className="terminal-dot bg-tokyo-yellow"></div>
                <div className="terminal-dot bg-tokyo-green"></div>
                <span className="ml-4 text-tokyo-fgDark font-mono text-sm">about.md</span>
              </div>
              <div className="p-6 bg-tokyo-bg">
                <div className="font-mono text-sm">
                  <div className="text-tokyo-comment mb-4"># About Sebastian</div>
                  <div className="text-tokyo-fg leading-relaxed">
                    <p className="mb-4">
                      Hello! I'm Sebastian, a passionate Fullstack Developer with a love for creating innovative web
                      applications. My journey in programming started with curiosity and has evolved into a career
                      focused on building scalable, user-friendly solutions.
                    </p>
                    <p className="mb-4">
                      I specialize in modern web technologies and enjoy working on both frontend and backend
                      development. When I'm not coding, you can find me exploring new technologies, contributing to
                      open-source projects, or sharing knowledge with the developer community.
                    </p>
                    <p className="text-tokyo-blue">{">"} Always learning, always building, always improving.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="terminal-window group cursor-pointer">
              <div className="terminal-header">
                <div className="terminal-dot bg-tokyo-red"></div>
                <div className="terminal-dot bg-tokyo-yellow"></div>
                <div className="terminal-dot bg-tokyo-green"></div>
                <span className="ml-4 text-tokyo-fgDark font-mono text-sm">ascii_portrait.txt</span>
              </div>
              <div className="relative bg-tokyo-bg p-6 overflow-hidden">
                {/* ASCII Art - visible by default */}
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <div className="font-mono text-sm text-tokyo-comment"># ASCII Self-Portrait</div>
                  <pre className="font-mono text-center text-xs md:text-sm text-tokyo-fg whitespace-pre overflow-hidden">
                    {`                    
       .^~~:        
     ~YGB##B5!      
   .Y#BBGPPPPB5^    
   ~&GJ?7!777?GY    
   :JJJYJ77YYJ?7.   
   ^7?7??77??77?7   
    ~7???7????7~.   
      7J?77??J:     
    .77JJ?JJJ??:    
^7YPB&!~7???!:5#G5?!
#&&&##J.:!?!:.G&&&##
######5^^J557^G#####`}
                  </pre>
                  <p className="font-mono text-sm text-tokyo-blue mt-4">{">"} Code is just another form of code.</p>
                </div>

                {/* Real Picture - visible on hover */}
                <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                  <div className="font-mono text-sm text-tokyo-comment mb-4"># Real Portrait</div>
                  <div className="flex-1 flex items-center justify-center">
                    <Image
                      src={"/me.jpg"}
                      alt="Sebastian Temporal"
                      width={800}
                      height={400}
                      quality={100}
                      className="w-56 h-56 rounded-lg object-cover border-2 border-tokyo-blue"
                    />
                  </div>
                  <p className="font-mono text-sm text-tokyo-blue mt-4">{">"} The person behind the code.</p>
                </div>

                {/* Hover hint */}
                <div className="absolute bottom-2 right-2 text-tokyo-comment text-xs font-mono opacity-50">
                  hover me!
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 font-mono text-tokyo-cyan">Achievements</h3>
              <div className="flex flex-wrap gap-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-tokyo-bgHighlight text-tokyo-cyan border border-tokyo-blue font-mono"
                    >
                      {achievement}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
