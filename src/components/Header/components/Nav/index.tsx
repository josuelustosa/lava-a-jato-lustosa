import { MenuLink } from "@/src/utils/interfaces";

interface NavProps {
  navLinks: MenuLink[];
}

export default function Nav({ navLinks }: NavProps) {
  return (
    <nav className="p-4 flex items-center	justify-between">
      <ul className="flex items-center gap-8 text-main-blue">
        {navLinks.map((link: any, index: number) => (
          <li key={index}>
            <a href={link.url} title={link.title}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
