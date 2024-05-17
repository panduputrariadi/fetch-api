import Link from "next/link";
import React from "react";

function NavbarMenuNavigation() {
  return (
    <div className="hidden lg:flex items-center gap-10 font-semibold uppercase">
      <Link href={"/"}>Home</Link>
      <Link href={"/shop"}>Shop</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
}

export default NavbarMenuNavigation;
