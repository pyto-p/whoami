"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/pyto-p",
    color: "text-tokyo-fg hover:text-tokyo-blue",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sbstntmprl/",
    color: "text-tokyo-fg hover:text-tokyo-blue",
  },
  {
    name: "daily.dev",
    icon: Mail,
    url: "https://app.daily.dev/pytop",
    color: "text-tokyo-fg hover:text-tokyo-green",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4">
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
            <span className="text-tokyo-cyan">Get In Touch</span>
          </h2>
          <p className="text-light-fgSecondary dark:text-tokyo-fgDark max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="terminal-window"
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-tokyo-red"></div>
              <div className="terminal-dot bg-tokyo-yellow"></div>
              <div className="terminal-dot bg-tokyo-green"></div>
              <span className="ml-4 text-tokyo-fgDark font-mono text-sm">contact-form.tsx</span>
            </div>

            <div className="h-full p-6 bg-tokyo-bg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-tokyo-cyan font-mono text-sm mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-tokyo-bgHighlight border-tokyo-comment text-tokyo-fg font-mono"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-tokyo-cyan font-mono text-sm mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-tokyo-bgHighlight border-tokyo-comment text-tokyo-fg font-mono"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-tokyo-cyan font-mono text-sm mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-tokyo-bgHighlight border-tokyo-comment text-tokyo-fg font-mono min-h-[120px]"
                    placeholder="This is not currently implemented correctly, added this for aesthetic purposes only."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-tokyo-blue hover:bg-tokyo-blue/80 text-white font-mono glow-effect"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-tokyo-red"></div>
                <div className="terminal-dot bg-tokyo-yellow"></div>
                <div className="terminal-dot bg-tokyo-green"></div>
                <span className="ml-4 text-tokyo-fgDark font-mono text-sm">social-links.json</span>
              </div>

              <div className="p-6 bg-tokyo-bg">
                <h3 className="text-xl font-bold mb-6 text-tokyo-cyan font-mono">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-4 p-4 bg-tokyo-bgHighlight rounded-lg transition-all duration-300 hover:bg-tokyo-bgHighlight/80 ${link.color}`}
                    >
                      <link.icon className="w-6 h-6" />
                      <span className="font-mono">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-tokyo-red"></div>
                <div className="terminal-dot bg-tokyo-yellow"></div>
                <div className="terminal-dot bg-tokyo-green"></div>
                <span className="ml-4 text-tokyo-fgDark font-mono text-sm">availability.md</span>
              </div>

              <div className="p-6 bg-tokyo-bg">
                <div className="font-mono text-sm">
                  <div className="text-tokyo-comment mb-2"># Current Status</div>
                  <div className="text-tokyo-green mb-2">● Available for new opportunities</div>
                  <div className="text-tokyo-fg">
                    <p className="mb-2">
                      I'm currently open to freelance projects and full-time opportunities. Let's build something
                      amazing together!
                    </p>
                    <div className="text-tokyo-blue">{">"} Response time: Usually within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
