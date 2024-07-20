export interface ButtonProps {}
import { Theme, Button as RadixButton } from "@radix-ui/themes";

export const Button = ({}: ButtonProps) => {
  return (
    <Theme
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <RadixButton variant="soft">Sahil</RadixButton>
    </Theme>
  );
};
