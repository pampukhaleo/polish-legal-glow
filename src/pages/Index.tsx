
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SupportedBySection from "@/components/SupportedBySection";
import SEOHead from "@/components/SEOHead";
import MetaTags from "@/components/MetaTags";
import { OrganizationStructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F1729]">
      <MetaTags />
      <SEOHead 
        title="Геннадій Пампуха | Професійна Юридична та Експертна допомога українцям у Польщі"
        description="Експертні юридичні консультації для українців з питань польського законодавства, бізнес-регулювання та імміграційних процесів."
        keywords="юридичні послуги, консультації, польське право, українці в Польщі, міжнародне право, експерт, адвокат, Геннадій Пампуха"
        canonical="/"
      />
      <OrganizationStructuredData
        name="Геннадій Пампуха - Міжнародний Юридичний та Експертний Консалт"
        description="Професійні юридичні послуги для українців у Польщі. Міжнародний арбітраж, імміграційні консультації, бізнес-право."
        url="https://pampukha.pl"
        address={{
          streetAddress: "J.Hallera 1/20",
          addressLocality: "Opole",
          addressCountry: "Poland"
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PartnersSection />
        <SupportedBySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
