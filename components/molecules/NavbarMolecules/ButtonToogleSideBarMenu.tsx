import { FiMenu } from "react-icons/fi";

interface ButtonToggleSideBarMenuProps {
    onClick: () => void;
}

export function ButtonToggleSideBarMenu({ onClick }: ButtonToggleSideBarMenuProps) {
    return (
        <FiMenu
            onClick={onClick}
            className="text-3xl cursor-pointer lg:hidden"
        />
    );
}
