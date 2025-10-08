import { TrendingUp } from "lucide-react"

const goals = [
  "Reach 300 schools across Kenya.",
  "Engage 50,000 students and 30,000 parents/teachers.",
  "Produce weekly podcast episodes from constituencies across Kenya.",
  "Organize county-level dialogues in at least 20 counties by mid-2026.",
  "Position Gen47 Initiative as a national model for youth empowerment.",
]

export default function Impact() {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <TrendingUp size={48} className="text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-center">Impact Goals (2025-2026)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg leading-relaxed">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
