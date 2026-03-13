import Image from "next/image";
import BlackButton from "../ui/BlackButton";

export default function Promo() {
  return (
    <>
      <section className="border-y-2 border-borderline">
        <div className="grid items-center md:grid-cols-2">
          {/* Left side */}
          <div className="flex justify-center items-center min-h-105 bg-[#D9D9D9]">
            <Image
              src="/promo/E-reader.png"
              alt="Lesbretti"
              width={500}
              height={500}
              className="h-auto w-full max-w-130"
              priority
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-6 items-center">
            <div className="pb-8">
                <h2 className="font-bebas text-[100px] leading-26.5 tracking-wide text-[#4F4F4F]">
                Margar bækur
                <br />
                á einu bretti
                </h2>
                <p className="font-literata text-2xl tracking-wider text-[#636363]">
                Skoðaðu úrvalið okkar af lesbrettum
                </p>
            </div>
            <BlackButton 
              text={"Skoða úrval"}
              icon={null} // Or appropriate icon component
            />
          </div>
        </div>
      </section>
    </>
  );
}