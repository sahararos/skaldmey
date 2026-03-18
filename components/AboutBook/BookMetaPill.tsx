type BookMetaPillProps = {
  genre: string;
  pubdate: string;
  pages: string;
};

export default function BookMetaPill({
  genre,
  pubdate,
  pages,
}: BookMetaPillProps) {
  return (
    <div className="inline-flex max-w-full items-center justify-center rounded-full border border-[#D6D6D6] px-3 py-2 lg:border-2 lg:px-6 lg:py-1.5">
      <p className="whitespace-nowrap font-montserrat text-xs font-medium tracking-wide text-[#5B5B5B] lg:text-base">
        {genre}
      </p>

      <div className="mx-3 h-5 w-px bg-[#D6D6D6] lg:mx-5 lg:h-8 lg:w-0.5" />

      <p className="whitespace-nowrap font-montserrat text-xs font-medium tracking-wide text-[#5B5B5B] sm:text-sm lg:text-base">
        {pubdate}
      </p>

      <div className="mx-3 h-5 w-px bg-[#D6D6D6] lg:mx-5 lg:h-8 lg:w-0.5" />

      <p className="whitespace-nowrap font-montserrat text-xs font-medium tracking-wide text-[#5B5B5B] sm:text-sm lg:text-base">
        {pages}
      </p>
    </div>
  );
}