import { IoStar } from "react-icons/io5";

type BookRatingProps = {
    ratingCount: number;
}

export default function BookRating({ratingCount}: BookRatingProps) {
    return (
        <>
            <div className="mt-8 flex items-center gap-2">
                <IoStar className="w-6 h-6 text-[#5B5B5B]" />
                <IoStar className="w-6 h-6 text-[#5B5B5B]" />
                <IoStar className="w-6 h-6 text-[#5B5B5B]" />
                <IoStar className="w-6 h-6 text-[#5B5B5B]" />
                <span className="font-montserrat text-base font-medium text-[#2A2A2A] tracking-wider">
                    ({ratingCount})
                </span>
            
            </div>
        </>
    )
}