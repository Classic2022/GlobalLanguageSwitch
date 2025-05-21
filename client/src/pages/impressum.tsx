import Link from "../next-link"
import { useLanguage } from "@/context/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SEOHead from "@/components/seo-head"

export default function Impressum() {
  const { language } = useLanguage()
  
  // Define SEO metadata for this page
  const seoMetadata = {
    title: {
      de: "Impressum | Urban Reparaturen",
      en: "Legal Notice | Urban Reparaturen"
    },
    description: {
      de: "Impressum und rechtliche Informationen von Urban Reparaturen - Ihr Partner für Wohnungspflege in Berlin.",
      en: "Legal notice and information for Urban Reparaturen - Your partner for apartment care in Berlin."
    },
    keywords: {
      de: "Impressum, Urban Reparaturen, Urban Hausverwaltung UH GmbH, Rechtliche Informationen",
      en: "Legal notice, Urban Reparaturen, Urban Hausverwaltung UH GmbH, Legal information"
    }
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <SEOHead metadata={seoMetadata} />
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-[#2F2F2F] mb-8">
            {language === "de" ? "Impressum" : "Legal Notice"}
          </h1>
          
          <div className="prose max-w-none text-[#2F2F2F]/80">
            <p className="font-bold">Urban Hausverwaltung UH GmbH</p>
            <p>Zähringerstr. 28</p>
            <p>10707 Berlin</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
              {language === "de" ? "Vertretungsberechtigt" : "Represented by"}:
            </h2>
            <p>{language === "de" ? "Geschäftsführer" : "Managing Director"}: Guy Ben Edelsburg</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
              {language === "de" ? "Kontakt" : "Contact"}:
            </h2>
            <p>{language === "de" ? "Telefon" : "Phone"}: 030 / 863 29 18 0</p>
            <p>{language === "de" ? "Telefax" : "Fax"}: 030 / 863 29 18 99</p>
            <p>E-Mail: <a href="mailto:info@urban-hausverwaltung.de" className="text-[#1A4D3C] hover:underline">info@urban-hausverwaltung.de</a></p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
              {language === "de" ? "Umsatzsteuer" : "VAT"}:
            </h2>
            <p>{language === "de" ? "Umsatzsteueridentifikationsnummer" : "VAT ID"}: DE325004180</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
              {language === "de" ? "Register" : "Register"}:
            </h2>
            <p>{language === "de" ? "Eingetragen im Handelsregister" : "Registered in the Commercial Register"}</p>
            <p>{language === "de" ? "Registergericht" : "Court of Registration"}: Amtsgericht Berlin (Charlottenburg)</p>
            <p>{language === "de" ? "Registernummer" : "Registration Number"}: HRB 207305 B</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
              {language === "de" ? "Aufsichtsbehörde" : "Supervisory Authority"}:
            </h2>
            <p>Ordnungsamt Charlottenburg-Wilmersdorf</p>
            <p>Hohenzollerndamm 174-177</p>
            <p>10713 Berlin</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
              {language === "de" 
                ? "Hinweis gemäß Verbraucherstreitbeilegungsgesetz (VSBG)" 
                : "Information according to Consumer Dispute Resolution Act (VSBG)"}:
            </h2>
            <p>
              {language === "de" 
                ? "Wir sind nicht bereit und verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
                : "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."}
            </p>
          </div>
          
          <div className="mt-10">
            <Link href="/" className="text-[#1A4D3C] hover:underline font-medium">
              {language === "de" ? "← Zurück zur Startseite" : "← Back to Homepage"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}