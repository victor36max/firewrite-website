import { Container } from "./container";
import { Typography } from "./typography";

export const Quote = () => {
  return (
    <section id="quote" className="py-20 bg-muted-light">
      <Container className="max-w-screen-md space-y-6">
        <Typography size="heading3" className="text-center font-medium" as="h4">
          "Creativity is a fundamental aspect of being human. It's our
          birthright. And it's for all of us."
        </Typography>
        <Typography size="bodyMedium" className="text-center">
          The Creative Act: A Way of Being, Rick Rubin
        </Typography>
      </Container>
    </section>
  );
};
