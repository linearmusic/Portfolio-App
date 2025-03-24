"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const experiences = [
    {
      title: "Financial Analyst",
      company: "Fund Vice",
      period: "Jan '24 - Feb '24",
      description: "Conducted market sentiment analysis using data-driven approaches.",
      responsibilities: [
        "Gathered and analyzed extensive market data, ensuring research accuracy.",
        "Identified uptrends, downtrends, and correlations between market factors.",
        "Translated research findings into actionable insights for strategic decision-making.",
        "Managed end-to-end market analysis processes, demonstrating strong project management skills.",
      ],
    },
    {
      title: "Senior Research Analyst (Head)",
      company: "Finance & Economics Club",
      period: "Nov '23 - Present",
      description: "Led financial workshops, case study competitions, and trading events on campus.",
      responsibilities: [
        "Conducted in-depth financial analysis and report writing.",
        "Selected as one of 26 members from 900+ students for the Trade Club after rigorous selection.",
        "Organized and facilitated financial education events for students.",
      ],
    },
    {
      title: "Financial Analyst",
      company: "International Finance Students Association",
      period: "Dec '23 - Aug '24",
      description: "Organized finance workshops, case studies, and global trading events under the IFSA Network.",
      responsibilities: [
        "Led industry projects to solve real-world financial challenges.",
        "Conducted impactful research in the Finance & Consulting domain.",
        "Secured the role after a rigorous selection process, including financial report writing & interview.",
      ],
    },
    {
      title: "Design Team Member",
      company: "Technology Literary Society",
      period: "Nov '22 - Dec '24",
      description: "Designed eye-catching posters for events, ensuring effective promotional materials.",
      responsibilities: [
        "Created engaging social media content to enhance the society's digital presence.",
        "Played a key role in organizing society events.",
        "Collaborated with team members to develop creative marketing materials.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional experience and positions of responsibility
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative pl-8 border-l-2 border-muted">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-12 last:mb-0 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary"></div>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <Badge className="mb-2">{exp.company}</Badge>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <CardDescription>{exp.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

