import { cn } from "@/utils";

export const Container = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto container px-5 sm:px-6 md:px-8", className)}>
      {children}
    </div>
  );
};
