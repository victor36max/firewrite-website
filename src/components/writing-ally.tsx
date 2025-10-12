import { Container } from "./container";
import { LoopVideo } from "./loop-video";
import { Typography } from "./typography";

export const WritingAlly = () => {
  return (
    <section id="writing-ally" className="py-20">
      <Container className="flex flex-col gap-10 md:gap-20 md:items-center md:flex-row-reverse">
        <div className="flex flex-col gap-6 md:flex-1">
          <LoopVideo
            src="/videos/writing-ally.mp4"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/writing-ally.svg"
            alt="Writing Ally"
            className="w-16 md:w-20"
          />
          <div className="space-y-6">
            <Typography size="heading2" className="font-medium" as="h3">
              Your AI Writing Ally, Always on Your Side
            </Typography>
            <Typography size="bodyMedium">
              Get a gentle nudge when you&apos;re stuck, instant feedback to
              improve your prose, and a research assistant that understands your
              context. All designed to support your voice, not override it.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};
