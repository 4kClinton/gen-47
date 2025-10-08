import { Globe } from "lucide-react"

export default function Alignment() {
  return (
    <section id="alignment" className="py-20 lg:py-32 bg-soft-green">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <Globe className="text-white" size={40} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Alignment with National & Global Priorities</h2>
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            The Gen47 Initiative supports government priorities on youth empowerment, education and social cohesion, as
            well as UN Sustainable Development Goals (SDG 4, 8, 10, 16).
          </p>
        </div>
      </div>
    </section>
  )
}
