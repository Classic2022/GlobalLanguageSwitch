"use client"

import Link from "../next-link"
import { Button } from "@/components/ui/button"
import { PenToolIcon as Tool, Key, Truck, Armchair } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function HeroSection() {
  const { language } = useLanguage()

  const serviceHighlights = [
    {
      icon: <Tool className="h-5 w-5" />,
      label: { de: "Reparaturen", en: "Repairs" },
    },
    {
      icon: <Key className="h-5 w-5" />,
      label: { de: "Schlüsseldienst", en: "Locksmith" },
    },
    {
      icon: <Truck className="h-5 w-5" />,
      label: { de: "Transporte", en: "Transport" },
    },
    {
      icon: <Armchair className="h-5 w-5" />,
      label: { de: "Möbelaufbau", en: "Assembly" },
    },
  ]

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/old-building.jpg')",
        }}
      />

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#1A4D3C]/80"></div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          {language === "de"
            ? "Ihr Partner für Altbaupflege in Berlin"
            : "Your Trusted Partner for Old Apartment Care in Berlin"}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-6">
          {language === "de" ? "Kompetent · Effizient · Engagiert" : "Competent · Efficient · Committed"}
        </p>

        {/* Service Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {serviceHighlights.map((service, index) => (
            <div
              key={index}
              className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <span className="text-white mr-2">{service.icon}</span>
              <span className="text-white font-medium">{language === "de" ? service.label.de : service.label.en}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            const element = document.getElementById("contact")
            if (element) {
              const headerOffset = 80
              const elementPosition = element.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.scrollY - headerOffset
              
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              })
            }
          }}
          className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-lg font-medium text-[#1A4D3C] shadow-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.03] active:scale-95"
        >
          {language === "de" ? "Jetzt Kontakt aufnehmen" : "Contact Us Now"}
        </button>
      </div>
    </section>
  )
}
