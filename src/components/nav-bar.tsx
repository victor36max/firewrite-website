import Link from "next/link";
import { Container } from "./container";
import { FaGithub } from "react-icons/fa6";
import { LinkButton } from "./button";

const Menu = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="flex-row gap-4 items-center hidden md:flex">
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
      </div>
      <Link
        href="https://github.com/victor36max/firewrite"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-7 h-7" />
      </Link>
    </div>
  );
};

export default function NavBar() {
  return (
    <nav className="bg-background sticky top-0 z-10">
      <Container className="flex flex-row justify-between items-center py-4">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            className="hidden md:block h-8"
            alt="logo"
          />
          <div className="block md:hidden -my-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icon.svg" className="w-7" alt="logo" />
          </div>
        </Link>
        <Menu />
      </Container>
    </nav>
  );
}
