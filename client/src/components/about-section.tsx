"use client"

import { useLanguage } from "@/context/language-context"

export default function AboutSection() {
  const { language } = useLanguage()

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#1A4D3C]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1A4D3C]/5 rounded-full blur-3xl"></div>
      
      <div className="container px-6 mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[#1A4D3C] font-medium text-sm uppercase tracking-wider mb-3">
            {language === "de" ? "Unser Unternehmen" : "Our Company"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2F2F2F] mb-4">
            {language === "de" ? "Über uns" : "About Us"}
          </h2>
          <div className="w-24 h-1 bg-[#1A4D3C]/30 mx-auto mb-5"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#1A4D3C]/30"></div>
                <p className="text-lg text-[#2F2F2F]/80 leading-relaxed mb-4 relative z-10">
                  {language === "de"
                    ? "Wir sind Ihr zuverlässiger Servicepartner in Berlin und auf die umfassende Instandhaltung von Wohnungen spezialisiert."
                    : "We are your reliable service partner in Berlin and specialize in comprehensive apartment maintenance."}
                </p>
              </div>
              
              <p className="text-lg text-[#2F2F2F]/80 leading-relaxed">
                {language === "de"
                  ? "Wir übernehmen alle Aufgaben rund um die Pflege und Instandhaltung Ihrer Wohnung: von fachgerechten Reparaturen durch erfahrene Handwerker über Schlüsseldienste und kleinere Umzüge bis hin zur Montage von Möbeln und Haushaltsgegenständen."
                  : "We handle all tasks related to the care and maintenance of your apartment: from professional repairs by experienced craftsmen to locksmith services and minor moves to the assembly of furniture and household items."}
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-[#F8F8F8] rounded-lg">
                  <span className="text-3xl font-bold text-[#1A4D3C] mb-2">10+</span>
                  <span className="text-[#2F2F2F]/70">
                    {language === "de" ? "Jahre Erfahrung" : "Years Experience"}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-[#F8F8F8] rounded-lg">
                  <span className="text-3xl font-bold text-[#1A4D3C] mb-2">500+</span>
                  <span className="text-[#2F2F2F]/70">
                    {language === "de" ? "Zufriedene Kunden" : "Satisfied Clients"}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#1A4D3C]/30"></div>
              <div className="bg-gradient-to-b from-white to-[#F5F5F5] p-10 rounded-xl shadow-lg border border-[#E5E5E5]">
                <div className="flex items-center mb-8">
                  <div className="w-1.5 h-12 bg-[#1A4D3C] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[#2F2F2F]">
                    {language === "de" ? "Urban Reparaturen" : "Urban Repairs"}
                  </h3>
                </div>
                
                <p className="text-lg text-[#2F2F2F]/80 leading-relaxed mb-6 italic">
                  {language === "de"
                    ? "Urban Reparaturen - kompetent, effizient und engagiert."
                    : "Urban repairs - competent, efficient, and committed."}
                </p>
                
                <p className="text-lg text-[#2F2F2F]/80 leading-relaxed mb-8">
                  {language === "de"
                    ? "Damit Ihre Immobilie stets in bestem Zustand bleibt."
                    : "So that your property always remains in top condition."}
                </p>
                
                <div className="flex items-center">
                  <div className="flex-1 border-t border-[#E5E5E5]"></div>
                  <div className="px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4D3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 border-t border-[#E5E5E5]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
