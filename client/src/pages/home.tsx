import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import WhyUsSection from "@/components/why-us-section";
import PriceListSection from "@/components/price-list-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
