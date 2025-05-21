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
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8F8F8] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#1A4D3C]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#1A4D3C]/5 rounded-full blur-3xl"></div>
      
      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#1A4D3C] font-medium text-sm uppercase tracking-wider mb-3">
            {language === "de" ? "Kundenmeinungen" : "Customer Testimonials"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2F2F2F] mb-4">
            {language === "de" ? "Warum uns wählen?" : "Why Choose Us?"}
          </h2>
          <div className="w-24 h-1 bg-[#1A4D3C]/30 mx-auto mb-5"></div>
          <p className="max-w-2xl mx-auto text-[#2F2F2F]/70 text-lg">
            {language === "de" 
              ? "Erfahren Sie, was unsere Kunden über unsere Dienstleistungen sagen"
              : "Discover what our clients have to say about our services"}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-xl shadow-md text-left
                       transition-all duration-300 hover:shadow-lg border border-[#E5E5E5]
                       hover:border-[#1A4D3C]/20 overflow-hidden"
            >
              {/* Decorative quote icon */}
              <div className="absolute top-4 right-4 text-[#F5F5F5] opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Google</span>
                </div>
                
                {/* Review Text */}
                <p className="text-[#2F2F2F]/80 text-lg mb-6 italic">"{language === "de" ? review.text.de : review.text.en}"</p>
                
                {/* Customer Info */}
                <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                  <div className="bg-[#1A4D3C]/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#1A4D3C] font-bold">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#2F2F2F]">{review.name}</p>
                    <p className="text-sm text-[#2F2F2F]/60">
                      {language === "de" ? "Zufriedener Kunde" : "Satisfied Customer"}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Verified Badge */}
              <div className="absolute bottom-3 right-3">
                <div className="flex items-center text-[#1A4D3C] bg-[#1A4D3C]/5 px-2 py-1 rounded-full text-xs font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {language === "de" ? "Verifiziert" : "Verified"}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call-to-Action */}
        <div className="mt-16 text-center">
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
            className="inline-flex items-center justify-center bg-[#1A4D3C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1A4D3C]/90 transition-colors duration-300"
          >
            {language === "de" ? "Kontaktieren Sie uns" : "Contact Us"}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
