import { Accordion } from "./accordion";
import { Button, LinkButton } from "./button";
import { Container } from "./container";
import { Typography } from "./typography";

export const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-muted-light">
      <Container className="max-w-screen-md flex flex-col gap-10 md:gap-20">
        <Typography size="heading2" className="text-center" as="h2">
          FAQs
        </Typography>
        <Accordion
          items={[
            {
              title: "Is the app free?",
              content: "Firewrite is completely free for early users.",
            },
            {
              title: "How does AI help?",
              content:
                "AI provides suggestions without overriding your creative control.",
            },

            {
              title: "Can I export my work?",
              content:
                "Yes. You can export your work easily as Markdown files.",
            },
            {
              title: "What AI model do you use?",
              content:
                "Firewrite is model-agnostic. You can use any compatible LLM by providing your own API key, giving you full control and flexibility.",
            },
            {
              title: "What platforms work?",
              content: "Available for macOS, Windows, and Linux devices.",
            },
          ]}
        />
        <div className="flex flex-col gap-6 items-center">
          <div className="space-y-4">
            <Typography size="heading4" className="text-center" as="h4">
              Need more help?
            </Typography>
            <Typography size="bodyMedium" className="text-center">
              Our community is ready to support you every step of the way.
            </Typography>
          </div>
          <LinkButton
            href="https://discord.gg/XtftTPVWYb"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </LinkButton>
        </div>
      </Container>
    </section>
  );
};
