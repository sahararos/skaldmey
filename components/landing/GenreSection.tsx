import GenreButton from "../ui/GenreButton";
import { IoPlanetOutline, IoHeartOutline } from "react-icons/io5";
import { PiSword, PiCrownSimple } from "react-icons/pi";
import { TbGhost } from "react-icons/tb";
import { VscCoffee } from "react-icons/vsc";
import { BsLightning } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

export default function GenreSection() {
  return (
    <section className="border-b-2 border-borderline py-30">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-literata text-[140px] font-normal leading-27.5 tracking-wide text-[#C1C1C1]">
          BÓKAFLOKKAR
        </h1>

        <div className="mt-20 w-full overflow-x-auto hide-scrollbar scroll-smooth">
          <div className="flex w-max gap-8 px-15">
            <GenreButton
              text="SciFi"
              icon={<IoPlanetOutline className="h-12 w-12 text-[#2A2A2A]" />}
            />
            <GenreButton
              text="Fantasíu"
              icon={<PiSword className="h-12 w-12 text-[#2A2A2A]" />}
            />
            <GenreButton
              text="Hryllings"
              icon={<TbGhost className="h-12 w-12 text-[#2A2A2A]" />}
            />
            <GenreButton
              text="Smásögur"
              icon={<VscCoffee className="h-12 w-12 text-[#2A2A2A]" />}
            />
            <GenreButton
              text="Spennu"
              icon={<BsLightning className="h-12 w-12 text-[#2A2A2A]" />}
            />
            <GenreButton
              text="Sögulegar"
              icon={<PiCrownSimple className="h-12 w-12 text-[#2A2A2A]" />}
            />
            <GenreButton
              text="Rómantík"
              icon={<IoHeartOutline className="h-12 w-12 text-[#2A2A2A]" />}
            />
            <GenreButton
              text="Smásögur"
              icon={<GoSearch className="h-12 w-12 text-[#2A2A2A]" />}
            />
             <GenreButton
              text="Ljóð"
              icon={<GoSearch className="h-12 w-12 text-[#2A2A2A]" />}
            />
             <GenreButton
              text="Erótík"
              icon={<GoSearch className="h-12 w-12 text-[#2A2A2A]" />}
            />
             <GenreButton
              text="Ungmenna"
              icon={<GoSearch className="h-12 w-12 text-[#2A2A2A]" />}
            />
            <GenreButton
              text="Ungmenna"
              icon={<GoSearch className="h-12 w-12 text-[#2A2A2A]" />}
            />
            <GenreButton
              text="Ungmenna"
              icon={<GoSearch className="h-12 w-12 text-[#2A2A2A]" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}