"use client"

import { useState, useEffect } from "react"
import Link from "../next-link"
import Image from "./next-image"
import { Menu, X } from "lucide-react"
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
    <header className={`sticky top-0 z-50 w-full ${
      scrolled 
        ? "bg-white/95 border-b border-[#E0E0E0] shadow-lg" 
        : "bg-transparent"
    } backdrop-blur-md transition-all duration-300`}>
      <div className="container flex h-24 items-center justify-between px-6 mx-auto max-w-6xl">
        <div className="flex items-center">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
            className="flex items-center cursor-pointer transform transition-all duration-300 hover:opacity-90"
          >
            <img 
              src="/images/urban-logo.png" 
              alt="Urban Reparaturen Logo" 
              className="h-auto w-[130px] md:w-[150px]"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: "about", labelDe: "Über uns", labelEn: "About" },
            { id: "services", labelDe: "Leistungen", labelEn: "Services" },
            { id: "prices", labelDe: "Preise", labelEn: "Prices" },
            { id: "contact", labelDe: "Kontakt", labelEn: "Contact" }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-base font-medium transition-all ${
                activeSection === item.id 
                  ? "text-[#1A4D3C]" 
                  : "text-[#2F2F2F] hover:text-[#1A4D3C]"
              } tracking-wide`}
              aria-label={language === "de" ? `Zu ${item.labelDe} scrollen` : `Scroll to ${item.labelEn} section`}
            >
              {language === "de" ? item.labelDe : item.labelEn}
              {activeSection === item.id && (
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-[#1A4D3C] rounded-full"></span>
              )}
            </button>
          ))}
          
          <div className="ml-6 h-8 border-l border-[#E0E0E0] pl-6 flex items-center">
            <button 
              onClick={toggleLanguage} 
              className="inline-flex items-center justify-center bg-[#F5F5F5] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#EBEBEB] transition-all duration-200"
              aria-label={language === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
            >
              <span className={language === "de" ? "font-semibold text-[#1A4D3C]" : "text-[#2F2F2F]"}>DE</span>
              <span className="mx-1 text-[#B0B0B0]">|</span>
              <span className={language === "en" ? "font-semibold text-[#1A4D3C]" : "text-[#2F2F2F]"}>EN</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md bg-[#F5F5F5] hover:bg-[#EBEBEB] transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#1A4D3C]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1A4D3C]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E0E0E0] shadow-lg">
          <div className="container px-6 mx-auto max-w-6xl py-6 space-y-1">
            {[
              { id: "about", labelDe: "Über uns", labelEn: "About" },
              { id: "services", labelDe: "Leistungen", labelEn: "Services" },
              { id: "prices", labelDe: "Preise", labelEn: "Prices" },
              { id: "contact", labelDe: "Kontakt", labelEn: "Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-4 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.id 
                    ? "bg-[#F5F5F5] text-[#1A4D3C]" 
                    : "text-[#2F2F2F] hover:bg-[#F5F5F5]"
                }`}
              >
                {language === "de" ? item.labelDe : item.labelEn}
              </button>
            ))}
            
            <div className="pt-4 mt-4 border-t border-[#E0E0E0]">
              <div className="px-4">
                <button 
                  onClick={toggleLanguage} 
                  className="inline-flex w-full items-center justify-center bg-[#F5F5F5] px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#EBEBEB] transition-all duration-200"
                >
                  <span className={language === "de" ? "font-semibold text-[#1A4D3C]" : "text-[#2F2F2F]"}>DE</span>
                  <span className="mx-2 text-[#B0B0B0]">|</span>
                  <span className={language === "en" ? "font-semibold text-[#1A4D3C]" : "text-[#2F2F2F]"}>EN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
