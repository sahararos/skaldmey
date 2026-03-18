import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import BookTabs from "@/components/AboutBook/BookTabs";
import BookRating from "@/components/AboutBook/BookRating";
import BookTag from "@/components/ui/BookTag";
import AboutBookCard from "@/components/ui/AboutBookCard";
import BookSlider from "@/components/ui/BookSlider";
import BookHeaderContent from "@/components/AboutBook/BookHeaderContent";
import BookMetaPill from "@/components/AboutBook/BookMetaPill";
import BookActions from "@/components/AboutBook/BookActions";
import { client } from "@/lib/sanity/client";
import {
  bookBySlugQuery,
  booksByAuthorQuery,
  booksByGenreQuery,
} from "@/lib/sanity/queries";

type AboutBookPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AboutBookPage({ params }: AboutBookPageProps) {
  const { slug } = await params;

  const book = await client.fetch(bookBySlugQuery, { slug });

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

  const moreByAuthor = await client.fetch(booksByAuthorQuery, {
    author: book.author,
    slug,
  });

  const relatedBooks = await client.fetch(booksByGenreQuery, {
    genre: book.genre,
    slug,
  });

  return (
    <>
      <Navbar />

      <main>
        <section className="px-4 py-6 md:px-8 md:py-10 lg:px-15 lg:py-20">
          <div className="mx-auto max-w-350">
            {/* MOBILE / TABLET */}
            <div className="flex flex-col lg:hidden">
              <BookHeaderContent
                title={book.title}
                author={book.author}
                price={`${book.price} kr.`}
              />

              {/* Bigger mobile cover */}
              <div className="mt-6 flex justify-center">
                <div className="w-58 sm:w-58">
                  <AboutBookCard
                    title={book.title}
                    coverImage={book.coverImage?.asset?.url || ""}
                    spineColor={book.spineColor}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <BookRating ratingCount={120} />
              </div>

              <div className="py-6 flex justify-center">
                <BookMetaPill
                  genre={book.genre}
                  pubdate={String(book.pubdate)}
                  pages={`${book.pages} bls.`}
                />
              </div>

              <div className="py-2 flex justify-center">
                <BookActions />
              </div>

              <div className="mt-12">
                <BookTabs
                  shortDescription={book.shortDescription || ""}
                  fullDescription={book.fullDescription || ""}
                />
              </div>

              <div className="mt-10 mb-8">
                <BookTag tags={book.tags || []} />
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:flex lg:justify-center lg:gap-10">
              <div className="flex max-w-76.25 flex-col items-center">
                <div className="w-76.25">
                  <AboutBookCard
                    title={book.title}
                    coverImage={book.coverImage?.asset?.url || ""}
                    spineColor={book.spineColor}
                  />
                </div>

                <div className="mt-8">
                  <BookRating ratingCount={120} />
                </div>

                <div className="mt-8 w-full">
                  <BookTag tags={book.tags || []} />
                </div>
              </div>

              <div className="min-w-0">
                <BookHeaderContent
                  title={book.title}
                  author={book.author}
                  price={`${book.price} kr.`}
                />

                <div className="mt-10">
                  <BookMetaPill
                    genre={book.genre}
                    pubdate={String(book.pubdate)}
                    pages={`${book.pages} bls.`}
                  />
                </div>

                <div className="mt-20">
                  <BookActions />
                </div>

                <div className="mt-32">
                  <BookTabs
                    shortDescription={book.shortDescription || ""}
                    fullDescription={book.fullDescription || ""}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <BookSlider
          bookSliderHeading="Fleiri eftir höfund"
          books={moreByAuthor}
        />
        <BookSlider
          bookSliderHeading="Tengdar bækur"
          books={relatedBooks}
        />
          
      </main>

      <Footer />
    </>
  );
}