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
    
    // Submit form
    try {
      setIsSubmitting(true)
      
      const response = await apiRequest(
        "POST",
        "/api/contact",
        {
          name,
          email,
          phone,
          message,
          services
        }
      )
      
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
    <section id="contact" className="py-16 md:py-24 bg-[#F8F8F8]">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] text-center mb-12">
          {language === "de" ? "Kontakt" : "Contact"}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">
                  {language === "de" ? "Nachricht gesendet!" : "Message Sent!"}
                </h3>
                <p className="text-[#2F2F2F]/80 mb-6">{statusMessage}</p>
                <Button 
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-[#1A4D3C] hover:bg-[#1A4D3C]/90 text-white"
                >
                  {language === "de" ? "Neues Formular" : "New Form"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    ref={nameRef}
                    type="text"
                    placeholder={language === "de" ? "Name" : "Name"}
                    required
                    className="border-[#2F2F2F]/20"
                  />
                </div>
                <div>
                  <Input
                    ref={emailRef}
                    type="email"
                    placeholder={language === "de" ? "Email" : "Email"}
                    required
                    className="border-[#2F2F2F]/20"
                  />
                </div>
                <div>
                  <Input
                    ref={phoneRef}
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
                      <input ref={repairsRef} type="checkbox" className="rounded border-[#2F2F2F]/20" />
                      <span className="text-sm">{language === "de" ? "Reparaturen" : "Repairs"}</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input ref={locksmithRef} type="checkbox" className="rounded border-[#2F2F2F]/20" />
                      <span className="text-sm">{language === "de" ? "Schlüsseldienst" : "Locksmith"}</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input ref={transportRef} type="checkbox" className="rounded border-[#2F2F2F]/20" />
                      <span className="text-sm">{language === "de" ? "Transporte" : "Transport"}</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input ref={assemblyRef} type="checkbox" className="rounded border-[#2F2F2F]/20" />
                      <span className="text-sm">{language === "de" ? "Möbelaufbau" : "Assembly"}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <Textarea
                    ref={messageRef}
                    placeholder={language === "de" ? "Nachricht" : "Message"}
                    required
                    className="min-h-[120px] border-[#2F2F2F]/20"
                  />
                </div>
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-start">
                    <XCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{statusMessage}</p>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#1A4D3C] hover:bg-[#1A4D3C]/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {language === "de" ? "Wird gesendet..." : "Submitting..."}
                    </>
                  ) : (
                    language === "de" ? "Absenden" : "Submit"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Urban Reparaturen</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#1A4D3C] mr-3" />
                <a href="tel:+4917661613134" className="text-[#2F2F2F]/80 hover:text-[#1A4D3C]">
                  +49 176 61613134
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#1A4D3C] mr-3" />
                <a href="mailto:info@urban-r.de" className="text-[#2F2F2F]/80 hover:text-[#1A4D3C]">
                  info@urban-r.de
                </a>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#1A4D3C] mr-3 mt-0.5" />
                <div className="text-[#2F2F2F]/80">
                  <p>Konstanzerstr. 54</p>
                  <p>10707 Berlin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
