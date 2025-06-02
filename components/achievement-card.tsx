"use client"

import { motion } from "framer-motion"
import { Trophy, Target, Code } from "lucide-react"

interface AchievementCardProps {
  title: string
  description: string
  category: "competitive" | "academic" | "coding"
  rank?: string
}

export function AchievementCard({ title, description, category, rank }: AchievementCardProps) {
  const getIcon = () => {
    switch (category) {
      case "competitive":
        return <Trophy className="h-5 w-5 text-yellow-400" />
      case "academic":
        return <Target className="h-5 w-5 text-blue-400" />
      case "coding":
        return <Code className="h-5 w-5 text-green-400" />
      default:
        return <Trophy className="h-5 w-5 text-purple-400" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-4 h-full transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            {getIcon()}
            <h4 className="font-semibold text-sm">{title}</h4>
          </div>
          <p className="text-zinc-400 text-sm mb-2">{description}</p>
          {rank && <div className="text-xs font-medium text-purple-400">{rank}</div>}
        </div>
      </div>
    </motion.div>
  )
}
