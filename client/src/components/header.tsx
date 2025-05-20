"use client"

import { useState } from "react"
import Link from "../next-link"
import Image from "./next-image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export default function Header() {
  const { language, toggleLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center -ml-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/urban-logo-new.png"
              alt="Urban Reparaturen Logo"
              width={350}
              height={117}
              className="h-auto w-[196px] md:w-[224px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-base font-medium text-[#2F2F2F] hover:text-[#1A4D3C] transition-colors">
            {language === "de" ? "Über uns" : "About"}
          </Link>
          <Link
            href="#services"
            className="text-base font-medium text-[#2F2F2F] hover:text-[#1A4D3C] transition-colors"
          >
            {language === "de" ? "Leistungen" : "Services"}
          </Link>
          <Link href="#contact" className="text-base font-medium text-[#2F2F2F] hover:text-[#1A4D3C] transition-colors">
            {language === "de" ? "Kontakt" : "Contact"}
          </Link>
          <div className="ml-4 flex items-center">
            <button onClick={toggleLanguage} className="text-base font-medium text-[#2F2F2F]">
              <span className={language === "de" ? "font-bold" : ""}>DE</span>
              {" | "}
              <span className={language === "en" ? "font-bold" : ""}>EN</span>
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
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container py-4 space-y-3">
            <Link
              href="#about"
              className="block text-base font-medium text-[#2F2F2F] hover:text-[#1A4D3C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "de" ? "Über uns" : "About"}
            </Link>
            <Link
              href="#services"
              className="block text-base font-medium text-[#2F2F2F] hover:text-[#1A4D3C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "de" ? "Leistungen" : "Services"}
            </Link>
            <Link
              href="#contact"
              className="block text-base font-medium text-[#2F2F2F] hover:text-[#1A4D3C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "de" ? "Kontakt" : "Contact"}
            </Link>
            <div className="pt-2 border-t border-border/40">
              <button onClick={toggleLanguage} className="text-base font-medium text-[#2F2F2F]">
                <span className={language === "de" ? "font-bold" : ""}>DE</span>
                {" | "}
                <span className={language === "en" ? "font-bold" : ""}>EN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
