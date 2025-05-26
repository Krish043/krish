import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { ThemeProvider } from "next-themes"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Krish Gangajaliya - Full Stack Developer & Tech Student",
  description:
    "Professional portfolio of Krish Gangajaliya, a passionate computer science student and full-stack developer with expertise in modern web technologies and a track record of hackathon victories.",
  keywords: "krish, gangajaliya, nirma, university, ahmedabad,full stack developer, computer science, hackathon winner, web development, React, Next.js, portfolio",
  authors: [{ name: "Krish Gangajaliya" }],
  openGraph: {
    title: "Krish Gangajaliya - Full Stack Developer & Tech Student",
    description: "Professional portfolio showcasing technical skills, projects, and achievements",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krish Gangajaliya - Full Stack Developer & Tech Student",
    description: "Professional portfolio showcasing technical skills, projects, and achievements",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}
