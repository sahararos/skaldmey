type BlackButtonProps = {
    text: string;
    icon?: React.ReactNode;
};

export default function BlackButton({text, icon}: BlackButtonProps) {
    return (
        <button className="bg-[#010101] px-3 py-2 max-h-14 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.2)] gap-2 flex items-center justify-center">
            {icon && (
            <span>
                {icon}
            </span>
            )}
            <span className="font-montserrat text-xl font-medium tracking-widest text-[#f5f5f5]">
            {text}
            </span>
        </button>
    )
}