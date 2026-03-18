import BlackButton from "../ui/BlackButton";
import FavoritesButton from "../ui/FavoritesButton";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export default function BookActions() {
  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <BlackButton
        text="Setja í körfu"
        icon={<PiShoppingCartSimpleBold className="h-5 w-5 text-[#f5f5f5] lg:h-6 lg:w-6" />}
      />
      <FavoritesButton />
    </div>
  );
}