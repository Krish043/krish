import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsByStack() {
  const projectStacks = [
    {
      stack: "Next.js & TypeScript Projects",
      projects: [
        {
          title: "AI SaaS Platform",
          description:
            "A full-stack SaaS platform leveraging Next.js, TypeScript, and Stripe for AI-powered content generation. Includes user authentication, subscription management, and a custom AI model integration.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "OpenAI API"],
          github: "https://github.com/your-github-repo",
          demo: "https://your-live-demo.com",
        },
        {
          title: "Personal Portfolio Website",
          description:
            "A modern and responsive personal portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["Next.js", "Tailwind CSS", "Vercel"],
          github: "https://github.com/your-github-repo",
          demo: "https://your-live-demo.com",
        },
      ],
    },
    {
      stack: "React Projects",
      projects: [
        {
          title: "E-commerce Product Page",
          description:
            "A dynamic e-commerce product page built with React, featuring interactive components, responsive design, and integration with a mock API for product data.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["React", "JavaScript", "CSS", "API Integration"],
          github: "https://github.com/your-github-repo",
          demo: "https://your-live-demo.com",
        },
      ],
    },
    {
      stack: "Python & Data Science Projects",
      projects: [
        {
          title: "Data Analysis Dashboard",
          description:
            "A data analysis dashboard built with Python, Flask, and Pandas, visualizing key metrics and trends from a large dataset.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["Python", "Flask", "Pandas", "Data Visualization"],
          github: "https://github.com/your-github-repo",
          demo: null,
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects by Technology Stack</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing diverse projects across different technology stacks
          </p>
        </div>

        {projectStacks.map((stackGroup, stackIndex) => (
          <div key={stackIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">{stackGroup.stack}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackGroup.projects.map((project, projectIndex) => (
                <Card key={projectIndex} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
