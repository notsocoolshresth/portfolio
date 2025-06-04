import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { AchievementCard } from "@/components/achievement-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">AI & Data Science Student | Full-Stack Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Shresth Kasyap
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              B.Tech student at IIT Patna specializing in AI & Data Science. I build intelligent systems and full-stack
              applications with a passion for problem-solving and innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
                asChild
              >
                <Link href="#projects">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                asChild
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/notsocoolshresth" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/shresth-kasyap-735a84270" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:shresthkasyap19@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:+917029730032">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/shresth.jpeg?height=600&width=600"
                  alt="Shresth Kasyap"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a passionate B.Tech student at IIT Patna, specializing in Artificial Intelligence and Data
                  Science. With a strong foundation in algorithms, machine learning, and full-stack development, I love
                  building innovative solutions that bridge the gap between AI and practical applications.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My journey in tech has been marked by consistent academic excellence and a drive to solve complex
                  problems. From developing intelligent chess bots using CNNs to creating full-stack web applications, I
                  enjoy working across the entire technology stack.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not coding, you can find me solving algorithmic challenges on competitive programming
                  platforms, exploring new AI research papers, or contributing to open-source projects.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Shresth Kasyap</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">shresthkasyap19@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Patna, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">CGPA</div>
                    <div className="font-medium text-green-500">8.69/10.0</div>
                  </div>
                </div>                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white" asChild>
                    <a href="https://drive.google.com/file/d/1gs2ms2w8aSefmBkXpx0r51ujBKbiAjmb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Technical Skills" subtitle="Technologies I work with" />          <div className="mt-16 space-y-12">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-6 text-center">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                <SkillBadge name="Python" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="C++" />
                <SkillBadge name="C" />
                <SkillBadge name="HTML/CSS" />
                <SkillBadge name="Bash" />
              </div>
            </div>            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-6 text-center">Frameworks & Libraries</h3>
              <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                <SkillBadge name="React.js" />
                <SkillBadge name="Node.js" />
                <SkillBadge name="Express" />
                <SkillBadge name="Flask" />
                <SkillBadge name="TensorFlow" />
                <SkillBadge name="PyTorch" />
              </div>
            </div>            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                <SkillBadge name="SQL" />
                <SkillBadge name="Git" />
                <SkillBadge name="MongoDB" />
                <SkillBadge name="Postman" />
                <SkillBadge name="JWT" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">            <ProjectCard
              title="Site Builder"
              description="A full-stack web application enabling non-technical users to design websites without coding. Features drag-and-drop functionality, real-time preview, and JWT authentication."
              tags={["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "DND-kit"]}
              image="/site_builder.png"
              demoUrl="https://it-project-2025.vercel.app/"
              repoUrl="https://github.com/notsocoolshresth"
            />            <ProjectCard
              title="CNN Chess Bot"
              description="An intelligent chess bot using CNN + MiniMax architecture. Features dual TensorFlow CNN models for move prediction and an interactive GUI with heatmap overlays."
              tags={["Python", "TensorFlow", "Neural Networks", "Pygame", "python-chess", "AI"]}
              image="/chess.png"
              demoUrl="#"
              repoUrl="https://github.com/notsocoolshresth"
            />            <ProjectCard
              title="Railway Booking System"
              description="A comprehensive railway database management system with intelligent ticket management, seat allocation, RAC handling, and real-time availability tracking."
              tags={["React.js", "MySQL", "Flask", "Python", "Database Design", "REST API"]}
              image="/railway_project.png"
              demoUrl="#"
              repoUrl="https://github.com/notsocoolshresth"
            />
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
              asChild
            >
              <Link href="https://github.com/notsocoolshresth" target="_blank" rel="noopener noreferrer">
                View More Projects <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Achievements" subtitle="Recognition and accomplishments" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <AchievementCard
              title="JEE Advanced 2023"
              description="Secured AIR 3399 (top 1.8%) among 1,89,744 candidates"
              category="academic"
              rank="AIR 3399"
            />
            <AchievementCard
              title="JEE Mains 2023"
              description="Achieved AIR 5717 among 1M+ applicants"
              category="academic"
              rank="AIR 5717"
            />
            <AchievementCard
              title="WBJEE 2023"
              description="Achieved AIR 97 among 1Lakh+ participants"
              category="academic"
              rank="AIR 97"
            />
            <AchievementCard
              title="LeetCode Rating"
              description="Maximum rating 1668 (top 3%)"
              category="coding"
              rank="Top 3%"
            />
            <AchievementCard
              title="CodeChef Contest"
              description="Ranked 317 (top 1.6%) in Starters 165 Div 2"
              category="competitive"
              rank="Rank 317"
            />
            <AchievementCard
              title="Problem Solving"
              description="Solved 250+ algorithmic problems across platforms"
              category="coding"
              rank="250+ Problems"
            />
            <AchievementCard
              title="Codeforces"
              description="Maximum rating 1315"
              category="competitive"
              rank="Rating 1315"
            />
            <AchievementCard
              title="LeetCode Biweekly 153"
              description="Ranked 1595 out of 26,545 (top 6%)"
              category="competitive"
              rank="Top 6%"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">shresthkasyap19@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Mobile</div>
                    <div className="font-medium">+91-7029730032</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/shresth-kasyap-735a84270</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/notsocoolshresth</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Open to internships and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Shresth
              </span>
              <span className="text-white">Kasyap</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Shresth Kasyap. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/notsocoolshresth" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/shresth-kasyap-735a84270" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:shresthkasyap19@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="tel:+917029730032">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
