"use client"

import { useLanguage } from "@/context/language-context"

export default function PriceListSection() {
  const { language } = useLanguage()

  const priceList = [
    {
      service: {
        de: "Möbelmontage",
        en: "Furniture Assembly",
      },
      price: {
        de: "25–120 €",
        en: "€25–€120",
      },
      details: {
        de: "",
        en: "",
      },
    },
    {
      service: {
        de: "Installationen & Aufhängungen",
        en: "Installations & Mounting",
      },
      price: {
        de: "20–100 €",
        en: "€20–€100",
      },
      details: {
        de: "",
        en: "",
      },
    },
    {
      service: {
        de: "Einfache Elektroarbeiten",
        en: "Basic Electrical Work",
      },
      price: {
        de: "30–120 €",
        en: "€30–€120",
      },
      details: {
        de: "",
        en: "",
      },
    },
    {
      service: {
        de: "Sanitärarbeiten",
        en: "Plumbing Tasks",
      },
      price: {
        de: "50–150 €",
        en: "€50–€150",
      },
      details: {
        de: "",
        en: "",
      },
    },
    {
      service: {
        de: "Malerarbeiten & Wandreparaturen",
        en: "Painting & Wall Repairs",
      },
      price: {
        de: "20–300 €",
        en: "€20–€300",
      },
      details: {
        de: "",
        en: "",
      },
    },
    {
      service: {
        de: "Schlossaustausch",
        en: "Lock Replacement",
      },
      price: {
        de: "70–150 €",
        en: "€70–€150",
      },
      details: {
        de: "",
        en: "",
      },
    },
    {
      service: {
        de: "Weitere Leistungen (Transport, Demontage, Wartung)",
        en: "Other Services (Moving, Dismantling, Maintenance)",
      },
      price: {
        de: "20–100 €",
        en: "€20–€100",
      },
      details: {
        de: "",
        en: "",
      },
    },
  ]

  return (
    <section id="prices" className="py-20 md:py-32 bg-gradient-to-b from-[#F8F8F8] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A4D3C]/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1A4D3C]/5 rounded-full blur-2xl"></div>
      
      <div className="container px-6 mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[#1A4D3C] font-medium text-sm uppercase tracking-wider mb-3">
            {language === "de" ? "Transparente Preisgestaltung" : "Transparent Pricing"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2F2F2F] mb-4">
            {language === "de" ? "Unsere Preise" : "Our Prices"}
          </h2>
          <div className="w-24 h-1 bg-[#1A4D3C]/30 mx-auto mb-5"></div>
          <p className="max-w-2xl mx-auto text-[#2F2F2F]/70 text-lg">
            {language === "de" 
              ? "Faire und transparente Preise für alle unsere Dienstleistungen" 
              : "Fair and transparent pricing for all our services"}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E5E5]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1A4D3C] to-[#1A4D3C]/90 text-white">
                    <th className="px-8 py-5 text-left font-semibold text-lg">{language === "de" ? "Leistung" : "Service"}</th>
                    <th className="px-8 py-5 text-right font-semibold text-lg">{language === "de" ? "Preis" : "Price"}</th>
                  </tr>
                </thead>
                <tbody>
                  {priceList.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`
                        border-b border-[#E5E5E5] last:border-0
                        ${index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"}
                        hover:bg-[#F5F5F5] transition-colors duration-200
                      `}
                    >
                      <td className="px-8 py-5 font-medium">
                        {language === "de" ? item.service.de : item.service.en}
                      </td>
                      <td className="px-8 py-5 text-[#1A4D3C] font-semibold text-right">
                        {language === "de" ? item.price.de : item.price.en}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 bg-[#F9F9F9] border border-[#E5E5E5] p-5 rounded-lg">
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-[#1A4D3C]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[#2F2F2F]/80">
                {language === "de" 
                  ? "Die Preise verstehen sich exkl. MwSt. und können je nach Umfang und Standort der Arbeiten variieren. Für eine genaue Preisangabe bieten wir Ihnen gerne eine individuelle Beratung an."
                  : "Prices do not include VAT and may vary depending on the complexity and location of the work. For an accurate quote, we offer personalized consultations."}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
            <div className="bg-white shadow-md p-5 rounded-xl border border-[#E5E5E5] flex flex-col items-center text-center min-w-[200px]">
              <div className="bg-[#1A4D3C]/10 p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4D3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2F2F2F] mb-1">
                {language === "de" ? "Schnelle Reaktionszeit" : "Quick Response Time"}
              </h3>
              <p className="text-[#2F2F2F]/70 text-sm">
                {language === "de" ? "Innerhalb von 24 Stunden" : "Within 24 hours"}
              </p>
            </div>
            
            <div className="bg-white shadow-md p-5 rounded-xl border border-[#E5E5E5] flex flex-col items-center text-center min-w-[200px]">
              <div className="bg-[#1A4D3C]/10 p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4D3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2F2F2F] mb-1">
                {language === "de" ? "Qualitätsgarantie" : "Quality Guarantee"}
              </h3>
              <p className="text-[#2F2F2F]/70 text-sm">
                {language === "de" ? "Zufriedenheit garantiert" : "Satisfaction guaranteed"}
              </p>
            </div>
            
            <div className="bg-white shadow-md p-5 rounded-xl border border-[#E5E5E5] flex flex-col items-center text-center min-w-[200px]">
              <div className="bg-[#1A4D3C]/10 p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4D3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2F2F2F] mb-1">
                {language === "de" ? "Kostenlose Angebote" : "Free Quotes"}
              </h3>
              <p className="text-[#2F2F2F]/70 text-sm">
                {language === "de" ? "Ohne Verpflichtung" : "No obligation"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}