import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube, Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function MediaPresence() {
  const socialLinks = [
    {
      platform: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/yourgithub",
      followers: "100 followers",
      description: "Open source contributions & personal projects",
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/yourlinkedin",
      followers: "200 connections",
      description: "Professional network & career updates",
    },
    {
      platform: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      url: "https://youtube.com/@youryoutube",
      followers: "300 subscribers",
      description: "Tech tutorials & coding walkthroughs",
    },
    {
      platform: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      url: "https://twitter.com/yourtwitter",
      followers: "400 followers",
      description: "Tech insights & industry discussions",
    },
  ]

  const pressFeatures = [
    {
      title: "Example Feature",
      publication: "Example Publication",
      date: "January 2024",
      description: "Example description of the feature",
    },
  ]

  return (
    <footer className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Follow my journey, explore my work, and let's build something amazing together
          </p>
        </div>

        {/* Social Media Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-600 rounded-full">{link.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{link.platform}</h3>
                <p className="text-blue-400 text-sm mb-2">{link.followers}</p>
                <p className="text-gray-400 text-sm mb-4">{link.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Follow
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Press Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Press & Features</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pressFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span className="font-medium text-blue-400">{feature.publication}</span>
                    <span className="mx-2">•</span>
                    <span>{feature.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-blue-400" />
              <span>your.actual.email@domain.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-blue-400" />
              <span>+1 (555) 555-5555</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-400" />
              <span>Your actual location</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
            <Button variant="outline" size="lg">
              Schedule Call
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Alex Chen. All rights reserved. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
