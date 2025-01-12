export interface ButtonProps {}
import { Button as RadixButton } from "@radix-ui/themes";

export const Button = ({}: ButtonProps) => {
  return (
    <>
      <div className="bg-black">hey</div>
      <RadixButton variant="soft">sahil3</RadixButton>
    </>
  );
};
