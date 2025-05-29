"use client"

import { motion } from "framer-motion"
import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-light-bgSecondary dark:bg-tokyo-bgDark border-t border-light-border dark:border-tokyo-comment">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-tokyo-blue" />
            <span className="font-mono text-light-fgSecondary dark:text-tokyo-fgDark">pyto-p.dev</span>
          </div>

          <div className="flex items-center gap-2 text-light-fgSecondary dark:text-tokyo-fgDark font-mono text-sm">
            <span>Put your thoughts on programming.</span>
          </div>

          <div className="text-light-fgSecondary dark:text-tokyo-fgDark font-mono text-sm">
            © 2025 Sebastian Temporal / pyto-p
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
