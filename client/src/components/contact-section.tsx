"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { apiRequest } from "@/lib/queryClient"

export default function ContactSection() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState("")
  
  // Refs for form fields
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  
  // Refs for service checkboxes
  const repairsRef = useRef<HTMLInputElement>(null)
  const locksmithRef = useRef<HTMLInputElement>(null)
  const transportRef = useRef<HTMLInputElement>(null)
  const assemblyRef = useRef<HTMLInputElement>(null)
  
  const resetForm = () => {
    if (nameRef.current) nameRef.current.value = ""
    if (emailRef.current) emailRef.current.value = ""
    if (phoneRef.current) phoneRef.current.value = ""
    if (messageRef.current) messageRef.current.value = ""
    
    if (repairsRef.current) repairsRef.current.checked = false
    if (locksmithRef.current) locksmithRef.current.checked = false
    if (transportRef.current) transportRef.current.checked = false
    if (assemblyRef.current) assemblyRef.current.checked = false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset status 
    setSubmitStatus('idle')
    setStatusMessage("")
    
    // Get form values
    const name = nameRef.current?.value || ""
    const email = emailRef.current?.value || ""
    const phone = phoneRef.current?.value || ""
    const message = messageRef.current?.value || ""
    
    // Get selected services
    const services = []
    if (repairsRef.current?.checked) services.push(language === "de" ? "Reparaturen" : "Repairs")
    if (locksmithRef.current?.checked) services.push(language === "de" ? "Schlüsseldienst" : "Locksmith")
    if (transportRef.current?.checked) services.push(language === "de" ? "Transporte" : "Transport")
    if (assemblyRef.current?.checked) services.push(language === "de" ? "Möbelaufbau" : "Assembly")
    
    // Validate form
    if (!name || !email || !message) {
      setSubmitStatus('error')
      setStatusMessage(language === "de" 
        ? "Bitte füllen Sie alle erforderlichen Felder aus."
        : "Please fill in all required fields.")
      return
    }
    
    // Set up form data
    setIsSubmitting(true)
    
    // Get the form element
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    try {
      // Send to form-handler.php directly
      const response = await fetch('form-handler.php', {
        method: 'POST',
        body: formData
      })
      
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      const data = await response.json()
      
      if (data.success) {
        setSubmitStatus('success')
        setStatusMessage(language === "de"
          ? "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze mit Ihnen in Verbindung setzen."
          : "Thank you for your message. We will contact you shortly.")
        resetForm()
      } else {
        setSubmitStatus('error')
        setStatusMessage(language === "de"
          ? "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut."
          : "There was a problem sending your message. Please try again later.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus('error')
      setStatusMessage(language === "de"
        ? "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut."
        : "There was a problem sending your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-[#F8F8F8] to-[#F0F0F0]">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2F2F2F] text-center mb-6">
          {language === "de" ? "Kontakt" : "Contact"}
        </h2>
        
        <p className="text-[#2F2F2F]/70 text-center max-w-2xl mx-auto mb-14">
          {language === "de" 
            ? "Haben Sie Fragen oder benötigen Sie einen Service? Wir freuen uns von Ihnen zu hören."
            : "Have questions or need our services? We're here to help you with your needs."}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 border-4 border-green-100">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#2F2F2F] mb-3">
                  {language === "de" ? "Nachricht gesendet!" : "Message Sent!"}
                </h3>
                <p className="text-[#2F2F2F]/80 mb-8 text-lg">{statusMessage}</p>
                <Button 
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-[#1A4D3C] hover:bg-[#1A4D3C]/90 text-white px-8 py-6 h-auto text-lg rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {language === "de" ? "Neues Formular" : "New Form"}
                </Button>
              </div>
            ) : (
              <form action="form-handler.php" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    ref={nameRef}
                    name="name"
                    type="text"
                    placeholder={language === "de" ? "Name" : "Name"}
                    required
                    className="border-[#2F2F2F]/20 h-12 text-base rounded-lg focus:border-[#1A4D3C] focus:ring-1 focus:ring-[#1A4D3C]"
                  />
                </div>
                <div>
                  <Input
                    ref={emailRef}
                    name="email"
                    type="email"
                    placeholder={language === "de" ? "Email" : "Email"}
                    required
                    className="border-[#2F2F2F]/20 h-12 text-base rounded-lg focus:border-[#1A4D3C] focus:ring-1 focus:ring-[#1A4D3C]"
                  />
                </div>
                <div>
                  <Input
                    ref={phoneRef}
                    name="phone"
                    type="tel"
                    placeholder={language === "de" ? "Telefon (optional)" : "Phone (optional)"}
                    className="border-[#2F2F2F]/20 h-12 text-base rounded-lg focus:border-[#1A4D3C] focus:ring-1 focus:ring-[#1A4D3C]"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-base font-medium text-[#2F2F2F] mb-1">
                    {language === "de" ? "Gewünschte Leistung" : "Service Required"}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center p-3 bg-[#F7F7F7] rounded-lg hover:bg-[#EAEAEA] transition-colors duration-200 cursor-pointer">
                      <input 
                        ref={repairsRef} 
                        name="services[]" 
                        value={language === "de" ? "Reparaturen" : "Repairs"}
                        type="checkbox" 
                        className="w-4 h-4 rounded border-[#2F2F2F]/30 text-[#1A4D3C] focus:ring-[#1A4D3C]" 
                      />
                      <span className="ml-2 text-[#2F2F2F]">{language === "de" ? "Reparaturen" : "Repairs"}</span>
                    </label>
                    <label className="flex items-center p-3 bg-[#F7F7F7] rounded-lg hover:bg-[#EAEAEA] transition-colors duration-200 cursor-pointer">
                      <input 
                        ref={locksmithRef}
                        name="services[]"
                        value={language === "de" ? "Schlüsseldienst" : "Locksmith"}
                        type="checkbox" 
                        className="w-4 h-4 rounded border-[#2F2F2F]/30 text-[#1A4D3C] focus:ring-[#1A4D3C]" 
                      />
                      <span className="ml-2 text-[#2F2F2F]">{language === "de" ? "Schlüsseldienst" : "Locksmith"}</span>
                    </label>
                    <label className="flex items-center p-3 bg-[#F7F7F7] rounded-lg hover:bg-[#EAEAEA] transition-colors duration-200 cursor-pointer">
                      <input 
                        ref={transportRef}
                        name="services[]"
                        value={language === "de" ? "Transporte" : "Transport"}
                        type="checkbox" 
                        className="w-4 h-4 rounded border-[#2F2F2F]/30 text-[#1A4D3C] focus:ring-[#1A4D3C]" 
                      />
                      <span className="ml-2 text-[#2F2F2F]">{language === "de" ? "Transporte" : "Transport"}</span>
                    </label>
                    <label className="flex items-center p-3 bg-[#F7F7F7] rounded-lg hover:bg-[#EAEAEA] transition-colors duration-200 cursor-pointer">
                      <input 
                        ref={assemblyRef}
                        name="services[]"
                        value={language === "de" ? "Möbelaufbau" : "Assembly"}
                        type="checkbox" 
                        className="w-4 h-4 rounded border-[#2F2F2F]/30 text-[#1A4D3C] focus:ring-[#1A4D3C]" 
                      />
                      <span className="ml-2 text-[#2F2F2F]">{language === "de" ? "Möbelaufbau" : "Assembly"}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <Textarea
                    ref={messageRef}
                    name="message"
                    placeholder={language === "de" ? "Ihre Nachricht" : "Your Message"}
                    required
                    className="min-h-[150px] border-[#2F2F2F]/20 text-base rounded-lg resize-none focus:border-[#1A4D3C] focus:ring-1 focus:ring-[#1A4D3C]"
                  />
                </div>
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-start border border-red-100">
                    <XCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{statusMessage}</p>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#1A4D3C] hover:bg-[#1A4D3C]/90 text-white py-6 h-auto text-lg rounded-lg transition-all duration-200 hover:scale-[1.02] cta-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      <span className="font-medium">{language === "de" ? "Wird gesendet..." : "Sending..."}</span>
                    </>
                  ) : (
                    <span className="font-medium">{language === "de" ? "Nachricht senden" : "Send Message"}</span>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col h-full justify-center">
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-2xl font-bold text-[#1A4D3C] mb-6">Urban Reparaturen</h3>

              <div className="space-y-6">
                <div className="flex items-center p-4 bg-[#F7F7F7] rounded-lg transition-all duration-200 hover:bg-[#EAEAEA]">
                  <div className="bg-[#1A4D3C]/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#1A4D3C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2F2F2F]/60 mb-1">{language === "de" ? "Telefon" : "Phone"}</p>
                    <a href="tel:+4917661613134" className="text-[#2F2F2F] font-medium hover:text-[#1A4D3C] transition-colors">
                      +49 176 61613134
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-[#F7F7F7] rounded-lg transition-all duration-200 hover:bg-[#EAEAEA]">
                  <div className="bg-[#1A4D3C]/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#1A4D3C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2F2F2F]/60 mb-1">Email</p>
                    <a href="mailto:info@urban-r.de" className="text-[#2F2F2F] font-medium hover:text-[#1A4D3C] transition-colors">
                      info@urban-r.de
                    </a>
                  </div>
                </div>

                <a 
                  href="https://maps.google.com/?q=Konstanzerstr.+54,+10707+Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-[#F7F7F7] rounded-lg transition-all duration-200 hover:bg-[#EAEAEA] hover:shadow-md cursor-pointer"
                >
                  <div className="bg-[#1A4D3C]/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#1A4D3C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2F2F2F]/60 mb-1">{language === "de" ? "Adresse" : "Address"}</p>
                    <div className="text-[#2F2F2F] font-medium hover:text-[#1A4D3C] transition-colors">
                      <p>Konstanzerstr. 54</p>
                      <p>10707 Berlin</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-[#1A4D3C] text-white p-6 rounded-xl shadow-md">
              <p className="font-medium mb-2">
                {language === "de" ? "Geschäftszeiten" : "Business Hours"}
              </p>
              <p className="text-white/80">
                {language === "de" ? "Montag - Freitag: 8:00 - 18:00 Uhr" : "Monday - Friday: 8:00 - 18:00"}
              </p>
              <p className="text-white/80">
                {language === "de" ? "Samstag: 9:00 - 14:00 Uhr" : "Saturday: 9:00 - 14:00"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
