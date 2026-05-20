import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  className?: string;
  /** Override default padding/layout for hero slides */
  fullBleed?: boolean;
}

export function Slide({ children, className = "", fullBleed = false }: SlideProps) {
  const layout = fullBleed
    ? "flex flex-col"
    : "flex flex-col justify-center px-24 py-24";

  return (
    <div className={`h-full w-full ${layout} ${className}`}>
      {children}
    </div>
  );
}
