import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Promo() {
  return (
    <section className="overflow-hidden py-10 px-4 md:px-6 lg:px-15 lg:py-15 lg:pb-15">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-8 lg:gap-12">
        
        {/* Image */}
        <div
          className="
            relative w-full shrink-0 overflow-hidden rounded-tr-4xl rounded-bl-4xl
            aspect-3/2 max-h-80
            md:w-[48%] md:aspect-4/5 md:max-h-130
            lg:max-h-155
          "
        >
          <Image
            src="/promo/sesselia-olafs.jpg"
            alt="Sesselía Ólafs"
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 48vw, 50vw"
          />
        </div>

        {/* Text */}
        <div className="w-full min-w-0 md:flex-1 md:px-0">
            <h2
                className="
                font-literata font-medium tracking-wide text-[#4F4F4F]
                text-4xl leading-[1.2]
                md:text-[clamp(2.5rem,5vw,4.5rem)]
                lg:text-[clamp(3.5rem,5vw,5.5rem)]
                wrap-break-words
                "
            >
                RITHÖFUNDUR
                <br />
                MÁNAÐARINS
            </h2>

            <p
                className="
                mt-6 mb-2 font-montserrat text-[#2A2A2A] leading-relaxed
                text-base
                md:max-w-[58ch] md:text-[17px]
                lg:mt-8 lg:text-lg
                "
            >
                Akureyringurinn Sesselía Ólafs var nýlega tilnefnd til Íslensku
                bókmenntaverðlaunanna, í flokki barna- og ungmennabóka, fyrir
                Silfurberg. Bókin er frumraun Sesselíu sem skáldsagnahöfundar og
                útgefandi er Bókabeitan.
            </p>
            <button
                type="button"
                className="flex items-center justify-center gap-1"
            >
                <p className="font-montserrat font-semibold text-base text-[#2A2A2A]">
                  Lesa meira
                </p>    
                <IoIosArrowForward 
                    className="w-5 h-5"
                />
            </button>
        </div>
      </div>
    </section>
  );
}