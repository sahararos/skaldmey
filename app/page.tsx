import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import GenreSection from "@/components/landing/GenreSection";
import BookSlider from "@/components/ui/BookSlider";
import Promo from "@/components/landing/Promo";
import Footer from "@/components/landing/Footer";
import { client } from "@/lib/sanity/client";
import { allBooksQuery } from "@/lib/sanity/queries";
// import Testing from "@/components/landing/Testing";

type Book = {
  _id: string;
  title: string;
  author: string;
  slug?: {
    current: string;
  };
  coverImage?: {
    asset?: {
      url?: string;
    };
  };
};

export default async function Home() {
  const allBooks: Book[] = await client.fetch(allBooksQuery);

  return (
    <>
      <main className="flex-1">
        <Navbar />
        <Hero />
        <GenreSection />
        <BookSlider
          bookSliderHeading="Vinsælar bækur"
          books={allBooks}
        />
        <Promo />
        
        <BookSlider
          bookSliderHeading="Mest lesið"
          books={allBooks}
        />
      </main>
      <Footer />
    </>
  );
}