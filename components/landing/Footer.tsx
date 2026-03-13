import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-15 py-12 border-t-2 border-borderline">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/icons/icon-email.svg"
              alt=""
              width={24}
              height={24}
            />
            <p className="font-montserrat text-lg tracking-wider text-[#2A2A2A]">
              Hafa samband
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/icons/icon-phone.svg"
              alt=""
              width={24}
              height={24}
            />
            <p className="font-montserrat text-lg tracking-wider text-[#2A2A2A]">
              775-4949
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/icons/icon-instagram.svg"
              alt=""
              width={24}
              height={24}
            />
            <p className="font-montserrat text-lg tracking-wider text-[#2A2A2A]">
              Fylgdu okkur
            </p>
          </div>
        </div>
    </footer>
  );
}