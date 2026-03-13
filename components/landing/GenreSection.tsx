import GenreButton from "../ui/GenreButton";
import {
  IoPlanetOutline,
  IoHeartOutline,
  IoSearchOutline,
  IoBookOutline
} from "react-icons/io5";

import {
  PiSword,
  PiCrownSimple,
  PiFlower
} from "react-icons/pi";

import {
  TbGhost,
  TbMask
} from "react-icons/tb";

import {
  VscCoffee
} from "react-icons/vsc";

import {
  BsLightning,
  BsBullseye
} from "react-icons/bs";

import {
  FaBasketballBall,
  FaFeatherAlt,
  FaUser,
  FaHourglassHalf
} from "react-icons/fa";

const iconMap = {
  planet: IoPlanetOutline,
  sword: PiSword,
  ghost: TbGhost,
  coffee: VscCoffee,
  lightning: BsLightning,
  crown: PiCrownSimple,
  heart: IoHeartOutline,
  search: IoSearchOutline,

  ball: FaBasketballBall,
  quill: FaFeatherAlt,
  masks: TbMask,
  hourglass: FaHourglassHalf,
  books: IoBookOutline,
  bullseye: BsBullseye,
  user: FaUser,
  flower: PiFlower,
  heartlock: PiFlower, // Placeholder for heartlock icon
  runes: PiFlower, // Placeholder for runes icon
  mobile: PiFlower, // Placeholder for mobile icon
  studentcap: PiFlower, // Placeholder for studentcap icon
  bear: PiFlower, // Placeholder for bear icon
  fountainpen: PiFlower, // Placeholder for fountainpen icon
};

type Genre = {
  _id: string;
  title: string;
  icon?: keyof typeof iconMap; 
};

type GenreSectionProps = {
  genres: Genre[];
};

export default function GenreSection({genres}: GenreSectionProps) {
  return (
    <section className="border-b-2 border-borderline py-30">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-literata text-[140px] font-normal leading-27.5 tracking-wide text-[#C1C1C1]">
          BÓKAFLOKKAR
        </h1>

        <div className="mt-20 w-full overflow-x-auto hide-scrollbar scroll-smooth">
          <div className="flex w-max gap-10 px-15">
            {genres.map((genre) => {
              const Icon = genre.icon ? iconMap[genre.icon] : IoSearchOutline;

              return (
                <GenreButton
                  key={genre._id}
                  text={genre.title}
                  icon={<Icon className="h-10 w-12 text-[#2A2A2A]" />}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}