import { Button as RadixButton } from "@radix-ui/themes";
import { ReactNode } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "classic"
    | "solid"
    | "soft"
    | "surface"
    | "outline"
    | "ghost"
    | undefined;
}

export const Button = ({ children, variant }: ButtonProps): ReactNode => {
  return <RadixButton variant={variant}>{children}</RadixButton>;
};
