# @sahiljit/ui

This is a UI library.

Note - Currently its getting build.

### Follow the following steps to use radix -

1. Import the following in your root layout file -

```
import { Theme } from "@radix-ui/themes";
import "@sahiljit/ui/dist/style.css";
```

2. And wrap of root element inside `<Theme>{children}</Theme>`

3. And now you can import the components as -

```
import { Button } from "@sahiljit/ui/radix";
```

### Follow the following steps to use Shadcn -

1. Run the following -

```
npx shadcn@latest init
```

2. Import styles in root layout

```
import "@sahiljit/ui/dist/style.css";
```

3. Follow this link
   https://ui.shadcn.com/docs/dark-mode/next.
   And while creating mode-toggle component in the last step of the above link, import 'button' and 'dropdown' components from '@sahiljit/ui/shadcn-ui'
