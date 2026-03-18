import BlackButton from "../ui/BlackButton";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import FavoritesButton from "../ui/FavoritesButton";

type BookInfoContentProps = {
  title: string;
  author: string;
  price: string;
  genre: string;
  pubdate: string;
  pages: string;
};

export default function BookInfoContent({
  title,
  author,
  price,
  genre,
  pubdate,
  pages,
}: BookInfoContentProps) {
  return (
    <div className="w-full min-w-0">
        <div className="border-b-2 border-borderline pb-3">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h1 className="wrap-break-word font-bebas text-[52px] leading-[0.9] tracking-wide text-[#4F4F4F] md:text-7xl lg:text-[90px]">
                        {title}
                    </h1>

                    <p className="mt-1 font-montserrat text-base lg:text-lg tracking-wide text-[#2A2A2A]">
                        {author}
                    </p>
                    </div>

                    <p className="shrink-0 whitespace-nowrap font-literata text-2xl tracking-wide text-[#2A2A2A] md:text-3xl">
                    {price}
                    </p>
                </div>
            </div>

            {/* Book info pill */}
            <div className="pt-6 md:pt-8 lg:pt-10">
                <div className="inline-flex max-w-full overflow-x-auto items-center rounded-full border-2 border-[#D6D6D6] px-4 py-1 md:px-6">
                <p className="whitespace-nowrap font-montserrat text-sm lg:text-base font-medium tracking-wider text-[#5B5B5B]">
                    {genre}
                </p>

                <div className="mx-3 h-6 w-px bg-[#D6D6D6] md:mx-5 md:h-8" />

                <p className="font-montserrat text-sm lg:text-base font-medium tracking-wider text-[#5B5B5B]">
                    {pubdate}
                </p>

                <div className="mx-5 h-8 w-0.5 bg-[#D6D6D6]" />

                <p className="whitespace-nowrap font-montserrat text-sm font-medium tracking-wide text-[#5B5B5B] md:text-base">
                    {pages}
                </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 md:gap-6 pt-6 md:pt-8 lg:pt-20">
                <BlackButton
                    text="Setja í körfu"
                    icon={<PiShoppingCartSimpleBold className="h-6 w-6 text-[#f5f5f5]" />}
                />
                <FavoritesButton />
            </div>
        </div>
    </div>
  );
}