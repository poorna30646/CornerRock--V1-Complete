import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerTag = "div" | "section" | "header" | "footer" | "main" | "article";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: ContainerTag;
}

export function Container({ className, as = "div", ...props }: ContainerProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}
      {...props}
    />
  );
}
