import Image from "next/image";

export default function Testing() {
  return (
    <>
        <section className="flex flex-col bg-[#E3E3E3] h-auto lg:flex-row">
            <div className="relative h-100 w-full overflow-hidden">
                <Image 
                    src="/Hero/bookstash.png"
                    alt="Books"
                    fill
                    className="object-cover object-top scale-110 -translate-y-3"
                />
                {/* fade overlay */}
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-4 bg-linear-to-b from-transparent via-[#E3E3E3]/40 to-[#E3E3E3]" />
            </div>
            <div className="flex flex-col justify-center items-center pt-10 pb-15">
                <div className="w-75">
                    <h1 className="font-bebas text-6xl tracking-wide text-[#4b4b4b] md:text-7xl lg:text-8xl">
                        Allar bækur
                        <br />
                        á einum stað
                    </h1>
                    <p className="font-literata text-[#3C3C3C] text-base tracking-wider pt-2 pb-5 md:text-base lg:text-xl">
                        Skoðaðu úrvalið af rafbókum
                    </p>
                     <button className="bg-[#010101] py-2 px-4 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] gap-2 flex items-center justify-center">
                        <span className="font-montserrat text-xs md:text-base font-medium tracking-widest text-[#f5f5f5] md:font-xl">
                            Skoða meira
                        </span>
                    </button>
                </div>
            </div>
        </section>
    </>

  );
}