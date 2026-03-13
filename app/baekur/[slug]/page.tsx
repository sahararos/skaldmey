import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import BookTabs from "@/components/AboutBook/BookTabs";
import BookRating from "@/components/AboutBook/BookRating";
import BookTag from "@/components/ui/BookTag";
import AboutBookCard from "@/components/ui/AboutBookCard";
import BookInfoContent from "@/components/AboutBook/BookInfoContent";
import BookSlider from "@/components/ui/BookSlider";
import { client } from "@/lib/sanity/client";
import { 
  bookBySlugQuery,
  booksByAuthorQuery,
  booksByGenreQuery
} from "@/lib/sanity/queries";

type AboutBookPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AboutBookPage({ params }: AboutBookPageProps) {
  const { slug } = await params;

  const book = await client.fetch(bookBySlugQuery, { slug });
  
  const moreByAuthor = await client.fetch(booksByAuthorQuery, {
    author: book.author,
    slug,
  });

  const relatedBooks = await client.fetch(booksByGenreQuery, {
    genre: book.genre,
    slug,
  })
  
  if (!book) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] items-center justify-center">
          <p className="font-montserrat text-xl text-[#4F4F4F]">
            Bók fannst ekki.
          </p>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
        <main>
          <section className="flex justify-center mt-20 mb-30 gap-10">
            {/* Left column, Book cover, ratings, tags */}
            <div className="flex flex-col items-center max-w-76.25">
              <AboutBookCard
                title={book.title}
                coverImage={book.coverImage?.asset?.url || ""}
                spineColor={book.spineColor}
              />
              <BookRating
                ratingCount={120} 
              />
              <BookTag 
                tags={book.tags || []}
              />
            </div>
            
            {/* Right column, Book info, book tabs */}
            <div className="flex flex-col gap-32">
              <BookInfoContent 
                title={book.title}
                author={book.author}
                price={`${book.price} kr.`}
                genre={book.genre}
                pubdate={String(book.pubdate)}
                pages={`${book.pages} bls.`}
              />
              <BookTabs 
                shortDescription={book.shortDescription || ""}
                fullDescription={book.fullDescription || ""}
              />
            </div>
          </section>
          <section className="w-full border-t-2 border-borderline">
            <BookSlider 
              bookSliderHeading="Fleira eftir höfund"
              books={moreByAuthor}
            />
          </section>
          <section className="w-full border-t-2 border-borderline">
            <BookSlider 
              bookSliderHeading="Tengdar bækur"
              books={relatedBooks}
            />
          </section>
        </main>

      <Footer />
    </>
  );
}