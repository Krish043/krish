"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mt-14 px-4 text-center relative z-10 leading-relaxed">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-6 mt-6">
            🚀 SWE Intern @ Crest Data Systems
          </Badge>

          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 pb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ 
              lineHeight: '1.2',
              paddingBottom: '0.25rem' // Added to prevent text clipping
            }}
          >
            Krish Gangajaliya
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            MERN & Next.js | Freelancer | CSE @ Nirma Uni
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I build fast, scalable web apps using MERN & Next.js. With a Minor
            in Applied Math and a growing focus on AI/ML, I bridge logic with
            innovation. I love collaborating, networking, and bringing ideas to
            life.
          </motion.p>

          <motion.p
            className="italic text-md md:text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            &quot;Believe in the version of you that is yet to come!&quot;
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-colors"
              asChild
            >
              <Link href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="px-8 py-3" asChild>
              <Link href="/projects">
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="px-8 py-3" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button variant="ghost" size="sm" asChild>
              <Link href="/about" className="group">
                <span>Learn more about me</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}