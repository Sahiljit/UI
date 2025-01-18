import { Button } from "sahiljit/ui/radix";
import "../lib/index"; // this imports styles for radix + tailwind
import { ModeToggle } from "../lib/shadcn-ui/mode-toggle";
import { Button as ShadcnButton } from "sahiljit/ui/shadcn-ui";

function App() {
  return (
    <>
      <Button>sahil</Button>
      <ShadcnButton>sahil</ShadcnButton>
      <ModeToggle />
    </>
  );
}
export default App;
