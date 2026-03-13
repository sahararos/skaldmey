import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import GenreSection from "@/components/landing/GenreSection";
import BookSlider from "@/components/ui/BookSlider";
import Promo from "@/components/landing/Promo";
import Footer from "@/components/landing/Footer";
import { client } from "@/lib/sanity/client";
import { allBooksQuery, allGenresQuery } from "@/lib/sanity/queries";

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

  const books: Book[] = await client.fetch(allBooksQuery);

  const genres = await client.fetch(allGenresQuery);

  return (
    <>
      <main className="flex-1">
        <Navbar />
        <Hero />
        <GenreSection 
          genres={genres}
        />
        <BookSlider 
          bookSliderHeading="Vinsælar bækur"
          books={books}
        />
        <Promo />
        <BookSlider 
          bookSliderHeading="Mest lesið"
          books={books}
        />
      </main>
      <Footer />
    </>
  );
}