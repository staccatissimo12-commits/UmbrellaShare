import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import RentalForm from "@/components/RentalForm";
import AdvertiserSection from "@/components/AdvertiserSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <RentalForm />
        <AdvertiserSection />
      </main>
      <Footer />
    </div>
  );
}
