"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

type BookTabsProps = {
    shortDescription: string;
    fullDescription: string;
};

export default function BookTabs({shortDescription, fullDescription}: BookTabsProps) {
  const [activeTab, setActiveTab] = useState<"about" | "reviews">("about");
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <section className="w-185 max-w-185">
        <div className="flex justify-center gap-25 border-b-2 border-borderline">
            <button 
                onClick={() => setActiveTab("about")}
                className={`font-bebas text-[56px] text-[#4F4F4F] tracking-wide ${
                    activeTab === "about" ? "text-[#4F4F4F]" : "text-[#BEBEBE]"
                }`}
            >
                    Um bókina
            </button>
            <button 
                onClick={() => setActiveTab("reviews")}
                className={`font-bebas text-[56px] text-[#4F4F4F] tracking-wide ${
                    activeTab === "reviews" ? "text-[#4F4F4F]" : "text-[#BEBEBE]"
                }`}
            >
                    Umsagnir
            </button>
        </div>

        {activeTab === "about" && (
            <section className="pt-10">
                <div className="font-literata text-lg/8 text-[#3F3F3F]">
                    <p>
                        {shortDescription}
                    </p>
                    {showFullDescription && (
                        <p className="mt-6">{fullDescription}</p>
                    )}

                    <div className="mt-5">
                        <button
                            type="button"
                            onClick={() => setShowFullDescription((prev) => !prev)}
                            className="flex items-center justify-center gap-1"
                        >
                            <p className="font-montserrat font-semibold text-base text-[#2A2A2A]">
                                {showFullDescription ? "Sýna minna" : "Lesa meira"}
                            </p>    
                            <IoIosArrowForward 
                                className={`w-5 h-5 ${showFullDescription ? "rotate-90" : ""}`}
                            />
                        </button>
                    </div>
                </div>
            </section>
        )} 
        
        {activeTab === "reviews" && (
            <div className="pt-10">
                <div className="flex items-center justify-center border-b-2 border-borderline pb-8 gap-16">
                    <p className="font-literata text-2xl text-[#5B5B5B]">
                        Hvað fannst þér um bókina?
                    </p>

                    <button
                        type="button"
                        className="flex gap-2 rounded-[14px] bg-[#F3F3F3] px-6 py-4 shadow-[5px_5px_10px_rgba(0,0,0,0.25),-6px_-6px_22px_rgba(255,255,255,1)]
                            transition-all duration-200
                            hover:shadow-[6px_6px_12px_rgba(0,0,0,0.25),-7px_-7px_24px_rgba(255,255,255,1)]
                            active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.25),inset_-4px_-4px_10px_rgba(255,255,255,1)]"
                    >
                        <IoChatboxEllipsesOutline className="h-6 w-6 text-[#2A2A2A]" />
                        <span className="font-montserrat text-base font-medium text-[#3F3F3F]">
                            Skrifa umsögn
                        </span>
                    </button>
                </div>
            </div>
        )} 

    </section>
  );
}