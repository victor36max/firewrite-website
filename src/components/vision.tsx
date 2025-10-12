import { Container } from "./container";
import { Typography } from "./typography";

export const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-muted-light">
      <Container className="flex flex-col gap-6 md:flex-row md:gap-20">
        <Typography size="heading1" className="md:flex-1" as="h2">
          Our Vision
        </Typography>
        <Typography size="bodyMedium" className="md:flex-1">
          Firewrite is built on a simple idea: writing tools should support your
          creativity, not get in its way. Our vision is a calm, focused space
          where technology handles the busywork, empowering you to find and
          express your unique voice.
        </Typography>
      </Container>
    </section>
  );
};
