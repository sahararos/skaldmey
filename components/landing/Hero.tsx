import Image from "next/image";
import BlackButton from "../ui/BlackButton";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export default function Hero() {
  return (
    <section
      className="
        flex flex-col gap-8 px-4 py-4
        md:px-8 md:py-14
        lg:flex-row lg:items-center lg:gap-10 lg:px-15 lg:py-4
      "
    >
      {/* Text area */}
      <div className="w-full lg:w-1/2">
        <div
          className="
            flex flex-col justify-center items-center
            rounded-2xl bg-[#e3e3e3]
            px-8 py-10
            md:px-12 md:py-14
            lg:min-h-120 lg:px-14 lg:py-16
          "
        >
          <div
            className="
              flex flex-col items-center text-center
              lg:items-start lg:text-left
            "
          >
            <div className="w-full max-w-130">
              <h1 className="font-bebas text-5xl tracking-wide text-[#3C3C3C] md:text-7xl lg:text-8xl">
                Allar bækur
                <br />
                á einum stað
              </h1>

              <p className="pt-2 font-literata text-sm tracking-wider text-[#3C3C3C] md:text-base lg:text-xl">
                Skoðaðu úrvalið okkar af rafbókum
              </p>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-10">
              <BlackButton
                text="Skoða bækur"
                icon={
                  <PiShoppingCartSimpleBold className="h-6 w-6 text-[#f5f5f5]" />
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image area */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="w-full max-w-95 md:max-w-125 lg:max-w-155">
          <Image
            src="/Hero/bookstash4.png"
            alt="Bókakápur"
            width={620}
            height={620}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}