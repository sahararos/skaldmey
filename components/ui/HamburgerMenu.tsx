import Image from "next/image";

export default function HamburgerMenu() {
  return (
   <>
    <Image
      src="/icons/icon-hamburger.svg"
      alt="Menu"
      width={48}
      height={17}
    />
   </>
  );
}
