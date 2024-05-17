"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarSideMenuName } from "../molecules/NavbarMolecules/NavbarSideMenuName";
import NavbarMenuNavigation from "../molecules/NavbarMolecules/NavbarMenuNavigation";
import { SidebarMenu } from "../molecules/NavbarMolecules/SideBarMenu";
import NavbarRightMenuNavigation from "../molecules/NavbarMolecules/NavbarRightMenuNavigation";
import { ButtonToggleSideBarMenu } from "../molecules/NavbarMolecules/ButtonToogleSideBarMenu";

export function Navbar() {
    const [isSideMenuOpen, setMenu] = useState(false);
    const pathname = usePathname();

    return (
        <section className="list-none z-50">
            <nav className="bg-white shadow-md px-20 py-6 flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <section className="flex items-center gap-4">
                        <ButtonToggleSideBarMenu onClick={() => setMenu(true)} />
                        <NavbarSideMenuName />
                    </section>
                </div>

                <NavbarMenuNavigation />

                <SidebarMenu isOpen={isSideMenuOpen} onClose={() => setMenu(false)} />

                <NavbarRightMenuNavigation />
            </nav>
        </section>
    );
}
