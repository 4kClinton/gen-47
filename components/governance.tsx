"use client"

import { useState, MouseEvent } from "react"
import { Shield, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type Founder = {
  name: string
  img: string
  role: string
  short: string
  full: string
  phone: string
  ig: string | null
}

const founders: Founder[] = [
  {
    name: "Kalaka",
    img: "/Kalaka.jpg",
    role: "Founder & Executive Director, Gen 47 Initiative",
    short:
      "A visionary leader driving youth empowerment through talent development, mentorship, and social transformation.",
    full: `Kalaka is a visionary communications and media professional recognized for her strategic leadership, innovative thinking, and commitment to social transformation. She is the Founder and Executive Director of the Gen 47 Initiative, an organization dedicated to empowering the next generation through talent development, mentorship, and capacity-building programs that foster growth, creativity, and leadership.

Under her leadership, Gen 47 Initiative focuses on creating sustainable platforms that bridge opportunity gaps and equip young people with the skills and confidence to excel in diverse fields. Her work reflects a deep understanding of public relations, brand strategy, and youth empowerment, seamlessly integrating professional excellence with social impact.

Driven by a mission to redefine leadership and influence across Africa and beyond, Kalaka continues to build a legacy rooted in authenticity, innovation, and service. Her vision extends toward establishing one of the world’s most respected PR and communications firms, where creativity meets purpose and every initiative inspires measurable change.

"Purpose is my blueprint, transformation is my mission."`,
    phone: "254791292006",
    ig: "_its.lykah",
  },
  {
    name: "Stephen Nderitu",
    img: "/StephenNderitu.jpg",
    role: "Co-Founder, Gen 47 Initiative",
    short:
      "A youth advocate and educator empowering Kenya’s youth through mindset transformation, financial literacy, and innovation.",
    full: `Stephen Nderitu is a passionate youth advocate, educator, and social innovator committed to transforming how young people across Kenya and Eastern Africa perceive opportunity, mental health, and financial growth.

Driven by a deep belief that empowerment begins with mindset, Nderitu has dedicated his career to equipping the youth with the tools, systems, and confidence they need to create meaningful, self-sustaining change in their lives and communities.

As the Founder of AFFINITiGROUPKENYA, he pioneered an education model that blends digital skills, financial literacy, and mental wellness, giving young people both the practical knowledge and emotional intelligence required to navigate today’s economic landscape. Through training sessions, mentorship programs, and online communities, he has directly impacted hundreds of learners, guiding them toward personal and financial transformation.

In 2025, Nderitu expanded this vision through the creation of the Gen 47 Initiative — a foundation designed to bridge Kenya’s youth potential with tangible opportunities in technology, entrepreneurship, and mindset development. The initiative’s goal is to reach all 47 counties, offering structured programs that combine mentorship, skill training, and emotional resilience.

Nderitu’s approach is simple yet powerful: teach the youth not only how to earn, but how to think, grow, and lead. His commitment extends beyond classrooms; he travels across regions engaging with schools, technical institutes, and local communities — listening, guiding, and building systems that empower from within.

With a background in leadership, trading psychology, and digital innovation, he continues to design tools that simplify complex systems, making transformation accessible to everyone regardless of background.

Nderitu believes that Kenya’s greatest wealth lies not in its resources, but in its people — especially its youth. His work through Gen 47 is a commitment to unlocking that potential, one conversation, one lesson, and one opportunity at a time.`,
    phone: "254112663855",
    ig: null,
  },
]

export default function Governance() {
  const [selected, setSelected] = useState<Founder | null>(null)

  const handleWhatsApp = (e: MouseEvent, phone: string, name: string) => {
    e.stopPropagation()
    const message = encodeURIComponent(
      `Hi ${name}, I’d like to connect regarding Gen 47 Initiative.`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <section id="governance" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
              <Shield className="text-accent" size={40} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Governance & Structure
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            The foundation operates with a clear governance model comprising a
            Board of Advisors (professionals in education, law, mental health,
            digital space, and social development) and a youth-led team ensuring
            innovation, inclusivity, and relevance.
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {founders.map((founder, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-secondary/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={founder.img}
                alt={founder.name}
                width={140}
                height={140}
                className="rounded-full object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold text-primary">
                {founder.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {founder.role}
              </p>
              <p className="text-foreground mb-4">{founder.short}</p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setSelected(founder)}
                  className="px-4 py-2 text-sm bg-accent text-white rounded-full hover:bg-accent/90 transition shadow-sm"
                >
                  Read More
                </button>
                <button
                  onClick={(e) =>
                    handleWhatsApp(e, founder.phone, founder.name)
                  }
                  className="px-4 py-2 text-sm bg-green-600 text-white rounded-full hover:bg-green-700 transition shadow-sm"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-background max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-8 relative shadow-xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
              <div className="text-center">
                <Image
                  src={selected.img}
                  alt={selected.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-semibold text-primary">
                  {selected.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {selected.role}
                </p>
                <p className="text-left text-foreground whitespace-pre-line">
                  {selected.full}
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={(e) =>
                      handleWhatsApp(e, selected.phone, selected.name)
                    }
                    className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition shadow-sm"
                  >
                    WhatsApp
                  </button>
                  {selected.ig && (
                    <a
                      href={`https://instagram.com/${selected.ig}`}
                      target="_blank"
                      className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-sm"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
