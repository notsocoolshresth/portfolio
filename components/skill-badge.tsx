"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SkillBadgeProps {
  name: string
  level?: number
  icon?: string
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  // Use a mapping for tech icons or a default placeholder
  const getIconPath = () => {
    if (icon) return icon;
    
    // Special mappings for specific technologies
    const iconMappings: Record<string, string> = {
      "React.js": "reactjs",
      "Node.js": "nodejs",
      "HTML/CSS": "htmlcss",
      "TensorFlow": "tensorflow",
      "PyTorch": "pytorch",
      "Express": "express",
      "Flask": "flask",
      "Git": "git",
      "MongoDB": "mongodb",
      "Postman": "postman",
      "JWT": "jwt",
      "SQL": "sql",
      "JavaScript": "javascript",
      "Python": "python",
      "C++": "c++",
      "C": "c",
      "Bash": "bash"
    };
    
    // Use the mapping if available, otherwise convert the name to lowercase
    const formattedName = iconMappings[name] || name.toLowerCase().replace(/[^\w]/g, '');
    return `/tech-icons/${formattedName}.svg`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex flex-col items-center">
          <div className="w-12 h-12 mb-4 relative flex items-center justify-center">
            <Image 
              src={getIconPath()}
              alt={`${name} logo`}
              width={48}
              height={48}
              className="object-contain"
              onError={(e) => {
                // Fallback to a generic icon if the image fails to load
                (e.target as HTMLImageElement).src = "/tech-icons/generic-code.svg";
              }}
            />
          </div>
          <div className="text-center font-medium text-lg">{name}</div>
        </div>
      </div>
    </motion.div>
  )
}
