import { Container } from "./container";
import { Typography } from "./typography";

export const AboutUs = () => {
  return (
    <section id="about-us" className="py-20">
      <Container className="flex flex-col gap-6 md:flex-row md:gap-20">
        <Typography size="heading1" className="md:flex-1" as="h2">
          About Us
        </Typography>
        <Typography size="bodyMedium" className="md:flex-1">
          We are a husband-and-wife team building Firewrite in our spare time,
          driven by a shared desire to discover our writing voice.
          <br />
          <br />
          Kelly has been a storyteller at heart since a young age, but for
          years, her own inner critic stood in the way. She&apos;s building
          Firewrite to create the magical space she needed to enter the writing
          flow, and to build a consistent writing habit.
          <br />
          <br />
          Victor is a developer who wants to start writing to share his
          expertise and opinions with an audience, and finds AI to be a powerful
          enabler to help him find his writing voice.
          <br />
          <br />
          Together, we&apos;re building the tool we needed—a calm space for
          focus, with an AI ally to help you find and refine your own unique
          voice.
        </Typography>
      </Container>
    </section>
  );
};
