type BookHeaderContentProps = {
  title: string;
  author: string;
  price: string;
};

export default function BookHeaderContent({
  title,
  author,
  price,
}: BookHeaderContentProps) {
  return (
    <div className="w-full border-b border-borderline pb-3 lg:border-b-2">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div className="min-w-0">
          <h1 className="font-bebas text-4xl tracking-wide text-[#4F4F4F] lg:text-7xl wrap-break-word">
            {title}
          </h1>

          <div className="lg:pt-2 flex items-end justify-between gap-4 lg:block">
            <p className="font-montserrat text-sm tracking-wide text-[#2A2A2A] sm:text-base lg:mt-1 lg:text-lg">
              {author}
            </p>

            <p className="shrink-0 whitespace-nowrap font-literata text-[20px] tracking-wide text-[#2A2A2A] sm:text-[24px] lg:hidden">
              {price}
            </p>
          </div>
        </div>

        <p className="hidden shrink-0 whitespace-nowrap font-literata text-3xl tracking-wide text-[#2A2A2A] lg:block">
          {price}
        </p>
      </div>
    </div>
  );
}