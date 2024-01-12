import { MenuLink } from "@/src/utils/interfaces";

// components
import Brand from "./components/Brand";
import Nav from "./components/Nav";
import SideButton from "./components/SideButton";

interface HeaderProps {
  menuLinks: MenuLink[];
}

export default function Header({ menuLinks }: HeaderProps) {
  return (
    <header className="bg-dark-blue p-4 ">
      <div className="flex items-center	justify-between max-w-6xl mx-auto">
        <Brand />
        <Nav navLinks={menuLinks} />
        <SideButton />
      </div>
    </header>
  );
}
