import { HandHeart, Handshake, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const options = [
  {
    type: "Volunteer",
    description: "Be part of our outreach programs across 47 counties.",
    icon: HandHeart,
  },
  {
    type: "Partner",
    description: "Collaborate with us to expand youth opportunities.",
    icon: Handshake,
  },
  {
    type: "Donate",
    description: "Support our mission with financial or in-kind donations.",
    icon: DollarSign,
  },
]

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 lg:py-32 bg-soft-gold">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get Involved</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in empowering the next generation of Kenyan leaders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {options.map((option, index) => {
            const Icon = option.icon
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={36} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{option.type}</h3>
                  <p className="text-foreground leading-relaxed">{option.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary-dark text-white">Learn More</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
