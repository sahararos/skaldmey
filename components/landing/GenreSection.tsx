import GenreButton from "../ui/GenreButton";
import { PiSwordLight, PiCaretLeft, PiGhostLight, PiPlanetLight, PiLightningThin, PiCoffeeLight, PiCrownSimpleLight, PiHeartLight } from "react-icons/pi";
// import { TbGhost } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
// import { IoIosHeartEmpty } from "react-icons/io";



export default function GenreSection() {
  return (
    <section className="border-t-2 border-borderline py-10 lg:py-20 lg:px-15">
      <div className="flex flex-col items-center justify-center">
          {/* Mobile version */}
         <h1 className="font-literata text-6xl font-normal tracking-wide text-[#C1C1C1] hover:text-[#A3A3A3] block md:hidden"
        >
          BÓKA-
          <br />
          FLOKKAR
        </h1>

        {/* Desktop and tablet version */}
        <h1 className="font-literata font-normal tracking-wide text-[#C1C1C1] hover:text-[#A3A3A3]
                      md:text-[100px] lg:text-[140px] hidden md:block
                      "
        >
          BÓKAFLOKKAR
        </h1>

        <div className="relative mt-4 w-full">

          {/* Left arrow */}
          {/* <button
            type="button"
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <PiCaretLeft className="text-3xl text-[#C1C1C1] scale-200" />
          </button> */}

          {/* Right arrow */}
          {/* <button
            type="button"
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <PiCaretLeft className="rotate-180 text-3xl text-[#C1C1C1] scale-200" />
          </button> */}

          {/* Scroll area */}
          <div className="overflow-x-auto hide-scrollbar scroll-smooth px-4 :px-20">
            <div className="flex min-w-full justify-center gap-6 md:gap-9 py-6 items-center">
              <GenreButton
                text="SciFi"
                icon={<PiPlanetLight className="h-11 w-11 md:h-14 md:w-14 text-[#2A2A2A]" />}
              />
              <GenreButton
                text="Fantasíu"
                icon={<PiSwordLight className="h-11 w-11 md:h-14 md:w-14 text-[#2A2A2A]" />}
              />
              <GenreButton
                text="Hrollvekjur"
                icon={<PiGhostLight className="h-11 w-11 md:h-14 md:w-14 text-[#2A2A2A]" />}
              />
              <GenreButton
                text="Smásögur"
                icon={<PiCoffeeLight className="h-11 w-11 md:h-14 md:w-14 text-[#2A2A2A]" />}
              />
              <GenreButton
                text="Spennu"
                icon={<PiLightningThin className="h-11 w-11 md:h-14 md:w-14 text-[#2A2A2A]" />}
              />
              <GenreButton
                text="Sögulegar"
                icon={<PiCrownSimpleLight className="h-11 w-11 md:h-14 md:w-14 text-[#2A2A2A]" />}
              />
              <GenreButton
                text="Rómantík"
                icon={<PiHeartLight className="h-11 w-11 md:h-14 md:w-14 text-[#2A2A2A]" />}
              />
              <GenreButton
                text="Ljóð"
                icon={<CiSearch className="h-11 w-11 md:h-14 md:w-14 text-[#2A2A2A]" />}
              />
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}