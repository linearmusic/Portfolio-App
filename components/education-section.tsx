"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, BookOpen } from "lucide-react"

export default function EducationSection() {
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

  const educationData = [
    {
      degree: "B.S. (Exploration Geophysics)",
      institution: "IIT Kharagpur",
      year: "2022 - 2026",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
    },
    {
      degree: "B.Tech. (Computer Science)",
      institution: "Sikkim Manipal Institute of Technology",
      year: "2021 - 2022",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Sri Chaitanya Junior College, Vishakhapatnam",
      year: "2020",
      icon: <School className="h-10 w-10 text-primary" />,
    },
    {
      degree: "Class X (ICSE)",
      institution: "St. Joseph's School, Darjeeling",
      year: "2018",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and educational background</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted"></div>

            {educationData.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative mb-12 last:mb-0">
                <div className="flex items-center justify-center mb-4">
                  <div className="z-10 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <Card className="max-w-md mx-auto">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    <p className="text-muted-foreground">{item.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Scholastic Achievements</h3>
              <p className="text-lg">
                Selected as one of <span className="font-bold text-primary">5000 Reliance Foundation Scholars</span> in
                recognition of academic excellence and leadership potential.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

