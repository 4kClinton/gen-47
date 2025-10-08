import { Target, Compass } from "lucide-react"

export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Vision</h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              To create a united platform that empowers Kenyan youth in all 47 counties to become responsible,
              innovative and impactful leaders.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Compass className="text-accent" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Mission</h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              To connect young people, parents and leaders through mentorship programs, media platforms and community
              outreach that inspire growth, responsibility and national unity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
