import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import VisionMission from "@/components/vision-mission"
import Programs from "@/components/programs"
import Objectives from "@/components/objectives"
import Impact from "@/components/impact"
import Alignment from "@/components/alignment"
import Governance from "@/components/governance"
import GetInvolved from "@/components/get-involved"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <VisionMission />
      <Programs />
      <Objectives />
      <Impact />
      <Alignment />
      <Governance />
      <GetInvolved />
      <Contact />
      <Footer />
    </main>
  )
}
