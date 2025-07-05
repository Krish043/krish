"use client"

import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Youtube, Instagram, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "Message Sent!",
        description: "I will get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "",
      });
    } catch (error) {
      console.error("Email sending error:",error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "krishgangajaliya1@gmail.com",
      href: "mailto:krishgangajaliya1@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 93168 76023",
      href: "tel:+919316876023",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Ahmedabad, India",
      href: "https://maps.google.com/?q=Ahmedabad",
    },
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/krish-gangajaliya-802b79266/",
      username: "Krish Gangajaliya",
    },
    {
      platform: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Krish043",
      username: "@Krish043",
    },
    {
      platform: "Fiverr",
      icon: <Link className="h-5 w-5" />,
      url: "https://www.fiverr.com/krish_043",
      username: "krish_043",
    },
    {
      platform: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      url: "https://www.youtube.com/@krish_gangajaliya",
      username: "Krish Gangajaliya",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/krrish_145/",
      username: "@krrish_145",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. Let&apos;s discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Contact Form */}
          <div className="lg:col-span-2 h-full">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>Fill out the form below and I&apos;ll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Inquiry Type</Label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="job">Job Opportunity</SelectItem>
                        <SelectItem value="freelance">Freelance Project</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="speaking">Speaking Engagement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief subject line"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6 h-full flex flex-col">
            {/* Contact Information */}
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-muted text-muted-foreground">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="font-medium hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">{social.platform}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
