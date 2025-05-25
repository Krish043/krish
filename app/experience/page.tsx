"use client";

import { useState } from "react";
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
import { Calendar, MapPin, Building, Trophy, Users, Award } from "lucide-react";
import { workExperience } from "@/data/workExperience";
import { hackathons } from "@/data/hackathons";
import {timelineData} from "@/data/timeline";
export default function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Experience & Achievements</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey, competitive achievements, and leadership
            experiences.
          </p>
        </div>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="work">Work Experience</TabsTrigger>
            <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Experience List */}
              <div className="lg:col-span-1 space-y-3">
                {workExperience.map((exp, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all ${
                      selectedExperience === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedExperience(index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={exp.logo || "/placeholder.svg"}
                            alt={exp.company}
                          />
                          <AvatarFallback>
                            {exp.company.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium truncate">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground truncate">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {exp.duration}
                          </div>
                        </div>
                        {exp.current && (
                          <Badge variant="default" className="text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Experience Details */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={
                              workExperience[selectedExperience].logo ||
                              "/placeholder.svg"
                            }
                            alt={workExperience[selectedExperience].company}
                          />
                          <AvatarFallback>
                            {workExperience[selectedExperience].company.charAt(
                              0
                            )}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">
                            {workExperience[selectedExperience].title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              {workExperience[selectedExperience].company}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {workExperience[selectedExperience].location}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">
                          {workExperience[selectedExperience].type}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          {workExperience[selectedExperience].duration}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      {workExperience[selectedExperience].description}
                    </p>

                    <div>
                      <h4 className="font-medium mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {workExperience[selectedExperience].achievements.map(
                          (achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {workExperience[selectedExperience].technologies.map(
                          (tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hackathons" className="space-y-6">
            <div className="grid gap-6">
              {hackathons.map((hackathon, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-96 w-full aspect-[4/3] relative">
                      <img
                        src={hackathon.image || "/placeholder.svg"}
                        alt={hackathon.project}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-l-md"
                      />
                    </div>

                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Trophy className="h-5 w-5 text-yellow-500" />
                              <Badge
                                variant={
                                  hackathon.position.includes("1st")
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {hackathon.position}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl">
                              {hackathon.name}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-4 mt-1">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {hackathon.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {hackathon.location}
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold text-primary mb-2">
                          {hackathon.project}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {hackathon.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <Award className="h-4 w-4 text-green-500" />
                              Prize:
                            </span>
                            <span className="font-medium">
                              {hackathon.prize}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-blue-500" />
                              Participants:
                            </span>
                            <span>{hackathon.participants}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {hackathon.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Career Timeline</CardTitle>
                <CardDescription>
                  A chronological view of my professional journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                  {[...workExperience, ...hackathons.slice(0, 2)]
                    .sort((a, b) => {
                      const dateA = new Date();
                      const dateB = new Date();
                      return dateB.getTime() - dateA.getTime();
                    })
                    .map((item, index) => (
                      <div
                        key={index}
                        className="relative flex items-start mb-8"
                      >
                        <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                        <div className="ml-16 flex-1">
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">
                                  {"title" in item ? item.title : item.project}
                                </h3>
                                <Badge variant="outline">
                                  {"duration" in item
                                    ? item.duration
                                    : item.date}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {"company" in item ? item.company : item.name}
                              </p>
                              {"position" in item && (
                                <Badge className="mt-2">{item.position}</Badge>
                              )}
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}
          <TabsContent value="timeline" className="space-y-6">
  <Card>
    <CardHeader>
      <CardTitle>Career Timeline</CardTitle>
      <CardDescription>
        A chronological view of my professional journey
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        {timelineData.map((item, index) => (
          <div key={index} className="relative flex items-start mb-8">
            <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
            <div className="ml-16 flex-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.company}
                      </p>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {item.duration}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.type && (
                      <Badge className="capitalize">{item.type}</Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  
                  {item.achievements && (
                    <ul className="mt-3 space-y-1 pl-5 list-disc text-sm text-muted-foreground">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>
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
