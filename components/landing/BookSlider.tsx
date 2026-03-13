import BookCard from "../ui/BookCard"
import { client } from "@/lib/sanity/client";
import { allBooksQuery } from "@/lib/sanity/queries";

type BookSliderProps = {
    bookSliderHeading: string;
}

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

export default async function BookSlider({bookSliderHeading}: BookSliderProps) {

  const books: Book[] = await client.fetch(allBooksQuery);

  return (
    <section className="px-15 py-30">
        <h2 className="font-bebas text-8xl text-[#4F4F4F]">
          {bookSliderHeading}
        </h2>
        <div className="mt-16 flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth">
          {books.map((book) => (
            <BookCard
              key={book._id}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage?.asset?.url || "/bookcovers/fallback.jpg"}
              slug={book.slug?.current || ""}
            />
          ))}
        </div>
    </section>
  );
}
