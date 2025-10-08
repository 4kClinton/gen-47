import { CheckCircle2 } from "lucide-react"

const objectives = [
  "Equip the youth with mentorship and constructive expression opportunities.",
  "Strengthen bonds between youth, community and political class.",
  "Create nationwide platforms for authentic connection between leadership and wananchi.",
  "Foster responsibility, innovation, mentorship and empowerment.",
]

export default function Objectives() {
  return (
    <section id="objectives" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Our Objectives</h2>
          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={28} />
                <p className="text-lg leading-relaxed text-foreground">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
