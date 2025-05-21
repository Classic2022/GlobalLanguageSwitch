"use client"

import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function WhyUsSection() {
  const { language } = useLanguage()

  // Google reviews data
  const reviews = [
    {
      name: "Michael S.",
      rating: 5,
      text: {
        de: "Hervorragender Service! Schnell, zuverlässig und sehr professionell. Kann ich nur empfehlen.",
        en: "Excellent service! Fast, reliable and very professional. Highly recommended."
      }
    },
    {
      name: "Sabine K.",
      rating: 5,
      text: {
        de: "Urban Reparaturen hat mir bei der Möbelmontage sehr geholfen. Pünktlich, freundlich und saubere Arbeit.",
        en: "Urban Reparaturen helped me a lot with furniture assembly. Punctual, friendly and clean work."
      }
    },
    {
      name: "Thomas B.",
      rating: 5,
      text: {
        de: "Wirklich kompetenter Handwerker! Hat mein Schloss schnell ausgetauscht und war dabei sehr freundlich.",
        en: "Really competent craftsman! Quickly replaced my lock and was very friendly."
      }
    }
  ]

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] mb-8">
            {language === "de" ? "Warum uns wählen?" : "Why Choose Us?"}
          </h2>

          <h3 className="text-xl font-medium mb-8 text-[#2F2F2F]">
            {language === "de" ? "Bewertungen unserer Kunden" : "What Our Customers Say"}
          </h3>
          
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#F8F8F8] p-6 rounded-lg shadow-sm text-left">
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-[#2F2F2F]">{review.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-500">Google</span>
                  </div>
                </div>
                <p className="text-[#2F2F2F]/80">{language === "de" ? review.text.de : review.text.en}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
