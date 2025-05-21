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
    <section className="relative w-full h-[90vh] min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/handyman-kitchen-service.webp')",
        }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A4D3C]/90 to-[#1A4D3C]/70"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/30 to-transparent"></div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 mx-auto max-w-6xl">
        {/* Premium tag */}
        <div className="inline-block mb-6 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20">
          <span className="text-white/90 uppercase tracking-widest text-sm font-light">
            {language === "de" ? "Premium Service" : "Premium Service"}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          {language === "de"
            ? "Ihr Partner für Wohnungspflege in Berlin"
            : "Your Partner for Apartment Care in Berlin"}
        </h1>
        
        <div className="w-24 h-1 bg-white/60 mx-auto mb-6"></div>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
          {language === "de" ? "Kompetent · Effizient · Engagiert" : "Competent · Efficient · Committed"}
        </p>

        {/* Service Highlights */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {serviceHighlights.map((service, index) => (
            <div
              key={index}
              className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 transform transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <div className="bg-white/20 p-2 rounded-full mr-3">
                <span className="text-white">{service.icon}</span>
              </div>
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
          className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-10 text-lg font-medium text-[#1A4D3C] shadow-xl hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.05] active:scale-95 cta-glow"
        >
          {language === "de" ? "Jetzt Kontakt aufnehmen" : "Contact Us Now"}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
