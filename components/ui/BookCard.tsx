import Image from "next/image";
import Link from "next/link";

type BookCardProps = {
    title: string;
    author: string;
    coverImage: string;
    slug: string;
};

export default function BookCard({ title, author, coverImage, slug }: BookCardProps) {
    return (
        <>
            <div className="transition-all duration-300 md:hover:px-3">
                <Link 
                    href={`/baekur/${slug}`}
                    className="group w-30 md:w-40 lg:w-53 flex flex-col items-center transition-transform duration-300 ease-out hover:z-20 hover:scale-[1.15]"
                >
                    {/* Book Cover */}
                    <div className="relative w-30 h-45 md:w-40 md:h-60 lg:h-75 lg:w-53 overflow-hidden shadow-[0px_11px_22px_-5px_rgba(0,0,0,0.2)] transition-shadow duration-300 group-hover:shadow-[0px_35px_60px_-15px_rgba(0,0,0,0.45)]">
                        <Image 
                            src={coverImage}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Title */}
                    <h3 className="mt-4 rounded-xl px-4 font-literata text-base md:text-lg leading-6 font-semibold line-clamp-1 text-center text-[#2A2A2A] transition-all duration-300 group-hover:max-h-16 group-hover:w-45 group-hover:py-1 group-hover:text-lg group-hover:tracking-wide group-hover:line-clamp-3">
                        {title}
                    </h3>

                    {/* Author */}
                    <p className="pt-1 font-montserrat text-xs md:text-sm line-clamp-1 text-center text-[#3C3C3C]">
                        {author}
                    </p>
                    
                
                </Link>
            </div>
        </>
    )

};