"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ContactSection() {
  const { language } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8F8F8]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] text-center mb-12">
          {language === "de" ? "Kontakt" : "Contact"}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder={language === "de" ? "Name" : "Name"}
                  required
                  className="border-[#2F2F2F]/20"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={language === "de" ? "Email" : "Email"}
                  required
                  className="border-[#2F2F2F]/20"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder={language === "de" ? "Telefon" : "Phone"}
                  className="border-[#2F2F2F]/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#2F2F2F]">
                  {language === "de" ? "Gewünschte Leistung" : "Service Required"}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-[#2F2F2F]/20" />
                    <span className="text-sm">{language === "de" ? "Reparaturen" : "Repairs"}</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-[#2F2F2F]/20" />
                    <span className="text-sm">{language === "de" ? "Schlüsseldienst" : "Locksmith"}</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-[#2F2F2F]/20" />
                    <span className="text-sm">{language === "de" ? "Transporte" : "Transport"}</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-[#2F2F2F]/20" />
                    <span className="text-sm">{language === "de" ? "Möbelaufbau" : "Assembly"}</span>
                  </label>
                </div>
              </div>
              <div>
                <Textarea
                  placeholder={language === "de" ? "Nachricht" : "Message"}
                  required
                  className="min-h-[120px] border-[#2F2F2F]/20"
                />
              </div>
              <Button type="submit" className="w-full bg-[#1A4D3C] hover:bg-[#1A4D3C]/90 text-white">
                {language === "de" ? "Absenden" : "Submit"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Guy Ben Edelsburg</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#1A4D3C] mr-3" />
                <a href="tel:+491629621516" className="text-[#2F2F2F]/80 hover:text-[#1A4D3C]">
                  +49 162 9621516
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#1A4D3C] mr-3" />
                <a href="mailto:guy@urban-hausverwaltung.de" className="text-[#2F2F2F]/80 hover:text-[#1A4D3C]">
                  guy@urban-hausverwaltung.de
                </a>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#1A4D3C] mr-3 mt-0.5" />
                <span className="text-[#2F2F2F]/80">Berlin, Germany</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
