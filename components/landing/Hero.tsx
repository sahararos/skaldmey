import Image from "next/image";
import BlackButton from "../ui/BlackButton";
import { PiShoppingCartSimpleBold } from "react-icons/pi";



export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-6 py-10   
                md:px-8 md:py-14 
                lg:flex-row lg:items-center lg:px-15 lg:py-18
                "
    >
      {/* Text area */}
      <div className="px-10 py-10 rounded-2xl bg-[#dddbdb] md:w-[85%] lg:max-w-1/2 lg:min-h-120">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="font-bebas text-5xl tracking-wide text-[#3C3C3C] md:text-7xl lg:text-8xl">
              Allar bækur
              <br />
              á einum stað
            </h1>
            <p className="font-literata text-[#3C3C3C] text-sm tracking-wider pt-2 md:text-base lg:text-xl">
              Skoðaðu úrvalið okkar af rafbókum
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <BlackButton
              text="Skoða bækur"
              icon={<PiShoppingCartSimpleBold className="h-6 w-6 text-[#f5f5f5]" />}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center items-center lg:w-1/2 lg:h-120">
        <div className="flex justify-center items-center w-full max-w-95 md:max-w-125 lg:max-w-155">
          <Image
            src="/bookcovers/hero-books2.png"
            alt=""
            width={500}
            height={500}
            className="w-full h-auto object-contain scale-[1.08]"
            priority
          />
        </div>
      </div>
    </section>
  );
}



// export default function Hero() {
//   return (
//     <section className="px-15 pt-18 pb-15 border-b-2 border-borderline">
//       <div className="relative">
//         {/* Grey box */}
//         <div className="flex h-110 w-[60%] items-center justify-center rounded-2xl bg-[#D6D6D6]">
//           {/* Content in grey box */}
//           <div className="flex flex-col items-center justify-center gap-8">
//             {/* Font section */}
//             <div className="flex flex-col gap-2">
//               <h1 className="font-bebas text-[100px] leading-27.5 tracking-wide text-[#3C3C3C]">
//                 Allar bækur
//                 <br />
//                 á einum stað
//               </h1>
//               <p className="font-literata text-2xl tracking-wider text-[#4F4F4F]">
//                 Skoðaðu úrvalið okkar af rafbókum
//               </p>
//             </div>
//             <BlackButton 
//               text="Skoða bækur"
//               icon={<PiShoppingCartSimpleBold className="text-[#f5f5f5] w-6 h-6" />}
//             />
//           </div>
//         </div>

//         {/* Books */}
//         <div className="absolute right-2 top-[57%] z-10 -translate-y-1/2">
//           <Image
//             src="/hero/hero-books.png"
//             alt=""
//             width={560}
//             height={560}
//             className="h-auto w-full max-w-180"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
