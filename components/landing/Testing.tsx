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
            </div>
            <div className="flex justify-center items-center py-15">
                <p className="font-bebas text-5xl">
                    This is text
                </p>
            </div>
        </section>
    </>

  );
}