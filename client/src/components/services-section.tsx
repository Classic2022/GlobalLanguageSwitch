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
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block text-[#1A4D3C] font-medium text-sm uppercase tracking-wider mb-3">
            {language === "de" ? "Professionelle Dienstleistungen" : "Professional Services"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2F2F2F] mb-4">
            {language === "de" ? "Unsere Leistungen" : "Our Services"}
          </h2>
          <div className="w-24 h-1 bg-[#1A4D3C]/30 mx-auto mb-5"></div>
          <p className="max-w-2xl mx-auto text-[#2F2F2F]/70 text-lg">
            {language === "de" 
              ? "Wir bieten umfassende Lösungen für alle Ihre Immobilienbedürfnisse" 
              : "We offer comprehensive solutions for all your property needs"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center h-full
                        transition-all duration-300 hover:shadow-xl border border-[#E5E5E5] overflow-hidden"
            >
              {/* Hover effect background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A4D3C]/5 to-[#1A4D3C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon container with subtle decoration */}
              <div className="relative z-10 mb-6 bg-[#F7F7F7] p-5 rounded-xl border border-[#E5E5E5] group-hover:bg-white group-hover:border-[#1A4D3C]/20 transition-all duration-300">
                <div className="transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-[#2F2F2F] mb-4 transition-colors duration-300 group-hover:text-[#1A4D3C]">
                {language === "de" ? service.title.de : service.title.en}
              </h3>
              
              <p className="relative z-10 text-[#2F2F2F]/80 mb-3 transition-colors duration-300 group-hover:text-[#2F2F2F]">
                {language === "de" ? service.description.de : service.description.en}
              </p>
              
              <p className="relative z-10 text-[#2F2F2F]/70 transition-colors duration-300 group-hover:text-[#2F2F2F]">
                {language === "de" ? service.subDescription.de : service.subDescription.en}
              </p>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#1A4D3C]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Additional service information */}
        <div className="mt-16 text-center">
          <p className="text-[#2F2F2F]/70 mb-6 max-w-2xl mx-auto">
            {language === "de" 
              ? "Wir sind stolz auf unsere schnelle Reaktionszeit und professionelle Ausführung." 
              : "We pride ourselves on our quick response time and professional execution."}
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
            className="inline-flex items-center justify-center bg-[#1A4D3C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1A4D3C]/90 transition-colors duration-300 cta-glow"
          >
            {language === "de" ? "Kontaktieren Sie uns" : "Contact us"}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
