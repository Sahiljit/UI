# @sahiljit/ui

This is a UI library.

Note - Currently its getting build with the help of radix.

### Follow the following steps to use -

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
