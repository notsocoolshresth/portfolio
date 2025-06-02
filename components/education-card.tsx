"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

interface EducationCardProps {
  institution: string
  degree: string
  duration: string
  grade: string
  gradeType: string
}

export function EducationCard({ institution, degree, duration, grade, gradeType }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-sm text-zinc-500">{duration}</div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2">{institution}</h3>
          <p className="text-zinc-400 mb-4">{degree}</p>

          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium">
              {gradeType}: {grade}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
