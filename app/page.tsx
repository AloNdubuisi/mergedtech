import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Community from "@/components/sections/community"
import Mentorship from "@/components/sections/mentorship"
import Stats from "@/components/sections/stats"
import CTA from "@/components/sections/cta"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <About/>
      <Services />
      <Community />
      <Mentorship />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
