import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, Award } from "lucide-react"

export function HackathonCards() {
  const hackathons = [
    {
      title: "Example Hackathon",
      position: "1st Place Winner",
      date: "October 2023",
      project: "Innovative Project",
      description: "This project aimed to solve a real-world problem using cutting-edge technology.",
      prize: "$1000",
      participants: "50",
      technologies: ["React", "Node.js", "MongoDB"], // Technologies used
    },
    // Add more hackathons or remove if you haven't participated in any
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hackathon Achievements</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Competitive programming and innovation showcase
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  <Badge variant={hackathon.position.includes("1st") ? "default" : "secondary"}>
                    {hackathon.position}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{hackathon.title}</CardTitle>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  {hackathon.date}
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{hackathon.project}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{hackathon.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1 text-green-500" />
                      Prize:
                    </div>
                    <span className="font-semibold">{hackathon.prize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-blue-500" />
                      Participants:
                    </div>
                    <span>{hackathon.participants}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {hackathon.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
