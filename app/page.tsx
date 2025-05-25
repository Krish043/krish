import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { QuickStats } from "@/components/quick-stats"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <QuickStats />
      <FeaturedProjects />
    </main>
  )
}
