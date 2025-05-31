"use client"

import { motion } from "framer-motion"
import { ChevronDown, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MatrixRain } from "@/components/matrix-rain"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <MatrixRain />

      <div className="max-w-7xl text-center relative z-10 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="terminal-window mx-auto w-full max-w-full"
        >
          <div className="terminal-header">
            <div className="terminal-dot bg-tokyo-red"></div>
            <div className="terminal-dot bg-tokyo-yellow"></div>
            <div className="terminal-dot bg-tokyo-green"></div>
            <span className="ml-4 text-tokyo-fgDark font-mono text-sm">pyto-p@portfolio:~$ neofetch</span>
          </div>

          <div className="p-4 sm:p-6 md:p-8 bg-tokyo-bg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-mono text-left"
            >
              <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center mx-auto">
                {/* ASCII Art */}
                <div className="text-tokyo-blue text-center lg:text-left">
                  <pre className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs leading-tight whitespace-pre overflow-hidden">
                    {`    ███████╗███████╗██████╗  █████╗ ███████╗████████╗██╗ █████╗ ███╗   ██╗
    ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║██╔══██╗████╗  ██║
    ███████╗█████╗  ██████╔╝███████║███████╗   ██║   ██║███████║██╔██╗ ██║
    ╚════██║██╔══╝  ██╔══██╗██╔══██║╚════██║   ██║   ██║██╔══██║██║╚██╗██║
    ███████║███████╗██████╔╝██║  ██║███████║   ██║   ██║██║  ██║██║ ╚████║
    ╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝`}
                  </pre>
                </div>

                {/* Neofetch Info */}
                <div className="space-y-1 sm:space-y-2 text-sm md:text-base">
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">Name:</span>
                    <span className="text-tokyo-fg">Sebastian Audrey Temporal</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">Role:</span>
                    <span className="text-tokyo-fg">Fullstack Developer Intern @JLabs</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">Path:</span>
                    <span className="text-tokyo-fg">Full Stack Development</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">PL:</span>
                    <span className="text-tokyo-fg">JS | TS | Python | Java | PHP | C++</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">FE:</span>
                    <span className="text-tokyo-fg">React | Next.js</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">BE:</span>
                    <span className="text-tokyo-fg">Node.js | Express | NestJS | Laravel</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">DB:</span>
                    <span className="text-tokyo-fg">MongoDB | PostgreSQL | MySQL | Firebase</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">Theme:</span>
                    <span className="text-tokyo-fg">TokyoNight</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">Uptime:</span>
                    <span className="text-tokyo-fg">2+ years coding</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">Memory:</span>
                    <span className="text-tokyo-fg">Always learning!!!</span>
                  </div>

                  {/* Color palette */}
                  <div className="pt-3 sm:pt-4">
                    <div className="flex flex-wrap">
                      <span className="text-tokyo-cyan font-bold min-w-[70px] sm:min-w-[80px]">Colors:</span>
                    </div>
                    <div className="flex gap-1 mt-1 sm:mt-2 flex-wrap">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-tokyo-red rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-tokyo-orange rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-tokyo-yellow rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-tokyo-green rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-tokyo-cyan rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-tokyo-blue rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-tokyo-purple rounded"></div>
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-tokyo-pink rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 text-tokyo-comment text-sm sm:text-base">
                <span className="text-tokyo-green">pyto-p@portfolio</span>
                <span className="text-tokyo-fg">:</span>
                <span className="text-tokyo-blue">~</span>
                <span className="text-tokyo-fg">$ </span>
                <span className="text-tokyo-yellow">echo</span>
                <span className="text-tokyo-fg"> &quot;(P)ut (Y)our (T)houghts (O)n (P)rogramming!&quot;</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10"
        >
          <Button
            size="lg"
            className="bg-tokyo-blue hover:bg-tokyo-blue/80 text-white font-mono glow-effect"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Explore My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-tokyo-purple text-tokyo-purple hover:bg-tokyo-purple hover:text-white font-mono"
            onClick={() => window.open('/TEMPORAL-SEBASTIAN_RESUME.pdf', '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Here&apos;s My C.V
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 relative z-10"
        >
          <ChevronDown className="w-6 h-6 mx-auto text-tokyo-comment animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
