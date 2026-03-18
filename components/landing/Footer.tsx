import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 md:px-6 lg:px-15 py-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Image
              src="/icons/icon-email.svg"
              alt=""
              width={24}
              height={24}
            />
            <p className="font-montserrat text-base md:text-lg tracking-wider text-[#2A2A2A]">
              Hafa samband
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/icons/icon-instagram.svg"
              alt=""
              width={24}
              height={24}
            />
            <p className="font-montserrat text-base md:text-lg tracking-wider text-[#2A2A2A]">
              Fylgdu okkur
            </p>
          </div>
        </div>
    </footer>
  );
}