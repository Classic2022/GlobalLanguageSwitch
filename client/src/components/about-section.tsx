"use client"

import { useLanguage } from "@/context/language-context"

export default function AboutSection() {
  const { language } = useLanguage()

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] mb-6">
              {language === "de" ? "Über uns" : "About Us"}
            </h2>
            <p className="text-lg text-[#2F2F2F]/80 leading-relaxed">
              {language === "de"
                ? "Wir sind Ihr zuverlässiger Dienstleistungspartner in Berlin, spezialisiert auf die ganzheitliche Instandhaltung von Altbauwohnungen."
                : "We are your reliable service partner in Berlin, specializing in the comprehensive maintenance of old apartments."}
            </p>
          </div>
          <div className="bg-[#F8F8F8] p-8 rounded-lg">
            <p className="text-lg text-[#2F2F2F]/80 leading-relaxed">
              {language === "de"
                ? "Mit unserem erfahrenen Team bieten wir maßgeschneiderte Lösungen für die besonderen Anforderungen historischer Gebäude. Wir verstehen die Bedeutung von Qualität und Zuverlässigkeit bei der Pflege Ihres wertvollen Wohnraums."
                : "With our experienced team, we offer tailored solutions for the special requirements of historic buildings. We understand the importance of quality and reliability in maintaining your valuable living space."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
