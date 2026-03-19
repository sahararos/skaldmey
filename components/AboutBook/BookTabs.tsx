// "use client";

// import { useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoChatboxEllipsesOutline } from "react-icons/io5";

// type BookTabsProps = {
//     shortDescription: string;
//     fullDescription: string;
// };

// export default function BookTabs({shortDescription, fullDescription}: BookTabsProps) {
//   const [activeTab, setActiveTab] = useState<"about" | "reviews">("about");
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   return (
//     <section className="w-185 max-w-185">
//         <div className="flex justify-center gap-25 border-b-2 border-borderline">
//             <button 
//                 onClick={() => setActiveTab("about")}
//                 className={`font-bebas text-[42px] lg:text-[56px] text-[#4F4F4F] tracking-wide ${
//                     activeTab === "about" ? "text-[#4F4F4F]" : "text-[#BEBEBE]"
//                 }`}
//             >
//                     Um bókina
//             </button>
//             <button 
//                 onClick={() => setActiveTab("reviews")}
//                 className={`font-bebas text-[42px] lg:text-[56px] text-[#4F4F4F] tracking-wide ${
//                     activeTab === "reviews" ? "text-[#4F4F4F]" : "text-[#BEBEBE]"
//                 }`}
//             >
//                     Umsagnir
//             </button>
//         </div>

//         {activeTab === "about" && (
//             <section className="pt-8 lg:pt-10">
//                 <div className="font-literata text-base/7 lg:text-lg/8 text-[#3F3F3F]">
//                     <p>
//                         {shortDescription}
//                     </p>
//                     {showFullDescription && (
//                         <p className="mt-6">{fullDescription}</p>
//                     )}

//                     <div className="mt-5">
//                         <button
//                             type="button"
//                             onClick={() => setShowFullDescription((prev) => !prev)}
//                             className="flex items-center justify-center gap-1"
//                         >
//                             <p className="font-montserrat font-semibold text-base text-[#2A2A2A]">
//                                 {showFullDescription ? "Sýna minna" : "Lesa meira"}
//                             </p>    
//                             <IoIosArrowForward 
//                                 className={`w-5 h-5 ${showFullDescription ? "rotate-90" : ""}`}
//                             />
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         )} 
        
//         {activeTab === "reviews" && (
//             <div className="pt-10">
//                 <div className="flex items-center justify-center border-b-2 border-borderline pb-8 gap-16">
//                     <p className="font-literata text-2xl text-[#5B5B5B]">
//                         Hvað fannst þér um bókina?
//                     </p>

//                     <button
//                         type="button"
//                         className="flex gap-2 rounded-[14px] bg-[#F3F3F3] px-6 py-4 shadow-[5px_5px_10px_rgba(0,0,0,0.25),-6px_-6px_22px_rgba(255,255,255,1)]
//                             transition-all duration-200
//                             hover:shadow-[6px_6px_12px_rgba(0,0,0,0.25),-7px_-7px_24px_rgba(255,255,255,1)]
//                             active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.25),inset_-4px_-4px_10px_rgba(255,255,255,1)]"
//                     >
//                         <IoChatboxEllipsesOutline className="h-6 w-6 text-[#2A2A2A]" />
//                         <span className="font-montserrat text-base font-medium text-[#3F3F3F]">
//                             Skrifa umsögn
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         )} 

//     </section>
//   );
// }



"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";

type BookTabsProps = {
  shortDescription: string;
  fullDescription: string;
};

