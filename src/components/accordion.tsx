"use client";

import { cn } from "@/utils";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col border-t border-b border-muted">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            <button
              className={cn(
                "flex flex-row py-5 font-bold text-[18px] leading-[1.5] items-center justify-between w-full cursor-pointer",
                index !== 0 && "border-t border-muted"
              )}
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
            >
              <p className="text-lg font-semibold">{item.title}</p>
              {isOpen ? (
                <LuChevronUp className="w-6 h-6" />
              ) : (
                <LuChevronDown className="w-6 h-6" />
              )}
            </button>
            {isOpen && (
              <div className="text-[16px] leading-[1.5] pb-6">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
