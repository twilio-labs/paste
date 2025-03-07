import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Input } from "@twilio-paste/input";
import { Paragraph } from "@twilio-paste/paragraph";
import { Option, Select } from "@twilio-paste/select";
import { Stack } from "@twilio-paste/stack";
import { TextArea } from "@twilio-paste/textarea";
import * as React from "react";

import { ThemeProvider } from "../src/themeProvider";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Theme/ThemeProvider/CacheProvider",
  parameters: {
    a11y: {
      /*
       * Since this story hardcodes its own theme, it doesnt inherit the theme
       * from storybook and fails on darkmode in vrt. This is a false positive.
       * This story is the same as the English Font Family story which passes.
       */
      disable: true,
    },
  },
};

export const CacheProviderContainer = (): React.ReactNode => {
  const [emotionCache, setEmotionCache] = React.useState<any>(null);
  const shadowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (shadowRef.current && !emotionCache) {
      const createdEmotionWithRef = {
        container: shadowRef.current,
        key: "shadow-dom-paste",
      };
      setEmotionCache(createdEmotionWithRef);
    }
  }, [shadowRef, emotionCache]);

  return (
    <div className="shadow-dom-container">
      <div ref={shadowRef} />
      {emotionCache ? (
        <ThemeProvider theme="twilio" cacheProviderProps={emotionCache}>
          <Box>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo. Hendrerit gravida rutrum quisque
              non. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Tortor dignissim convallis aenean et
              tortor at risus. Vestibulum lorem sed risus ultricies. Tempor nec feugiat nisl pretium fusce id. Morbi
              tempus iaculis urna id volutpat lacus laoreet non curabitur. In ante metus dictum at. Sit amet risus
              nullam eget felis eget nunc lobortis.
            </Paragraph>
            <Stack orientation="vertical" spacing="space50">
              <Button variant="primary" onClick={() => {}}>
                Click me
              </Button>
              <Input aria-label="Search" placeholder="Search options..." type="text" />
              <Select aria-label="Options">
                <Option value="option1">Option 1</Option>
              </Select>
              <TextArea aria-label="Feedback" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            </Stack>
          </Box>
        </ThemeProvider>
      ) : null}
    </div>
  );
};
