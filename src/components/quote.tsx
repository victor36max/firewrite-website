import { Container } from "./container";
import { Typography } from "./typography";

export const Quote = () => {
  return (
    <section id="quote" className="py-20 bg-muted-light">
      <Container className="md:max-w-screen-md space-y-6">
        <Typography size="heading3" className="text-center font-medium" as="h4">
          &quot;Creativity is a fundamental aspect of being human. It&apos;s our
          birthright. And it&apos;s for all of us.&quot;
        </Typography>
        <Typography size="bodyMedium" className="text-center">
          The Creative Act: A Way of Being, Rick Rubin
        </Typography>
      </Container>
    </section>
  );
};
