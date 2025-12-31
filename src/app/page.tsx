import LandingSection from "@/components/LandingSection";
import MemoriesGallery from "@/components/MemoriesGallery";
import LoveLetter from "@/components/LoveLetter";
import SurpriseReveal from "@/components/SurpriseReveal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-0 pb-0">
      <LandingSection />
      <MemoriesGallery />
      <LoveLetter />
      <SurpriseReveal />
      <Footer />
    </div>
  );
}
