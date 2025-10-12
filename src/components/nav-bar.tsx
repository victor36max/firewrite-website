import Link from "next/link";
import { Container } from "./container";
import { FaGithub } from "react-icons/fa";
import { LinkButton } from "./button";

const MenuItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="font-medium hover:bg-muted-light rounded-md px-2 py-1"
    >
      {children}
    </Link>
  );
};

const Menu = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <LinkButton
        href="https://discord.gg/XtftTPVWYb"
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
      >
        Community
      </LinkButton>
      <LinkButton href="/#download" variant="primary">
        Download
      </LinkButton>
      <Link
        href="https://github.com/victor36max/firewrite"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default function NavBar() {
  return (
    <nav className="bg-background sticky top-0 z-10">
      <Container className="flex flex-row justify-between items-center py-4">
        <Link href="/">
          <img src="/images/logo.png" alt="logo" className="h-8" />
        </Link>
        <Menu />
      </Container>
    </nav>
  );
}
