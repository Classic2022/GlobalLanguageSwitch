"use client"

import Link from "../next-link"
import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-[#1A4D3C] text-white py-8">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Urban Reparaturen</h3>
            <p className="text-white/80">
              {language === "de" ? "Ihr Partner für Wohnungspflege in Berlin" : "Your partner for apartment care in Berlin"}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === "de" ? "Schnelllinks" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("about")
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
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer">
                  {language === "de" ? "Über uns" : "About Us"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("services")
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
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer">
                  {language === "de" ? "Leistungen" : "Services"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("prices")
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
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer">
                  {language === "de" ? "Preise" : "Prices"}
                </button>
              </li>
              <li>
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
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer">
                  {language === "de" ? "Kontakt" : "Contact"}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === "de" ? "Kontakt" : "Contact"}
            </h3>
            <address className="not-italic space-y-2 text-white/80">
              <p>Urban Reparaturen</p>
              <p>Konstanzerstr. 54</p>
              <p>10707 Berlin</p>
              <p>
                <a href="mailto:info@urban-r.de" className="hover:text-white transition-colors">
                  info@urban-r.de
                </a>
              </p>
              <p>
                <a href="tel:+4917661613134" className="hover:text-white transition-colors">
                  +49 176 61613134
                </a>
              </p>
            </address>
            
            <h3 className="text-lg font-bold mt-6 mb-2">
              {language === "de" ? "Rechtliches" : "Legal"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-white/80 hover:text-white transition-colors">
                  {language === "de" ? "Impressum" : "Imprint"}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-white/80 hover:text-white transition-colors">
                  {language === "de" ? "Datenschutz" : "Privacy Policy"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/70">
            &copy; {new Date().getFullYear()} Urban Reparaturen. {language === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
