"use client";

import Image from "next/image";
import SearchBar from "../ui/SearchBar";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b-2 border-borderline">
      {/* Top row */}
      <div className="flex items-center px-4 py-6 md:px-6 md:py-8 lg:px-15 lg:py-8">
        {/* Left (logo) */}
        <div className="flex flex-1">
          <Link href="/" className="cursor-pointer shrink-0">
            <h1 className="font-bebas text-2xl tracking-wider md:text-3xl lg:text-4xl">
              Skáldmey
            </h1>
            <h2 className="font-literata text-xs tracking-wider md:text-sm lg:text-base">
              Rafbókaverslun
            </h2>
          </Link>
        </div>

        {/* Center (desktop search only) */}
        <div className="hidden md:flex flex-[1.6] justify-center">
          <div className="w-full max-w-175">
            <SearchBar />
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-4 md:gap-6 lg:gap-12">
          <div className="flex items-center gap-3 md:gap-5 lg:gap-8">
            <Image
              src="/icons/icon-cart.svg"
              alt="Cart"
              width={18}
              height={18}
              className="md:h-6 md:w-6 lg:h-8 lg:w-8"
            />
            <Image
              src="/icons/icon-heart.svg"
              alt="Favorites"
              width={19}
              height={18}
              className="md:h-6 md:w-6 lg:h-8 lg:w-8"
            />
          </div>

          <Image
            src="/icons/icon-hamburger.svg"
            alt="Menu"
            width={32}
            height={10}
            className="md:w-12 md:h-4"
          />
        </div>
      </div>

      {/* Mobile search always visible */}
      <div className="px-4 pb-10 pt-4 md:hidden">
        <SearchBar />
      </div>
    </header>
  );
}



// If you ever want to add a search icon

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import SearchBar from "../ui/SearchBar";
// import Link from "next/link";

// export default function Navbar() {

//   const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

//   return (
//     <header className="border-b-2 border-borderline">
//       <div className="flex items-center px-4 py-6 md:px-6 md:py-8 lg:px-15 lg:py-8">
//         {/* Left (logo) */}
//         <div className="flex flex-1">
//           <Link href="/" className="cursor-pointer shrink-0">
//             <h1 className="font-bebas text-2xl tracking-wider md:text-3xl lg:text-4xl">
//               Skáldmey
//             </h1>
//             <h2 className="font-literata text-xs tracking-wider md:text-sm lg:text-base">
//               Rafbókaverslun
//             </h2>
//           </Link>
//         </div>

//         {/* Center (search) */}
//         <div className="hidden md:flex flex-[1.6] justify-center">
//           <div className="w-full max-w-175">
//             <SearchBar />
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="flex flex-1 items-center justify-end gap-4 md:gap-6 lg:gap-12">

//           {/* Icons */}
//           <div className="flex items-center gap-3 md:gap-5 lg:gap-8">
//             <button
//               type="button"
//               className="md:hidden lg:hidden"
//               onClick={() => setIsMobileSearchOpen((prev) => !prev)}
//             >
//               <Image
//                 src="/icons/icon-search.svg"
//                 alt="Search"
//                 width={18}
//                 height={18}
//                 className="md:h-6 md:w-6"
//               />
//             </button>
            
//             <Image
//               src="/icons/icon-cart.svg"
//               alt="Cart"
//               width={18}
//               height={18}
//               className="md:h-6 md:w-6 lg:h-8 lg:w-8"
//             />
//             <Image
//               src="/icons/icon-heart.svg"
//               alt="Favorites"
//               width={19}
//               height={18}
//               className="md:h-6 md:w-6 lg:h-8 lg:w-8"
//             />
//           </div>

//           {/* Burger */}
//           <Image
//             src="/icons/icon-hamburger.svg"
//             alt="Menu"
//             width={32}
//             height={10}
//             className="md:w-12 md:h-4"
//           />
//         </div>
//       </div>

//       {isMobileSearchOpen && (
//       <div className="px-4 pb-10 pt-4 md:px-15 lg:hidden">
//         <SearchBar />
//       </div>
//       )}

//     </header>
//   );
// }