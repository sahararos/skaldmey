type BookTagProps = {
    tags: string[];
}

export default function BookTag({tags}: BookTagProps) {
    return (
        <>
            <div className="mt-8 flex w-full flex-wrap gap-4">
                {tags.map((tag) =>
                    <div 
                        key={tag}
                        className="rounded-full border-2 border-[#CECECE] px-6 py-2"
                    >
                        <span className="font-montserrat font-medium text-base text-[#5B5B5B]">
                            {tag}
                        </span>
                    </div>
                )}

            </div>
        </>
    )
}