export default function BookTabs({
  shortDescription,
  fullDescription,
}: BookTabsProps) {
  const [activeTab, setActiveTab] = useState<"about" | "reviews">("about");
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <section className="w-full lg:w-185 lg:max-w-185">
      <div className="flex items-end justify-center gap-10 border-b-2 border-borderline lg:gap-25 lg:border-b-2">
        <button
          onClick={() => setActiveTab("about")}
          className={`font-bebas tracking-wide text-[34px] sm:text-[38px] lg:text-[56px] ${
            activeTab === "about" ? "text-[#4F4F4F]" : "text-[#BEBEBE]"
          }`}
        >
          Um bókina
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`font-bebas tracking-wide text-[34px] sm:text-[38px] lg:text-[56px] ${
            activeTab === "reviews" ? "text-[#4F4F4F]" : "text-[#BEBEBE]"
          }`}
        >
          Umsagnir
        </button>
      </div>

      {activeTab === "about" && (
        <section className="pt-6 lg:pt-10">
          <div className="font-literata text-[15px] leading-8 text-[#3F3F3F] lg:text-lg lg:leading-8">
            <p>{shortDescription}</p>

            {showFullDescription && <p className="mt-6">{fullDescription}</p>}

            <div className="mt-5">
              <button
                type="button"
                onClick={() => setShowFullDescription((prev) => !prev)}
                className="flex items-center gap-1"
              >
                <p className="font-montserrat text-sm font-semibold text-[#2A2A2A] lg:text-base">
                  {showFullDescription ? "Sýna minna" : "Lesa meira"}
                </p>

                {showFullDescription ? (
                  <IoIosArrowDown className="h-4 w-4 lg:h-5 lg:w-5" />
                ) : (
                  <IoIosArrowForward className="h-4 w-4 lg:h-5 lg:w-5" />
                )}
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === "reviews" && (
        <div className="pt-8 lg:pt-10">
          <div className="flex flex-col items-start gap-6 border-b border-borderline pb-8 lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:border-b-2">
            <p className="font-literata text-xl text-[#5B5B5B] lg:text-2xl">
              Hvað fannst þér um bókina?
            </p>

            <button
              type="button"
              className="flex gap-2 rounded-[14px] bg-[#F3F3F3] px-5 py-3 shadow-[5px_5px_10px_rgba(0,0,0,0.25),-6px_-6px_22px_rgba(255,255,255,1)] transition-all duration-200 hover:shadow-[6px_6px_12px_rgba(0,0,0,0.25),-7px_-7px_24px_rgba(255,255,255,1)] active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.25),inset_-4px_-4px_10px_rgba(255,255,255,1)] lg:px-6 lg:py-4"
            >
              <IoChatboxEllipsesOutline className="h-6 w-6 text-[#2A2A2A]" />
              <span className="font-montserrat text-base font-medium text-[#3F3F3F]">
                Skrifa umsögn
              </span>
            </button>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="mt-8 font-montserrat text-xl md:text-2xl font-medium text-[#5B5B5B]">
              Steindór slær í gegn!
            </h1>
            <div className="flex items-center justify-center mt-3 mb-6 gap-2 lg:justify-start">
              <IoStar className="w-4 h-4 md:w-5 md:h-5 text-[#5B5B5B]" />
              <IoStar className="w-4 h-4 md:w-5 md:h-5 text-[#5B5B5B]" />
              <IoStar className="w-4 h-4 md:w-5 md:h-5 text-[#5B5B5B]" />
              <IoStar className="w-4 h-4 md:w-5 md:h-5 text-[#5B5B5B]" />
              <IoIosStarOutline className="w-4 h-4 md:w-5 md:h-5 text-[#5B5B5B]" />     
            </div>
            <h2 className="italic font-montserrat text-lg md:text-xl font-medium text-[#5B5B5B]">
              Kalli Kallason skrifar
            </h2>
            <p className="mt-2 mb-2 font-literata text-base md:text-lg font-medium text-[#5B5B5B]">
              Hvernig fer hann að þessu? Bókin heldur manni frá fyrstu blaðsíðu.
              Ég gat ekki lagt hana frá mér. Ég mæli með!
            </p>
            <button
                type="button"
                className="flex items-center justify-center gap-1"
            >
                <p className="font-montserrat font-semibold text-sm md:text-base text-[#2A2A2A]">
                  Lesa meira
                </p>    
                <IoIosArrowForward 
                    className="w-4 h-4"
                />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}