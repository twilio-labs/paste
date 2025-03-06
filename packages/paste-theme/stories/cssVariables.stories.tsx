import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import "@twilio-paste/design-tokens/dist/themes/dark/tokens.data-theme.css";
import "@twilio-paste/design-tokens/dist/themes/evergreen/tokens.data-theme.css";
import "@twilio-paste/design-tokens/dist/themes/twilio-dark/tokens.data-theme.css";
import "@twilio-paste/design-tokens/dist/themes/twilio/tokens.data-theme.css";
import "@twilio-paste/design-tokens/dist/tokens.custom-properties.css";
import { Input } from "@twilio-paste/input";
import { Paragraph } from "@twilio-paste/paragraph";
import { Stack } from "@twilio-paste/stack";
import { TextArea } from "@twilio-paste/textarea";
import * as React from "react";

import { Combobox } from "@twilio-paste/combobox";
import { ThemeProvider } from "../src/themeProvider";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Theme/ThemeProvider/CSSVariables",
  component: ThemeProvider,
};

export const StylingThemeProviderElement = (): React.ReactNode => (
  <ThemeProvider useCSSVariables={true}>
    <Paragraph>
      This theme provider uses CSS variables. You can change the theme using this combobox to switch with theme
      variables should be applied. Note Storbook also ahs a theme provider wrapping the components in the view. You will
      see the body color not get applied
    </Paragraph>
    <Combobox
      labelText="Select a theme"
      items={["twilio", "twilio-dark", "dark", "evergreen"]}
      onSelectedItemChange={(value) => {
        document.body.setAttribute("data-theme", value.selectedItem);
      }}
    />
    <Box marginTop="space60">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo. Hendrerit gravida rutrum quisque non. A arcu
        cursus vitae congue mauris rhoncus aenean vel elit. Tortor dignissim convallis aenean et tortor at risus.
        Vestibulum lorem sed risus ultricies. Tempor nec feugiat nisl pretium fusce id. Morbi tempus iaculis urna id
        volutpat lacus laoreet non curabitur. In ante metus dictum at. Sit amet risus nullam eget felis eget nunc
        lobortis.
      </Paragraph>
      <Stack orientation="vertical" spacing="space50">
        <Button variant="primary" onClick={() => {}}>
          Click me
        </Button>
        <Input aria-label="Search" placeholder="Search options..." type="text" />

        <TextArea aria-label="Feedback" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
      </Stack>
    </Box>
  </ThemeProvider>
);
