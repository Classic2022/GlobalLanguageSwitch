"use client"

import { useLanguage } from "@/context/language-context"

export default function PriceListSection() {
  const { language } = useLanguage()

  const priceList = [
    {
      service: {
        de: "Reparaturen & Instandhaltung",
        en: "Repairs & Maintenance",
      },
      price: {
        de: "ab 50€/Stunde",
        en: "from €50/hour",
      },
      details: {
        de: "Kleine Reparaturen und Wartungsarbeiten",
        en: "Small repairs and maintenance work",
      },
    },
    {
      service: {
        de: "Schlüsseldienst",
        en: "Locksmith Services",
      },
      price: {
        de: "ab 80€",
        en: "from €80",
      },
      details: {
        de: "Türöffnungen und Schlossaustausch",
        en: "Door openings and lock replacements",
      },
    },
    {
      service: {
        de: "Kleintransporte & Umzüge",
        en: "Mini Moves",
      },
      price: {
        de: "ab 75€/Stunde",
        en: "from €75/hour",
      },
      details: {
        de: "Möbeltransport und kleine Umzüge",
        en: "Furniture transport and small moves",
      },
    },
    {
      service: {
        de: "Möbelaufbau",
        en: "Assembly",
      },
      price: {
        de: "ab 45€/Stunde",
        en: "from €45/hour",
      },
      details: {
        de: "Montage von Möbeln und Haushaltsgeräten",
        en: "Furniture and appliance setup",
      },
    },
  ]

  return (
    <section id="prices" className="py-10 md:py-16 bg-white border-t border-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] text-center mb-10">
          {language === "de" ? "Unsere Preise" : "Our Prices"}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A4D3C] text-white">
                  <th className="px-6 py-4 text-left">{language === "de" ? "Leistung" : "Service"}</th>
                  <th className="px-6 py-4 text-left">{language === "de" ? "Preis" : "Price"}</th>
                  <th className="px-6 py-4 text-left">{language === "de" ? "Details" : "Details"}</th>
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
                    <td className="px-6 py-4 text-[#2F2F2F]/80">
                      {language === "de" ? item.details.de : item.details.en}
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