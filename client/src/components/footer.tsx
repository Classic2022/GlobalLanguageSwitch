"use client"

import Link from "../next-link"
import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-[#1A4D3C] text-white py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Urban Reparaturen</h3>
            <p className="text-white/80">
              {language === "de" ? "Ihr Partner für Altbaupflege in Berlin" : "Your partner for historic apartment care in Berlin"}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === "de" ? "Schnelllinks" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                  {language === "de" ? "Über uns" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  {language === "de" ? "Leistungen" : "Services"}
                </Link>
              </li>
              <li>
                <Link href="#prices" className="text-white/80 hover:text-white transition-colors">
                  {language === "de" ? "Preise" : "Prices"}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                  {language === "de" ? "Kontakt" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === "de" ? "Rechtliches" : "Legal"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  {language === "de" ? "Impressum" : "Imprint"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
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
