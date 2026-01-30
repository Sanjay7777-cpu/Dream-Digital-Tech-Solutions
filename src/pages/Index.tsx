import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import ClientsSection from "@/components/home/ClientsSection";
import USPSection from "@/components/home/USPSection";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesPreview />
        <ClientsSection />
        <USPSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
