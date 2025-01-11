export interface ButtonProps {}
import { Button as RadixButton } from "@radix-ui/themes";

export const Button = ({}: ButtonProps) => {
  return (
    <RadixButton variant="soft" className="!bg-red-300">
      sahil2
    </RadixButton>
  );
};
