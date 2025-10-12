import { LuCode } from "react-icons/lu";
import { Container } from "./container";
import { Typography } from "./typography";
import { LinkButton } from "./button";

export const Codebase = () => {
  return (
    <section id="codebase" className="py-20">
      <Container>
        <div className="flex flex-col gap-8 items-center flex-1">
          <LuCode className="w-8 h-8" />
          <div className="space-y-4">
            <Typography
              size="heading2"
              className="font-medium text-center"
              as="h3"
            >
              Our Codebase
            </Typography>
            <Typography size="bodyMedium" className="text-center">
              Explore our code and share your ideas.
            </Typography>
          </div>

          <LinkButton
            href="https://github.com/victor36max/firewrite"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Check Out Our Repo
          </LinkButton>
        </div>
      </Container>
    </section>
  );
};
