import { LinkButton } from "./button";
import { Container } from "./container";
import { Typography } from "./typography";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center py-20 bg-primary/10 gap-10 md:gap-20"
    >
      <Container className="flex flex-col items-center gap-8 md:max-w-screen-md">
        <div className="space-y-6">
          <Typography
            size="heading1"
            className="font-medium text-center"
            as="h1"
          >
            Where Writing Feels Magical
          </Typography>
          <Typography size="bodyMedium" className="text-center">
            A minimalist desktop writing app where AI elevates your voice, never
            replaces it. Stay in control while writing faster and better.
          </Typography>
        </div>
        <div className="flex flex-row gap-4">
          <LinkButton href="/#download" variant="primary">
            Download
          </LinkButton>
          <LinkButton
            href="https://discord.gg/XtftTPVWYb"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community
          </LinkButton>
        </div>
      </Container>
      <Container className="md:max-w-screen-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-image.webp"
          alt="Hero Image"
          className="w-full h-auto rounded-2xl"
        />
      </Container>
    </section>
  );
};
