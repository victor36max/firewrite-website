import { Container } from "./container";
import { LoopVideo } from "./loop-video";
import { Typography } from "./typography";

export const FlowState = () => {
  return (
    <section id="flow-state" className="py-20">
      <Container className="flex flex-col gap-10 md:flex-row md:gap-20 md:items-center">
        <div className="flex flex-col gap-6 md:flex-1">
          <LoopVideo
            src="/videos/flow-state.mp4"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/flow-state.svg"
            alt="Flow State"
            className="w-16 md:w-20"
          />
          <div className="space-y-6">
            <Typography size="heading2" className="font-medium" as="h3">
              A Space Designed for Your Flow State
            </Typography>
            <Typography size="bodyMedium">
              No settings to tweak, no toolbars to customize. Just a clean,
              timeless interface that disappears, so you and your words can take
              center stage.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};
