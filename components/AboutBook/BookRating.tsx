import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";

type BookRatingProps = {
    ratingCount: number;
}

export default function BookRating({ratingCount}: BookRatingProps) {
    return (
        <>
            <div className="flex items-center justify-center mt-6 gap-2 md:mt-8 lg:justify-start">
                <IoStar className="w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B]" />
                <IoStar className="w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B]" />
                <IoStar className="w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B]" />
                <IoStar className="w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B]" />
                <IoIosStarOutline className="w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B]" />
                <span className="font-montserrat text-sm md:text-base font-medium text-[#2A2A2A] tracking-wider">
                    ({ratingCount})
                </span>
            
            </div>
        </>
    )
}