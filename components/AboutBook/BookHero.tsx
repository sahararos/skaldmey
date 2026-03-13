import BookInfoContent from "./BookInfoContent";
import AboutBookCard from "../ui/AboutBookCard";
// import BookRating from "./BookRating";
// import BookTag from "../ui/BookTag";

export default function BookHero() {
  return (
    <section className="mt-20 flex justify-center">
      <div className="flex w-full max-w-275 items-start gap-10">
        <AboutBookCard
          title="Sálarstríð"
          coverImage="/bookcovers/salarstrid.png"
        />
        <BookInfoContent
          title="Sálarstríð"
          author="Steindór Ívarsson"
          price="2.990 kr."
          genre="Rómantík"
          pubdate="2022"
          pages="300 bls."
        />
      </div>
      {/* <div>
        <BookRating
          ratingCount={120} 
        />
        <BookTag 
          tags={["Hugljúf", "LGBTQA+", "Ofbeldissambönd", "Söguleg", "Rómantík"]}
        />
      </div> */}
    </section>
  );
}