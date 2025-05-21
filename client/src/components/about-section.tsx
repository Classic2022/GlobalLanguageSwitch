"use client"

import { useLanguage } from "@/context/language-context"

export default function AboutSection() {
  const { language } = useLanguage()

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] mb-10 text-center">
          {language === "de" ? "Über uns" : "About Us"}
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-[#2F2F2F]/80 leading-relaxed mb-4">
                {language === "de"
                  ? "Wir sind Ihr zuverlässiger Servicepartner in Berlin und auf die umfassende Instandhaltung von Wohnungen spezialisiert."
                  : "We are your reliable service partner in Berlin and specialize in comprehensive apartment maintenance."}
              </p>
              <p className="text-lg text-[#2F2F2F]/80 leading-relaxed">
                {language === "de"
                  ? "Wir übernehmen alle Aufgaben rund um die Pflege und Instandhaltung Ihrer Wohnung: von fachgerechten Reparaturen durch erfahrene Handwerker über Schlüsseldienste und kleinere Umzüge bis hin zur Montage von Möbeln und Haushaltsgegenständen."
                  : "We handle all tasks related to the care and maintenance of your apartment: from professional repairs by experienced craftsmen to locksmith services and minor moves to the assembly of furniture and household items."}
              </p>
            </div>
            <div className="bg-[#F8F8F8] p-8 rounded-lg shadow-sm">
              <p className="text-lg text-[#2F2F2F]/80 leading-relaxed mb-4">
                {language === "de"
                  ? "Urban Reparaturen - kompetent, effizient und engagiert."
                  : "Urban repairs - competent, efficient, and committed."}
              </p>
              <p className="text-lg text-[#2F2F2F]/80 leading-relaxed">
                {language === "de"
                  ? "Damit Ihre Immobilie stets in bestem Zustand bleibt."
                  : "So that your property always remains in top condition."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
