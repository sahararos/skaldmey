type GenreButtonProps = {
    text: string;
    icon?: React.ReactNode;
};

export default function GenreButton ({text, icon}: GenreButtonProps) {
    return (
    
        <div className="flex flex-col items-center">
            <button
                className="flex h-20 w-20
                        md:h-28 md:w-28 items-center justify-center rounded-xl bg-[#f5f5f5] 
                        shadow-[5px_5px_10px_rgba(0,0,0,0.25),-6px_-6px_22px_rgba(255,255,255,1)] 
                        transition-all duration-200 
                        hover:shadow-[9px_9px_18px_rgba(0,0,0,0.26),-9px_-9px_26px_rgba(255,255,255,1)]
                        active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.25),inset_-4px_-4px_10px_rgba(255,255,255,1)]
                    "
            >
                {icon && icon}
            </button>
            <p className="w-20 md:w-28 md:min-h-12 mt-4 font-montserrat font-medium md:tracking-wide text-sm md:text-base leading-5 text-[#2A2A2A] text-center line-clamp-2">
                {text}
            </p>
        </div>
        
    )
}


