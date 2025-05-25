import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Palette, Users, Music } from "lucide-react"

export function AchievementsPassions() {
  const achievements = [
    {
      category: "Awards",
      icon: <Trophy className="h-6 w-6 text-yellow-600" />,
      items: [
        "[Your actual award 1]",
        "[Your actual award 2]",
        // Add your real awards or remove if none
      ],
    },
    {
      category: "Artistic Skills",
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      items: [
        "[Your actual artistic skill 1]",
        "[Your actual artistic skill 2]",
        // Add your real artistic abilities or remove section if none
      ],
    },
    {
      category: "Leadership",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      items: [
        "[Your actual leadership role 1]",
        "[Your actual leadership role 2]",
        // Add your real leadership experiences
      ],
    },
    {
      category: "Personal Interests",
      icon: <Music className="h-6 w-6 text-green-600" />,
      items: [
        "[Your actual hobby 1]",
        "[Your actual hobby 2]",
        // Add your real interests and hobbies
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements & Passions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Beyond code: awards, artistic pursuits, leadership, and personal interests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {section.icon}
                  <CardTitle className="ml-2">{section.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Achievement */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-full w-fit">
                <Trophy className="h-8 w-8 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl">Featured Achievement</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                TechCrunch Disrupt Hackathon Winner
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
                Led a team of 4 developers to create EcoTrack, an AI-powered carbon footprint tracking app. The project
                impressed judges with its innovative use of machine learning and potential for real-world impact,
                earning the top prize among 500+ participants.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">Team Leadership</Badge>
                <Badge variant="secondary">AI/ML Implementation</Badge>
                <Badge variant="secondary">Pitch Presentation</Badge>
                <Badge variant="secondary">$10,000 Prize</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
