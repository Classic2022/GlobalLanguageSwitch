"use client"

import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function WhyUsSection() {
  const { language } = useLanguage()

  const reasons = [
    {
      de: "Lokale Fachkräfte",
      en: "Local professionals",
    },
    {
      de: "Faire Preise",
      en: "Transparent pricing",
    },
    {
      de: "Pünktlich & zuverlässig",
      en: "On-time & reliable",
    },
  ]

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] mb-8">
            {language === "de" ? "Warum uns wählen?" : "Why Choose Us?"}
          </h2>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-[#1A4D3C] mr-3" />
                <span className="text-lg text-[#2F2F2F]">{language === "de" ? reason.de : reason.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
