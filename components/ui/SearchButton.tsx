import Image from "next/image";

export default function SearchButton() {
    return (
        <button
            type="button"
            aria-label="Search"
            className="flex h-14 w-18 items-center justify-center rounded-xl bg-[#f5f5f5] 
                        shadow-[5px_5px_10px_rgba(0,0,0,0.25),-6px_-6px_22px_rgba(255,255,255,1)]
                        transition-all duration-200
                        hover:shadow-[6px_6px_12px_rgba(0,0,0,0.25),-7px_-7px_24px_rgba(255,255,255,1)]
                        active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.25),inset_-4px_-4px_10px_rgba(255,255,255,1)]
                    "
        >
            <Image 
                src="/icons/icon-search.svg"
                alt="Search"
                width={25}
                height={24}
                className="hoover:"
            />

        </button>
    )
}