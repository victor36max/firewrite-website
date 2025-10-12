import { tv } from "tailwind-variants";

const typographyVariants = tv({
  variants: {
    size: {
      heading1:
        "font-serif text-[44px] md:text-[72px] leading-[1.2] font-medium",
      heading2: "font-serif text-[40px] md:text-[52px] leading-[1.2]",
      heading3: "font-serif text-[32px] md:text-[44px] leading-[1.2]",
      heading4: "font-serif text-[24px] md:text-[36px] leading-[1.3]",
      heading5: "font-serif text-[20px] md:text-[28px] leading-[1.4]",
      bodyMedium: "text-[18px] leading-[1.5]",
      bodyRegular: "text-[16px] leading-[1.5]",
      bodySmall: "text-[14px] leading-[1.5]",
    },
  },
});

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  size: keyof typeof typographyVariants.variants.size;
  as?: React.ElementType;
}

export const Typography = ({
  className,
  children,
  size,
  as,
  ...props
}: TypographyProps) => {
  const Component = as || "p";
  return (
    <Component className={typographyVariants({ size, className })} {...props}>
      {children}
    </Component>
  );
};
