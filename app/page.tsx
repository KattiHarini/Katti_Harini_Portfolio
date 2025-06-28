import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { DashboardPreview } from "@/components/dashboard-preview"
import { AIInsights } from "@/components/ai-insights"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <Hero />
      <FeatureCards />
      <DashboardPreview />
      <AIInsights />
      <Testimonials />
      <Footer />
    </div>
  )
}
