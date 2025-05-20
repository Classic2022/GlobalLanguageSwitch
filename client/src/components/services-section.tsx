"use client"

import { PenToolIcon as Tool, Key, Truck, Armchair } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ServicesSection() {
  const { language } = useLanguage()

  const services = [
    {
      icon: <Tool className="h-10 w-10 text-[#1A4D3C]" />,
      title: {
        de: "Reparaturen & Instandhaltung",
        en: "Repairs & Maintenance",
      },
      description: {
        de: "Fachgerechte Reparaturen durch erfahrene Handwerker",
        en: "Professional repairs by experienced craftsmen",
      },
      subDescription: {
        de: "Minor renovations",
        en: "Minor renovations",
      },
    },
    {
      icon: <Key className="h-10 w-10 text-[#1A4D3C]" />,
      title: {
        de: "Schlüsseldienst",
        en: "Locksmith Services",
      },
      description: {
        de: "Schnelle Türöffnungen",
        en: "Fast door openings",
      },
      subDescription: {
        de: "Lock replacements",
        en: "Lock replacements",
      },
    },
    {
      icon: <Truck className="h-10 w-10 text-[#1A4D3C]" />,
      title: {
        de: "Kleintransporte & Umzüge",
        en: "Mini Moves",
      },
      description: {
        de: "Local small moves",
        en: "Local small moves",
      },
      subDescription: {
        de: "Furniture transport",
        en: "Furniture transport",
      },
    },
    {
      icon: <Armchair className="h-10 w-10 text-[#1A4D3C]" />,
      title: {
        de: "Möbelaufbau",
        en: "Assembly",
      },
      description: {
        de: "Furniture & appliance setup",
        en: "Furniture & appliance setup",
      },
      subDescription: {
        de: "Household installations",
        en: "Household installations",
      },
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8F8F8]">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] text-center mb-12">
          {language === "de" ? "Unsere Leistungen" : "Our Services"}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center h-full">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">
                {language === "de" ? service.title.de : service.title.en}
              </h3>
              <p className="text-[#2F2F2F]/80 mb-2">
                {language === "de" ? service.description.de : service.description.en}
              </p>
              <p className="text-[#2F2F2F]/80">
                {language === "de" ? service.subDescription.de : service.subDescription.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
