import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function WorkExperience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      duration: "Oct 2022 - Present",
      description:
        "Developed and maintained key features for a large-scale distributed system. Led a team of engineers in implementing a new data pipeline, resulting in a 20% reduction in processing time. Mentored junior engineers and contributed to the team's knowledge base.",
      technologies: ["Java", "Python", "Kubernetes", "TensorFlow", "gRPC"],
    },
    {
      title: "Software Engineering Intern",
      company: "Amazon",
      location: "Seattle, WA",
      duration: "Jun 2021 - Sep 2021",
      description:
        "Designed and implemented a new feature for an internal tool used by Amazon's fulfillment centers. Collaborated with a team of engineers to improve the tool's performance and scalability. Wrote unit tests and integration tests to ensure the quality of the code.",
      technologies: ["C++", "AWS", "DynamoDB", "Lambda"],
    },
    {
      title: "Research Assistant",
      company: "Stanford University",
      location: "Stanford, CA",
      duration: "Sep 2020 - Jun 2021",
      description:
        "Conducted research on machine learning algorithms for natural language processing. Published a paper in a top-tier conference. Presented research findings to a group of faculty and students.",
      technologies: ["Python", "PyTorch", "NLP", "Machine Learning"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional experience and contributions to various organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                <div className="ml-16 flex-1">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {exp.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
