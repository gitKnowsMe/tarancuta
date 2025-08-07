import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProductCategories from "@/components/product-categories";
import AboutSection from "@/components/about-section";
import WeeklyBaskets from "@/components/weekly-baskets";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-cream text-warm-gray font-sans">
      <Navigation />
      <HeroSection />
      <ProductCategories />
      <AboutSection />
      <WeeklyBaskets />
      <Testimonials />
      <Footer />
    </div>
  );
}
