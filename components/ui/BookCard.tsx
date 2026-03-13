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
            <Link 
                href={`/baekur/${slug}`}
                className="w-45 flex flex-col justify-center items-center"
            >
                {/* Book Cover */}
                <div className="relative h-64 w-45 overflow-hidden shadow-[0px_11px_22px_-5px_rgba(0,0,0,0.2)]">
                    <Image 
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Book Author */}
                <h3 className="mt-4 font-literata text-lg leading-6 text-[#2A2A2A] font-semibold">
                    {title}
                </h3>
                <p className="mt-1 font-montserrat text-sm text-[#3C3C3C] line-clamp-2 min-h-11">
                    {author}
                </p>
            </Link>
        </>
    )

};