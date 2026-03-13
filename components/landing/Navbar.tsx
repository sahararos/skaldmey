import Image from "next/image";
import SearchBar from "../ui/SearchBar";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b-2 pb-10 pt-10 border-borderline">

      {/* Logo */}
      <Link href="/" className="pl-15 block cursor-pointer">
        <h1 className="font-bebas text-4xl tracking-wider">Skáldmey</h1>
        <h2 className="font-literata text-base tracking-wider">Rafbókaverslun</h2>
      </Link>

      {/* Search */}
      <div className="flex gap-6">
        <SearchBar />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-12 pr-15">

        {/* Icons */}
        <div className="flex gap-8">
          <Image
            src="/icons/icon-cart.svg"
            alt="Cart"
            width={32}
            height={32}
          />
          <Image
            src="/icons/icon-heart.svg"
            alt="Favorites"
            width={33}
            height={32}
          />
        </div>

        {/* Burger */}
        <Image
          src="/icons/icon-hamburger.svg"
          alt="Menu"
          width={48}
          height={17}
        />

      </div>
    </header>
  );
}