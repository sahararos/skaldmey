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
            <div className="flex flex-col items-center w-76.25">
                {/* Book card */}
                <div className="
                    relative
                    h-[435.83px]
                    w-full
                    overflow-hidden
                    rounded-tl-lg
                    rounded-bl-lg
                    rounded-tr-none
                    rounded-br-none
                    shadow-[8.16px_3.27px_13.47px_rgba(0,0,0,0.25)]
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
                        />
                    </div>
                </div>
            </div>
        </>
    );
}