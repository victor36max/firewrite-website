import { MdScreenshotMonitor } from "react-icons/md";
import { Container } from "./container";
import { Typography } from "./typography";
import { LuCode, LuWifiOff } from "react-icons/lu";
import { PiMarkdownLogo } from "react-icons/pi";
import { LoopVideo } from "./loop-video";

export const OtherFeatures = () => {
  return (
    <section id="other-features" className="py-20">
      <Container className="flex flex-col gap-10 md:flex-row md:gap-20 md:items-center">
        <div className="flex flex-col gap-6 md:flex-1">
          <LoopVideo
            src="/videos/other-features.mp4"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 md:flex-1">
          <div className="space-y-4">
            <MdScreenshotMonitor className="w-10 h-10 md:w-12 md:h-12" />
            <Typography size="heading5" className="font-medium" as="h3">
              Full-Screen Focus
            </Typography>
            <Typography size="bodyRegular">
              A dedicated app, not another browser tab.
            </Typography>
          </div>
          <div className="space-y-4">
            <LuWifiOff className="w-10 h-10 md:w-12 md:h-12" />
            <Typography size="heading5" className="font-medium" as="h3">
              Write Anywhere
            </Typography>
            <Typography size="bodyRegular">
              Your work saves locally, even when you&apos;re offline (AI
              available online only).
            </Typography>
          </div>
          <div className="space-y-4">
            <PiMarkdownLogo className="w-10 h-10 md:w-12 md:h-12" />
            <Typography size="heading5" className="font-medium" as="h3">
              Markdown Support
            </Typography>
            <Typography size="bodyRegular">
              Write in Markdown. Export your finished work with ease.
            </Typography>
          </div>
          <div className="space-y-4">
            <LuCode className="w-10 h-10 md:w-12 md:h-12" />
            <Typography size="heading5" className="font-medium" as="h3">
              Built Openly
            </Typography>
            <Typography size="bodyRegular">
              Our code is public and trustworthy, open for anyone to view and
              audit.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};
