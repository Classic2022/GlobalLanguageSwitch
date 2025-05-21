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
    <section id="prices" className="py-10 md:py-16 bg-white border-t border-gray-100">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] text-center mb-10">
          {language === "de" ? "Unsere Preise" : "Our Prices"}
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto shadow-sm rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A4D3C] text-white">
                  <th className="px-6 py-4 text-left rounded-tl-lg">{language === "de" ? "Leistung" : "Service"}</th>
                  <th className="px-6 py-4 text-left rounded-tr-lg">{language === "de" ? "Preis" : "Price"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {priceList.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-[#F8F8F8]" : "bg-white"}>
                    <td className="px-6 py-4 font-medium">
                      {language === "de" ? item.service.de : item.service.en}
                    </td>
                    <td className="px-6 py-4 text-[#1A4D3C] font-medium">
                      {language === "de" ? item.price.de : item.price.en}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="mt-6 text-sm text-[#2F2F2F]/70 text-center">
            {language === "de" 
              ? "* Alle Preise sind Richtwerte und können je nach Umfang und Komplexität variieren. Kontaktieren Sie uns für ein individuelles Angebot."
              : "* All prices are indicative and may vary depending on scope and complexity. Contact us for an individual quote."}
          </p>
        </div>
      </div>
    </section>
  )
}