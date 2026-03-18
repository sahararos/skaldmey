import BookCard from "./BookCard";

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

type BookSliderProps = {
    bookSliderHeading: string;
    books: Book[]
};


export default function BookSlider({bookSliderHeading, books}: BookSliderProps) {

  if (!books || !books.length) return null;

  return (
    <section className="py-10 px-4 lg:px-15 lg:py-25 border-b-2 border-t-2 border-borderline">
        <h2 className="font-bebas text-4xl md:text-6xl lg:text-8xl text-[#4F4F4F]">
          {bookSliderHeading}
        </h2>
        <div className="overflow-x-auto hide-scrollbar scroll-smooth">
          <div className="flex w-max gap-6 md:gap-8 lg:gap-10 mt-5 md:mt-10 lg:mt-16 mb-6">
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
        </div>
    </section>
  );
}
