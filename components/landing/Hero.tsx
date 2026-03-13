import Image from "next/image";
import BlackButton from "../ui/BlackButton";
import { PiShoppingCartSimpleBold } from "react-icons/pi";



export default function Hero() {
  return (
    <section className="px-15 pt-18 pb-15 border-b-2 border-borderline">
      <div className="relative">
        {/* Grey box */}
        <div className="flex h-110 w-[60%] items-center justify-center rounded-2xl bg-[#D6D6D6]">
          {/* Content in grey box */}
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Font section */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bebas text-[100px] leading-27.5 tracking-wide text-[#3C3C3C]">
                Allar bækur
                <br />
                á einum stað
              </h1>
              <p className="font-literata text-2xl tracking-wider text-[#4F4F4F]">
                Skoðaðu úrvalið okkar af rafbókum
              </p>
            </div>
            <BlackButton 
              text="Skoða bækur"
              icon={<PiShoppingCartSimpleBold className="text-[#f5f5f5] w-6 h-6" />}
            />
          </div>
        </div>

        {/* Books */}
        <div className="absolute right-2 top-[57%] z-10 -translate-y-1/2">
          <Image
            src="/hero/hero-books.png"
            alt=""
            width={560}
            height={560}
            className="h-auto w-full max-w-180"
            priority
          />
        </div>
      </div>
    </section>
  );
}