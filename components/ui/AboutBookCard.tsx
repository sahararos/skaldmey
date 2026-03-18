import Image from "next/image";

type AboutBookCardProps = {
    title: string;
    coverImage: string;
    spineColor?: string;
}

export default function AboutBookCard({ 
    title, 
    coverImage,
    spineColor, 
}: AboutBookCardProps) {
    return (
        <>
            <div className="flex flex-col items-center w-full">
                {/* Book card */}
                <div className="
                    relative
                    w-full
                    overflow-hidden
                    relative, aspect-[0.7/1]
                    rounded-tl-lg
                    rounded-bl-lg
                    rounded-tr-none
                    rounded-br-none
                    shadow-[0px_10px_20px_rgba(0,0,0,0.35),0px_35px_70px_rgba(0,0,0,0.18)]
                    "
                    style={{ backgroundColor: spineColor || "#191919" }}
                >
                    {/* Left vertical line */}
                    <div className="absolute left-2.5 top-0 h-full w-px bg-[#464646] z-10"></div>

                    {/* Book cover image */}
                    <div className="absolute inset-y-0 right-0 left-2.5">
                        <Image 
                            src={coverImage}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 320px"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}