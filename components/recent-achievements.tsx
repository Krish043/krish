import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function RecentAchievements() {
  const achievements = [
    {
      title: "TechCrunch Disrupt Hackathon Winner",
      date: "October 2024",
      description: "Won first place with EcoTrack, an AI-powered carbon footprint tracking app.",
      prize: "$10,000",
      type: "Hackathon",
    },
    {
      title: "AWS Solutions Architect Certification",
      date: "September 2024",
      description: "Achieved AWS Solutions Architect Associate certification.",
      prize: "Professional Certification",
      type: "Certification",
    },
    {
      title: "Open Source Contribution Award",
      date: "August 2024",
      description: "Recognized for significant contributions to React ecosystem projects.",
      prize: "Community Recognition",
      type: "Open Source",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Recent Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest milestones and recognitions in my journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  <Badge variant="outline">{achievement.type}</Badge>
                </div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {achievement.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{achievement.description}</p>
                <Badge variant="secondary">{achievement.prize}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/experience">
              View All Achievements
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
