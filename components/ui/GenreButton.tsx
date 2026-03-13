type GenreButtonProps = {
    text: string;
    icon?: React.ReactNode;
};

export default function GenreButton ({text, icon}: GenreButtonProps) {
    return (
    
        <div className="flex flex-col items-center">
            <button
                className="flex h-25 w-25 items-center justify-center rounded-xl bg-[#f5f5f5] 
                        shadow-[5px_5px_10px_rgba(0,0,0,0.25),-6px_-6px_22px_rgba(255,255,255,1)]
                        transition-all duration-200
                        hover:shadow-[6px_6px_12px_rgba(0,0,0,0.25),-7px_-7px_24px_rgba(255,255,255,1)]
                        active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.25),inset_-4px_-4px_10px_rgba(255,255,255,1)]
                    "
            >
                {icon && icon}
            </button>
            <p className="w-25 min-h-12 mt-4 font-montserrat font-medium tracking-wide text-base leading-5 text-[#2A2A2A] text-center line-clamp-2">
                {text}
            </p>
        </div>
        
    )
}


