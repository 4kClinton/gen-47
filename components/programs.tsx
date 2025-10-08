"use client"

import Image from "next/image"
import { Mic, School, Users, Megaphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const programs = [
  {
    name: "GEN 47 HOUR Podcast",
    description:
      "National conversations on education, politics, parenting, social issues and youth empowerment. Voices from youth, parents, leaders and professionals engage in solution-driven conversations.",
    icon: Mic,
    image: "/podcast.jpg",
  },
  {
    name: "School Outreach Programs",
    description:
      "Visits and mentorship sessions in schools, focusing on digital literacy, mental health, and career guidance. Building strong role model connections for students.",
    icon: School,
    image: "/schoolKids.jpg",
  },
  {
    name: "Parent & Community Dialogues",
    description:
      "Forums that bring parents, teachers, youth and leaders together to bridge communication gaps and strengthen families.",
    icon: Users,
    image: "/parensKids.jpg",
  },
  {
    name: "Media & Awareness Campaigns",
    description:
      "Using digital media and content creation to raise awareness, amplify youth voices, and showcase community impact.",
    icon: Megaphone,
    image: "/microphone.jpg",
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-600 mb-4">Core Programs</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Empowering youth through diverse initiatives across all 47 counties
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority
                  />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-sky-600">{program.name}</h3>
                  <p className="text-slate-700 leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
