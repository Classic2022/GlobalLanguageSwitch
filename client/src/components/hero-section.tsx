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
          backgroundImage: "url('/images/services-collage.png')",
        }}
      />

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#1A4D3C]/75"></div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          {language === "de"
            ? "Ihr Partner für Altbaupflege in Berlin"
            : "Your Trusted Partner for Historic Apartment Care in Berlin"}
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

        <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#1A4D3C] font-medium px-8">
          <Link href="#contact">{language === "de" ? "Jetzt Kontakt aufnehmen" : "Contact Us Now"}</Link>
        </Button>
      </div>
    </section>
  )
}
