import Link, { LinkProps } from "next/link";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-md px-4 py-2 font-medium cursor-pointer inline-flex items-center justify-center",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary-dark",
      secondary:
        "border border-muted text-secondary-foreground hover:bg-muted-light",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type BaseProps = {
  variant: keyof typeof buttonVariants.variants.variant;
};

export const Button = ({
  children,
  className,
  variant,
  ...props
}: BaseProps & React.ComponentProps<"button">) => {
  return (
    <button className={buttonVariants({ variant, className })} {...props}>
      {children}
    </button>
  );
};

export const LinkButton = ({
  children,
  className,
  variant,
  ...props
}: BaseProps & LinkProps & React.ComponentProps<"a">) => {
  return (
    <Link className={buttonVariants({ variant, className })} {...props}>
      {children}
    </Link>
  );
};
