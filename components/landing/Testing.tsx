import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full border-b border-borderline px-4 py-6 md:px-8 md:py-8 lg:px-20 lg:py-10 xl:px-32">
      <div className="mx-auto flex max-w-400 flex-col items-center lg:flex-row lg:items-center lg:gap-8">
        {/* IMAGE */}
        <div className="order-1 w-full lg:order-2 lg:w-[50%]">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/Hero/bookstash4.png"
              alt="Bækur"
              width={1100}
              height={1000}
              priority
              className="h-auto w-full max-w-105 object-contain md:max-w-140 lg:max-w-215 xl:max-w-230 lg:-translate-x-12 lg:-translate-y-4"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 flex w-full items-center justify-center pt-6 lg:order-1 lg:w-[50%] lg:justify-start lg:pt-0">
          <div className="w-full max-w-180 text-center lg:text-left">
            <div className="rounded-2xl bg-[#d9d9d9] px-8 py-10 md:px-12 md:py-12 lg:max-w-140 lg:px-16 lg:py-16">
              <h1 className="font-bebas text-5xl leading-[0.9] tracking-wide text-[#3C3C3C] md:text-7xl lg:text-[86px] xl:text-[94px]">
                <span className="whitespace-nowrap">Allar bækur</span>
                <br />
                á einum stað
              </h1>

              <p className="pb-6 pt-5 font-literata text-base tracking-wide text-[#4B4B4B] md:text-xl lg:max-w-95">
                Skoðaðu úrvalið okkar af rafbókum
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="rounded-xl bg-black px-5 py-2 text-white shadow-[0px_10px_20px_rgba(0,0,0,0.25)]">
                  <span className="font-montserrat text-sm font-medium tracking-widest">
                    Skoða nánar
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}