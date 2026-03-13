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
    <div className="w-185 max-w-185">
        <div className="border-b-2 border-borderline pb-3.5">
            <div className="flex items-start justify-between gap-8">
                <div>
                    <h1 className="font-bebas text-[80px] leading-[0.9] tracking-wide text-[#4F4F4F]">
                        {title}
                    </h1>

                    <p className="mt-1 font-montserrat text-lg tracking-wide text-[#2A2A2A]">
                        {author}
                    </p>
                    </div>

                    <p className="self-end whitespace-nowrap font-literata text-3xl tracking-wide text-[#2A2A2A]">
                    {price}
                    </p>
                </div>
            </div>

            {/* Book info pill */}
            <div className="pt-10">
                <div className="inline-flex items-center rounded-full border-2 border-[#D6D6D6] px-6 py-1">
                <p className="font-montserrat text-base font-medium tracking-wider text-[#5B5B5B]">
                    {genre}
                </p>

                <div className="mx-5 h-8 w-0.5 bg-[#D6D6D6]" />

                <p className="font-montserrat text-base font-medium tracking-wider text-[#5B5B5B]">
                    {pubdate}
                </p>

                <div className="mx-5 h-8 w-0.5 bg-[#D6D6D6]" />

                <p className="font-montserrat text-base font-medium tracking-wider text-[#5B5B5B]">
                    {pages}
                </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-6 pt-20">
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