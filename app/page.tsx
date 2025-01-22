"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code, Blocks, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { DotPattern } from "@/components/ui/dot-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background/90 to-background/80 text-foreground overflow-hidden">
      {/* Animated Background Patterns */}
      <AnimatedGridPattern 
        className="absolute inset-0 opacity-10"
        width={40} 
        height={40} 
        strokeDasharray="4 4"
      />
      <DotPattern 
        className="absolute inset-0 opacity-20" 
        width={20} 
        height={20}
      />

      <main className="container relative mx-auto px-4 py-16 md:px-8 lg:px-16 max-w-6xl">
        {/* Hero Section */}
        <motion.section 
          className="relative space-y-4"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-2"
          >
            <Badge variant="secondary" className="mb-4">
              Available for hire
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Yusuf Yıldız
            </h1>
            <AnimatedShinyText className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Frontend Web Developer
            </AnimatedShinyText>
          </motion.div>

          <motion.p 
            className="max-w-2xl text-lg text-muted-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I build accessible, pixel-perfect digital experiences for the web. 
            Currently working at JuniusTech, focusing on creating innovative and high-quality user interfaces.
          </motion.p>

          <motion.div 
            className="flex gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="mailto:ysfyldz0077@gmail.com">
              <Button className="group">
                Contact Me
                <Mail className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
            <Link href="https://github.com/YusufStar" target="_blank">
              <Button variant="outline" className="group">
                View Projects
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="mt-32 space-y-8"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center gap-2">
            <Blocks className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-6">
            {/* JuniusTech Full-time */}
            <Card className="group relative overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">J</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Frontend Web Developer</h3>
                        <p className="text-sm text-muted-foreground">JuniusTech · Full-time</p>
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span>Dec 2024 - Jan 2025 · 2 mos</span>
                      <span>·</span>
                      <span>Türkiye · Remote</span>
                    </div>
                  </div>
                  <Badge variant="outline">Current</Badge>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    Frontend development with a focus on:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Frontend Development</Badge>
                    <Badge variant="secondary">UI Development</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medyanes 360 */}
            <Card className="group relative overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="text-secondary font-semibold">M</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Full-stack Developer</h3>
                        <p className="text-sm text-muted-foreground">Medyanes 360 · Full-time</p>
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span>Oct 2023 - May 2024 · 8 mos</span>
                      <span>·</span>
                      <span>Türkiye · Remote</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    My tasks included following projects, meeting with customers, controlling employee tasks, 
                    component development, and component testing. I am happy to work with Medyanes 360 team.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Full-Stack Development</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Project Management</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* JuniusTech Part-time */}
            <Card className="group relative overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">J</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Frontend Web Developer</h3>
                        <p className="text-sm text-muted-foreground">JuniusTech · Part-time</p>
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span>Jan 2024 - Apr 2024 · 4 mos</span>
                      <span>·</span>
                      <span>Türkiye · Remote</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    Frontend development focusing on:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Full-Stack Development</Badge>
                    <Badge variant="secondary">Frontend Development</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section 
          className="mt-32 space-y-8"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="mt-32 space-y-8"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              // Frontend Core
              "HTML", "CSS", "JavaScript", "TypeScript",
              "React", "Next.js", "React Native", "Tailwind CSS",
              
              // Frontend Libraries & Frameworks
              "Monaco Editor", "Tamagui UI", "Material UI", "Framer Motion",
              
              // Backend & Database
              "Node.js", "Firebase", "Socket.io", "OpenAI",
              
              // Development Tools
              "Git", "Expo", "Clerk Auth", "Google Auth"
            ].map((skill) => (
              <Card 
                key={skill} 
                className="group hover:border-primary/50 transition-all hover:-translate-y-1 hover:bg-gradient-to-br from-primary/5 to-secondary/5"
              >
                <CardContent className="p-4 text-center">
                  <span className="text-sm font-medium">{skill}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="mt-32 text-center"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl font-bold mb-8">Let&apos;s Connect</h2>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/YusufStar" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/yusuf-star" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:ysfyldz0077@gmail.com">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}