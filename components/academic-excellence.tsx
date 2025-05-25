import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Star } from "lucide-react"

export function AcademicExcellence() {
  const academicData = {
    education: {
      degree: "Bachelor of Science in Electrical Engineering",
      university: "University of Texas at Austin",
      gpa: "3.8/4.0",
      expectedGraduation: "May 2024",
      jeeRank: "N/A",
    },
    scholarships: ["Dean's List (Fall 2022, Spring 2023)", "Texas Exes Scholarship - $2,000"],
    research: [
      {
        title: "FPGA Based Motor Controller",
        supervisor: "Dr. John Smith",
        duration: "Jan 2023 - May 2023",
        description: "Designed and implemented a motor controller using an FPGA for a robotics application.",
      },
      {
        title: "Wireless Sensor Network for Environmental Monitoring",
        supervisor: "Prof. Alice Johnson",
        duration: "Sep 2022 - Dec 2022",
        description: "Developed a wireless sensor network to monitor temperature and humidity in a greenhouse.",
      },
    ],
    moocs: [
      "Machine Learning - Coursera (Andrew Ng)",
      "Deep Learning - deeplearning.ai",
      "Full Stack Web Development with React - Coursera",
    ],
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Academic Excellence</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Educational achievements and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">{academicData.education.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{academicData.education.university}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">GPA:</span>
                    <p className="text-green-600 font-semibold">{academicData.education.gpa}</p>
                  </div>
                  <div>
                    <span className="font-medium">Expected Graduation:</span>
                    <p>{academicData.education.expectedGraduation}</p>
                  </div>
                  <div>
                    <span className="font-medium">JEE Rank:</span>
                    <p className="text-blue-600 font-semibold">{academicData.education.jeeRank}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scholarships */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-yellow-600 mr-2" />
                <CardTitle>Scholarships & Honors</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {academicData.scholarships.map((scholarship, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{scholarship}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Research Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Research Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {academicData.research.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>Supervisor: {project.supervisor}</p>
                    <p>Duration: {project.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* MOOCs */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-green-600 mr-2" />
              <CardTitle>Completed MOOCs & Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {academicData.moocs.map((course, index) => (
                <Badge key={index} variant="outline" className="justify-start p-3 h-auto">
                  {course}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
