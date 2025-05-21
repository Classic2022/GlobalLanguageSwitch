"use client"

import { useState, useEffect } from "react"
import Link from "../next-link"
import Image from "./next-image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export default function Header() {
  const { language, toggleLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Determine which section is currently in view
      const sections = ["about", "services", "prices", "contact"]
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function with offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Apply offset for header height
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/40 ${
      scrolled ? "bg-background/95 shadow-sm" : "bg-background"
    } backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300`}>
      <div className="container flex h-20 items-center justify-between px-4 mx-auto max-w-6xl">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/urban-logo.png" 
              alt="Urban Reparaturen Logo" 
              className="h-auto w-[126px] md:w-[140px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => handleNavClick("about")}
            className={`text-base font-medium transition-colors ${
              activeSection === "about" 
                ? "text-[#1A4D3C] font-semibold" 
                : "text-[#2F2F2F] hover:text-[#1A4D3C]"
            }`}
            aria-label={language === "de" ? "Zu Über uns scrollen" : "Scroll to About section"}
          >
            {language === "de" ? "Über uns" : "About"}
          </button>
          <button 
            onClick={() => handleNavClick("services")}
            className={`text-base font-medium transition-colors ${
              activeSection === "services" 
                ? "text-[#1A4D3C] font-semibold" 
                : "text-[#2F2F2F] hover:text-[#1A4D3C]"
            }`}
            aria-label={language === "de" ? "Zu Leistungen scrollen" : "Scroll to Services section"}
          >
            {language === "de" ? "Leistungen" : "Services"}
          </button>
          <button 
            onClick={() => handleNavClick("prices")}
            className={`text-base font-medium transition-colors ${
              activeSection === "prices" 
                ? "text-[#1A4D3C] font-semibold" 
                : "text-[#2F2F2F] hover:text-[#1A4D3C]"
            }`}
            aria-label={language === "de" ? "Zu Preise scrollen" : "Scroll to Prices section"}
          >
            {language === "de" ? "Preise" : "Prices"}
          </button>
          <button 
            onClick={() => handleNavClick("contact")}
            className={`text-base font-medium transition-colors ${
              activeSection === "contact" 
                ? "text-[#1A4D3C] font-semibold" 
                : "text-[#2F2F2F] hover:text-[#1A4D3C]"
            }`}
            aria-label={language === "de" ? "Zu Kontakt scrollen" : "Scroll to Contact section"}
          >
            {language === "de" ? "Kontakt" : "Contact"}
          </button>
          <div className="ml-4 flex items-center">
            <button 
              onClick={toggleLanguage} 
              className="text-base font-medium text-[#2F2F2F] hover:opacity-80 transition-opacity"
              aria-label={language === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
            >
              <span className={language === "de" ? "font-bold text-[#1A4D3C]" : ""}>DE</span>
              {" | "}
              <span className={language === "en" ? "font-bold text-[#1A4D3C]" : ""}>EN</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="hover:bg-transparent"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container px-4 mx-auto max-w-6xl py-4 space-y-3">
            <button
              onClick={() => handleNavClick("about")}
              className={`block w-full text-left px-2 py-3 text-base font-medium transition-colors ${
                activeSection === "about" 
                  ? "text-[#1A4D3C] font-semibold" 
                  : "text-[#2F2F2F] hover:text-[#1A4D3C]"
              }`}
            >
              {language === "de" ? "Über uns" : "About"}
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className={`block w-full text-left px-2 py-3 text-base font-medium transition-colors ${
                activeSection === "services" 
                  ? "text-[#1A4D3C] font-semibold" 
                  : "text-[#2F2F2F] hover:text-[#1A4D3C]"
              }`}
            >
              {language === "de" ? "Leistungen" : "Services"}
            </button>
            <button
              onClick={() => handleNavClick("prices")}
              className={`block w-full text-left px-2 py-3 text-base font-medium transition-colors ${
                activeSection === "prices" 
                  ? "text-[#1A4D3C] font-semibold" 
                  : "text-[#2F2F2F] hover:text-[#1A4D3C]"
              }`}
            >
              {language === "de" ? "Preise" : "Prices"}
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`block w-full text-left px-2 py-3 text-base font-medium transition-colors ${
                activeSection === "contact" 
                  ? "text-[#1A4D3C] font-semibold" 
                  : "text-[#2F2F2F] hover:text-[#1A4D3C]"
              }`}
            >
              {language === "de" ? "Kontakt" : "Contact"}
            </button>
            <div className="pt-3 mt-3 border-t border-border/40">
              <button 
                onClick={toggleLanguage} 
                className="text-base font-medium text-[#2F2F2F] hover:opacity-80 transition-opacity px-2"
              >
                <span className={language === "de" ? "font-bold text-[#1A4D3C]" : ""}>DE</span>
                {" | "}
                <span className={language === "en" ? "font-bold text-[#1A4D3C]" : ""}>EN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
