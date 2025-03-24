"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, LineChart, Laptop, Palette, BarChart, Briefcase } from "lucide-react"

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "MongoDB","Node JS","React JS" , "Express JS", "REST API"],
    },
    {
      title: "Technical Tools",
      icon: <Laptop className="h-6 w-6 text-primary" />,
      skills: ["Figma","MATLAB","Postman API","Canva", "MS PowerPoint", "MS Excel", "Illustrator", "Adobe Premiere Pro"],
    },
    {
      title: "Finance & Market Analysis",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      skills: ["Equity Research", "Fundamental Analysis", "Technical Analysis", "Options Trading"],
    },
    {
      title: "Soft Skills",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      skills: ["Project Management", "Team Leadership", "Research", "Analysis", "Communication"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My technical skills and Areas of Expertise</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

