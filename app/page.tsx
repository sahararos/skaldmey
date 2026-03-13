import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import GenreSection from "@/components/landing/GenreSection";
import BookSlider from "@/components/landing/BookSlider";
import Promo from "@/components/landing/Promo";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Navbar />
        <Hero />
        <GenreSection />
        <BookSlider 
          bookSliderHeading="Vinsælar bækur"
        />
        <Promo />
        <BookSlider 
          bookSliderHeading="Mest lesið"
        />
      </main>
      <Footer />
    </>
  );
}