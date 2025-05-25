import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  Award,
  Medal,
  Trophy,
  Sigma,
  BarChart2,
  BookMarked,
  BrainCircuit,
  Briefcase,
  CalendarDays,
  FileText,
  Sparkles,
  Palette,
  Music,
  GraduationCap,
  BookOpen,
  Languages,
  HeartHandshake,
  School,
  Newspaper,
  PenLine,
  ImageIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src="/assets/dp.jpg" alt="Profile" />
            <AvatarFallback>GK</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-4">Krish Gangajaliya</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Passionate full-stack developer with a love for creating innovative
            solutions and pushing the boundaries of technology.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a Developer, Freelancer and CSE undergraduate at Nirma University, focused on building dynamic WebApps using the MERN stack and Next.js. Passionate about improving my skills, especially in AI and ML, exploring their real-world applications. Through continuous learning and personal projects, I aim to stay at the forefront of technology and software development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>krishgangajaliya1@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+91 9316876023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Ahmedabad, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span>Available for remote work</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6 animate-fade-in">
            <div className="relative md:flex md:items-stretch gap-6">
              {/* Left: Technical Skills */}
              <Card className="flex-1 z-10 flex flex-col">
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                  <CardDescription>
                    Languages, frameworks, tools & platforms I work with
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      {
                        name: "JavaScript",
                        icon: "/assets/tech/javascript.svg",
                      },
                      { name: "Python", icon: "/assets/tech/python.svg" },
                      { name: "C++", icon: "/assets/tech/cplusplus.svg" },
                      { name: "React", icon: "/assets/tech/react.svg" },
                      { name: "Next.js", icon: "/assets/tech/nextdotjs.svg" },
                      { name: "Node.js", icon: "/assets/tech/nodejs.svg" },
                      { name: "Express", icon: "/assets/tech/express.svg" },
                      {
                        name: "Tailwind CSS",
                        icon: "/assets/tech/tailwindcss.svg",
                      },
                      { name: "MongoDB", icon: "/assets/tech/mongodb.svg" },
                      { name: "Vercel", icon: "/assets/tech/vercel.svg" },
                      { name: "Figma", icon: "/assets/tech/figma.svg" },
                      { name: "Canva", icon: "/assets/tech/canva.svg" },
                    ].map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/20 transition"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-6 h-6"
                        />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px bg-border absolute left-1/2 top-0 bottom-0 z-0" />

              {/* Right: Soft Skills */}
              <Card className="flex-1 z-10 flex flex-col">
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                  <CardDescription>
                    Professional qualities & collaboration strengths
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-3">
                    {[
                      { skill: "Team Leadership", icon: "👥" },
                      { skill: "Problem Solving", icon: "🧠" },
                      { skill: "Communication", icon: "💬" },
                      { skill: "Project Management", icon: "📈" },
                      { skill: "Mentoring", icon: "🎓" },
                      { skill: "Agile / Scrum", icon: "🔁" },
                      { skill: "Public Speaking", icon: "🎤" },
                      { skill: "Creative Thinking", icon: "🎨" },
                    ].map((item, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="py-2 px-3 flex items-center gap-2 transition hover:scale-[1.02]"
                      >
                        <span>{item.icon}</span> {item.skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Academic Background</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Nirma University */}
                  <div className="border-l-2 border-primary pl-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        2022 - 2026 | Ahmedabad, India
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">
                      B.Tech in CSE with minor in Applied Mathematics
                    </h3>
                    <p className="text-muted-foreground">Nirma University</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>CGPA: 8.88/10</Badge>
                      <Badge variant="outline">
                        <Award className="h-3 w-3 mr-1" /> Reliance Foundation
                        Scholar
                      </Badge>
                      <Badge variant="outline">
                        <Medal className="h-3 w-3 mr-1" /> Consistent Semester
                        Scholar
                      </Badge>
                    </div>
                  </div>

                  {/* A Success School */}
                  <div className="border-l-2 border-primary pl-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        2020 - 2022 | Jetpur, India
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">HSC Science (PCM)</h3>
                    <p className="text-muted-foreground">
                      A Success School | GSEB
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>
                        <Trophy className="h-3 w-3 mr-1" /> ACPC Rank 43
                      </Badge>
                      <Badge variant="outline">
                        <Sigma className="h-3 w-3 mr-1" /> 100/100 in Maths
                      </Badge>
                      <Badge variant="outline">
                        <BarChart2 className="h-3 w-3 mr-1" /> 99.89 percentile
                      </Badge>
                      <Badge variant="outline">
                        <Award className="h-3 w-3 mr-1" /> JEE Mains 97.56
                      </Badge>
                      <Badge variant="outline">
                        <Medal className="h-3 w-3 mr-1" /> JEE Adv AIR 4895
                        (OBC)
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookMarked className="h-5 w-5" /> Research Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <BrainCircuit className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          ML-driven ERP for Logistics Efficiency
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          <Briefcase className="inline h-3 w-3 mr-1" />
                          Presented Research work in a conference
                        </p>
                        <div className="flex gap-3 mt-2">
                          <span className="inline-flex items-center text-xs text-muted-foreground">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            2023-2024
                          </span>
                          <span className="inline-flex items-center text-xs text-muted-foreground">
                            <FileText className="h-3 w-3 mr-1" />
                            Machine Learning, Optimization
                          </span>
                          <span className="inline-flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            8th IET Smart City Symposium, Bahrain
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="personal" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Interests & Hobbies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" /> Creative Pursuits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        name: "Sketching & Painting",
                        icon: <Palette className="h-5 w-5 text-rose-500" />,
                      },
                      {
                        name: "Piano",
                        icon: <Music className="h-5 w-5 text-indigo-500" />,
                      },
                      {
                        name: "Teaching",
                        icon: (
                          <GraduationCap className="h-5 w-5 text-emerald-500" />
                        ),
                      },
                      {
                        name: "Reading",
                        icon: <BookOpen className="h-5 w-5 text-blue-500" />,
                      },
                    ].map((hobby, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div className="p-1.5 rounded-md bg-accent">
                          {hobby.icon}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{hobby.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="h-5 w-5" /> Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      language: "English",
                      level: "Fluent",
                      levelClass: "bg-green-100 text-green-800",
                    },
                    {
                      language: "Hindi",
                      level: "Native",
                      levelClass: "bg-blue-100 text-blue-800",
                    },
                    {
                      language: "Gujarati",
                      level: "Native",
                      levelClass: "bg-purple-100 text-purple-800",
                    },
                  ].map((lang, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 hover:bg-accent/50 rounded transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{lang.language}</span>
                      </div>
                      <Badge className={lang.levelClass}>{lang.level}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Community Service with Image Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5" /> Community Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="group relative p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <School className="h-5 w-5 text-orange-500" />
                        <h4 className="font-medium">
                          Children&apos;s Education NGO
                        </h4>
                      </div>
                      <Badge variant="outline">2021 - Present</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Volunteer Educator
                    </p>
                    <p className="text-sm mb-3">
                      Teaching mathematics and science to underprivileged
                      children.
                    </p>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ImageIcon className="h-4 w-4 mr-2" /> View Glimpses
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Teaching Moments</DialogTitle>
                          <DialogDescription>
                            Glimpses from my volunteer work at the NGO
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="overflow-hidden rounded-lg border">
                              <img
                                src="/assets/70.jpg"
                                alt="Teaching mathematics to children"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="overflow-hidden rounded-lg border">
                              <img
                                src="/assets/62.jpg"
                                alt="Interactive learning session"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            These moments capture the joy of sharing knowledge
                            with underprivileged students.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Media Mentions with Image Previews */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5" /> Achivements 
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Child Prodigy Artist",
                      outlet: "Local Newspaper",
                      description:
                        "Featured at age 6 for rapid cartoon sketching abilities",
                      year: "2012",
                      icon: <PenLine className="h-5 w-5 text-pink-500" />,
                      images: [
                        {
                          src: "/assets/6yo.jpg",
                          alt: "Newspaper feature about cartoon sketching",
                        },
                      ],
                    },
                    {
                      title: "Academic Excellence",
                      outlet: "State Media",
                      description:
                        "Recognized for top scores in 10th & 12th board exams",
                      year: "2020 & 2022",
                      icon: <Award className="h-5 w-5 text-blue-500" />,
                      images: [
                        {
                          src: "/assets/12th.jpg",
                          alt: "12th result newspaper feature",
                        },
                        {
                          src: "/assets/12th_2.jpg",
                          alt: "12th result newspaper feature",
                        },
                        {
                          src: "/assets/10th.jpg",
                          alt: "10th result newspaper clipping",
                        },
                      ],
                    },
                    {
                      title: "Tech Innovator",
                      outlet: "University Press",
                      description: "Coverage for winning multiple hackathons",
                      year: "2023",
                      icon: <Trophy className="h-5 w-5 text-amber-500" />,
                      images: [
                        {
                          src: "/assets/hack1.jpg",
                          alt: "Hackathon winning moment",
                        },
                        {
                          src: "/assets/hack2.jpg",
                          alt: "With my hackathon team",
                        },
                        {
                          src: "/assets/hack3.jpg",
                          alt: "Another win my hackathon team",
                        },
                        
                      ],
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-md bg-accent mt-0.5">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">{item.title}</h4>
                            <Badge variant="outline">{item.year}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {item.outlet}
                          </p>
                          <p className="text-sm mb-3">{item.description}</p>
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ImageIcon className="h-4 w-4 mr-2" /> View
                            Clippings
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{item.title} Coverage</DialogTitle>
                            <DialogDescription>
                              Media appearances from {item.outlet}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4 overflow-y-scroll h-[430px]">
                            <div
                              className={`grid ${
                                item.images.length > 1
                                  ? "grid-cols-2"
                                  : "grid-cols-1"
                              } gap-4`}
                            >
                              {item.images.map((img, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className="rounded-lg border"
                                >
                                  <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
