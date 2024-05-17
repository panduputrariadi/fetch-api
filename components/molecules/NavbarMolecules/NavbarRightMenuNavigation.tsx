import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";

function NavbarRightMenuNavigation() {
  return (
    <div className="hidden lg:flex items-center gap-7 font-light text-gray-500">
      <Link href={"/cart"}>
        <FiShoppingCart className="text-2xl cursor-pointer" />
      </Link>
      <Link href={"/cart"}>
        <CgProfile className="text-2xl cursor-pointer" />
      </Link>
      <Link href={"log-out"}>
        <FiLogOut className="text-2xl cursor-pointer" />
      </Link>
    </div>
  );
}

export default NavbarRightMenuNavigation;
