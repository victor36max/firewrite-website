import { AboutUs } from "@/components/about-us";
import { Faq } from "@/components/faq";
import { Quote } from "@/components/quote";
import { Hero } from "@/components/hero";
import { Vision } from "@/components/vision";
import { Codebase } from "@/components/codebase";
import { FlowState } from "@/components/flow-state";
import { WritingAlly } from "@/components/writing-ally";
import { OtherFeatures } from "@/components/other-features";
import { Download } from "@/components/download";

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <FlowState />
      <WritingAlly />
      <OtherFeatures />
      <Quote />
      <Download />
      <Codebase />
      <Faq />
      <AboutUs />
    </>
  );
}
