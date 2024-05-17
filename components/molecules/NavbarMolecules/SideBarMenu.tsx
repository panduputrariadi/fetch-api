import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import clsx from "clsx";
import NavbarRightMenuNavigation from "./NavbarRightMenuNavigation";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  return (
    <div
      className={clsx(
        "lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all fixed h-full w-full",
        isOpen && "translate-x-0"
      )}
    >
      <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
        <IoCloseOutline
          onClick={onClose}
          className="mt-0 mb-8 text-3xl cursor-pointer"
        />

        <Link href={"/"}>Home</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>

        <div className="flex justify-start items-center gap-10">
          <Link href={"/cart"}>
            <FiShoppingCart className="text-2xl cursor-pointer" />
          </Link>
          <Link href={"/cart"}>
            <CgProfile className="text-2xl cursor-pointer" />
          </Link>
        </div>
      </section>
    </div>
  );
}
