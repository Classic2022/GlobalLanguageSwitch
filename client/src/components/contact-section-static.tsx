"use client"

import { useState, useRef } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

// This is an optimized version of the contact form for static site hosting
// It uses a PHP form handler instead of the Node.js API endpoint

export default function ContactSectionStatic() {
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
    
    // Create FormData object for PHP submission
    const formData = new FormData()
    
    // Add form fields to FormData
    formData.append('name', nameRef.current?.value || "")
    formData.append('email', emailRef.current?.value || "")
    formData.append('phone', phoneRef.current?.value || "")
    formData.append('message', messageRef.current?.value || "")
    
    // Add selected services to FormData
    if (repairsRef.current?.checked) formData.append('services[]', language === "de" ? "Reparaturen" : "Repairs")
    if (locksmithRef.current?.checked) formData.append('services[]', language === "de" ? "Schlüsseldienst" : "Locksmith")
    if (transportRef.current?.checked) formData.append('services[]', language === "de" ? "Transporte" : "Transport")
    if (assemblyRef.current?.checked) formData.append('services[]', language === "de" ? "Möbelaufbau" : "Assembly")
    
    // Validate required fields
    if (!nameRef.current?.value || !emailRef.current?.value || !messageRef.current?.value) {
      setSubmitStatus('error')
      setStatusMessage(language === "de" 
        ? "Bitte füllen Sie alle erforderlichen Felder aus."
        : "Please fill in all required fields.")
      return
    }
    
    try {
      setIsSubmitting(true)
      
      // Submit to PHP handler
      const response = await fetch('/form-handler.php', {
        method: 'POST',
        body: formData
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
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
        setStatusMessage(data.message || (language === "de"
          ? "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut."
          : "There was a problem sending your message. Please try again later."))
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setStatusMessage(language === "de"
        ? "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut."
        : "There was a problem sending your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2F2F2F] mb-4">
            {language === "de" ? "Kontakt" : "Contact Us"}
          </h2>
          <p className="text-[#2F2F2F]/70 max-w-2xl mx-auto">
            {language === "de"
              ? "Haben Sie Fragen oder benötigen Sie einen Service? Nehmen Sie Kontakt mit uns auf und wir werden uns schnellstmöglich bei Ihnen melden."
              : "Do you have questions or need a service? Contact us and we will get back to you as soon as possible."}
          </p>
        </div>
        
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
                    placeholder={language === "de" ? "Telefon (optional)" : "Phone (optional)"}
                    className="border-[#2F2F2F]/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#2F2F2F]">
                    {language === "de" ? "Gewünschte Leistungen (optional)" : "Services Requested (optional)"}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="repairs" ref={repairsRef} />
                      <Label htmlFor="repairs" className="text-[#2F2F2F]/80">
                        {language === "de" ? "Reparaturen" : "Repairs"}
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="locksmith" ref={locksmithRef} />
                      <Label htmlFor="locksmith" className="text-[#2F2F2F]/80">
                        {language === "de" ? "Schlüsseldienst" : "Locksmith"}
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="transport" ref={transportRef} />
                      <Label htmlFor="transport" className="text-[#2F2F2F]/80">
                        {language === "de" ? "Transporte" : "Transport"}
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="assembly" ref={assemblyRef} />
                      <Label htmlFor="assembly" className="text-[#2F2F2F]/80">
                        {language === "de" ? "Möbelaufbau" : "Assembly"}
                      </Label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Textarea
                    ref={messageRef}
                    placeholder={language === "de" ? "Ihre Nachricht" : "Your Message"}
                    required
                    className="min-h-[120px] border-[#2F2F2F]/20"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-[#1A4D3C] hover:bg-[#1A4D3C]/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>{language === "de" ? "Wird gesendet..." : "Sending..."}</span>
                  ) : (
                    <span>{language === "de" ? "Nachricht senden" : "Send Message"}</span>
                  )}
                </Button>
                
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm mt-2">{statusMessage}</p>
                )}
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