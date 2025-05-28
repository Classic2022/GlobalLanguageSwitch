"use client"

import Link from "../next-link"
import { useLanguage } from "@/context/language-context"
import SocialLinks from "./social-links"

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="pt-16 pb-10 relative overflow-hidden bg-gradient-to-b from-[#1A4D3C] to-[#143d30]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -top-[50%] -right-[10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-[30%] -left-[10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo & Info Section */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">URBAN REPARATUREN</h3>
              <p className="text-white/80 text-lg">
                {language === "de" ? "Ihr Partner für Wohnungspflege in Berlin" : "Your partner for apartment care in Berlin"}
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-white/70 leading-relaxed">
                {language === "de" 
                  ? "Hochwertige Reparatur- und Wartungsdienstleistungen für Wohnungen und Häuser in Berlin und Umgebung."
                  : "High-quality repair and maintenance services for apartments and houses in Berlin and surrounding areas."}
              </p>
            </div>
            
            <div className="pt-2">
              {/* Using the new SocialLinks component */}
              <SocialLinks 
                containerClassName="flex space-x-4" 
                linkClassName="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110" 
              />
              {/* Note for client: To update social media links, modify the URLs in the social-links.tsx file */}
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-white/20">
              {language === "de" ? "Schnelllinks" : "Quick Links"}
            </h3>
            <ul className="space-y-4">
              {[
                { id: "about", labelDe: "Über uns", labelEn: "About Us" },
                { id: "services", labelDe: "Leistungen", labelEn: "Services" },
                { id: "prices", labelDe: "Preise", labelEn: "Prices" },
                { id: "contact", labelDe: "Kontakt", labelEn: "Contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(item.id)
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
                    className="text-white/80 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {language === "de" ? item.labelDe : item.labelEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-white/20">
              {language === "de" ? "Kontakt & Rechtliches" : "Contact & Legal"}
            </h3>
            <address className="not-italic space-y-3 text-white/80 mb-8">
              <a 
                href="https://maps.google.com/?q=Konstanzerstr.+54,+10707+Berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-white transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>Urban Reparaturen</p>
                  <p>Konstanzerstr. 54</p>
                  <p>10707 Berlin</p>
                </div>
              </a>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@urban-r.de" className="hover:text-white transition-colors">
                  info@urban-r.de
                </a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+4917661613134" className="hover:text-white transition-colors">
                  +49 176 61613134
                </a>
              </div>
            </address>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/impressum" 
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md text-white/90 hover:text-white transition-all"
              >
                {language === "de" ? "Impressum" : "Imprint"}
              </Link>
              <Link 
                href="/datenschutz" 
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md text-white/90 hover:text-white transition-all"
              >
                {language === "de" ? "Datenschutz" : "Privacy Policy"}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Urban Reparaturen. {language === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-white/70 text-sm">
              {language === "de" ? "Wir sind für Sie da" : "We are available"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
