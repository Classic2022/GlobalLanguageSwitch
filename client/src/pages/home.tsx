import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import WhyUsSection from "@/components/why-us-section";
import PriceListSection from "@/components/price-list-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function Home() {
  // Define SEO metadata for this page in both languages
  const seoMetadata = {
    title: {
      de: "Urban Reparaturen - Ihr Partner für Wohnungspflege in Berlin",
      en: "Urban Reparaturen - Your Partner for Apartment Care in Berlin"
    },
    description: {
      de: "Professionelle Dienstleistungen für Wohnungspflege in Berlin - Reparaturen, Schlüsseldienst, Möbelmontage und mehr. Zuverlässig und kompetent.",
      en: "Professional apartment care services in Berlin - repairs, locksmith, furniture assembly and more. Reliable and competent service."
    },
    keywords: {
      de: "Wohnungspflege Berlin, Reparaturen Berlin, Schlüsseldienst, Möbelmontage, Handwerker Berlin, Sanitärarbeiten, Elektroarbeiten, Malerarbeiten",
      en: "Apartment care Berlin, repairs Berlin, locksmith, furniture assembly, handyman Berlin, plumbing, electrical work, painting"
    },
    ogImage: "/images/handyman-kitchen-service.png"
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <SEOHead metadata={seoMetadata} />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <PriceListSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
