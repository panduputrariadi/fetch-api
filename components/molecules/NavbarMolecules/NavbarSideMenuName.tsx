import Link from "next/link";
import React from "react";

export const NavbarSideMenuName = () => {
  return (
    <Link href={"/"} className="text-4xl">
      <span className="text-blue-600 font-semibold">Mini Store</span>
    </Link>
  );
};
