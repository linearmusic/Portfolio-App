"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"

export default function ProjectsSection() {
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

  const projects = [
    {
      title: "Uber Clone with Live Location Tracking",
      description: "Developed a full-stack Uber-like ride-booking application using the MERN stack with real-time location tracking.",
      period: "2023",
      tags: ["React", "Node.js", "Express", "MongoDB", "Google Maps API","JWT", "REST API"],
      details: [
        "Set up user authentication, registration, and login using JWT and middleware authentication.",
        "Implemented user and driver profile management with secure authentication routes.",
        "Designed and integrated User and Captain registration forms with React frontend.",
        "Built RESTful API endpoints for ride requests, tracking, and driver management.",
        "Developed an interactive home screen UI for users and captains.",
        "Integrated Google Maps API for live location tracking and route navigation.",
        "Enabled location-based search panel for users to find available rides.",
        "Created a fully responsive UI with React, ensuring smooth user experience on all devices.",
      ],
    },    
    {
      title: "LIC Agent Management System",
      description: "A full-stack web application designed to streamline policy management for LIC agents using React, Node.js, Express, and MongoDB.",
      period: "2023",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
      githubLink: "https://github.com/linearmusic/lic-app", 
      details: [
        "Developed a role-based authentication system for Admins and Users using JWT.",
        "Built an intuitive Admin Dashboard for managing client policies, including adding, editing, and deleting entries.",
        "Enabled policyholders to securely access and review their policy details via a user-friendly interface.",
        "Designed and integrated RESTful APIs for efficient communication between frontend and backend.",
        "Hosted frontend on Vercel and backend on Render/Railway for seamless deployment.",
        "Implemented MongoDB with Mongoose ORM to ensure secure and optimized data management.",
      ],
    }
    ,
    {
      title: "Home Loan Optimizer",
      description:
        "Developed a comprehensive loan repayment model to calculate tenure, EMI adjustments, and prepayment impacts, enabling borrowers to optimize their financial planning and reduce overall costs.",
      period: "Sept '24 - Oct '24",
      tags: ["Financial Modeling", "Data Analysis", "Visualization","Excel","Python"],
      details: [
        "Integrated an advanced prepayment analysis feature, allowing users to explore flexible repayment strategies to reduce principal and minimize interest payments over time.",
        "Automated real-time calculations for EMI, interest outflows, and principal reduction using sophisticated financial formulas for accurate scenario analysis.",
        "Developed interactive data visualizations, including amortization charts, cash flow breakdowns, and cost-saving insights, to enhance financial decision-making.",
        "Implemented a dynamic loan restructuring option, enabling borrowers to adjust their repayment schedules and EMI structures based on changing financial conditions.",
        "Incorporated predictive analytics to estimate long-term savings from different prepayment and EMI adjustment strategies, providing actionable recommendations.",
      ],
    },
    {
      title: "Foreign Direct Investments in India",
      description:
        "Conducted an in-depth study on the 15% decline in Foreign Direct Investment (FDI) inflows in India, examining sectoral trends, policy frameworks, and macroeconomic factors affecting investor confidence.",
      period: "July '24 - Aug '24",
      tags: ["Financial Analysis", "Economic Research", "Policy Analysis"],
      details: [
        "Analyzed the root causes of a 10% sectoral decline in FDI, identifying industries most affected and evaluating their economic implications.",
        "Evaluated existing policy frameworks to assess their impact on investment attractiveness and proposed modifications to enhance India's global competitiveness.",
        "Proposed regulatory reforms and targeted sectoral incentives to mitigate the 12% decline in investment sentiment and stimulate foreign capital inflows.",
        "Examined global investment patterns to compare India's FDI trends with other emerging economies, offering strategic insights for long-term policy adjustments.",
        "Outlined data-driven recommendations to strengthen India's positioning as a prime destination for foreign investors, focusing on ease of doing business and market stability.",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and research work
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.period}
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

