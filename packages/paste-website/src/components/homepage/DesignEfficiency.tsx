import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Text } from "@twilio-paste/text";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { ColorGradientRainbow } from "../color-swatch/ColorGradient";
import type { IconComponent, IconObject } from "../icons-list/types";
import { BouncyAnchor } from "./BouncyAnchor";
import { SectionContainer } from "./SectionContainer";
import { SectionSeparator } from "./SectionSeparator";

const { icons: iconsJson } = require("@twilio-paste/icons/json/icons.json");

const IconComponents: IconComponent = iconsJson.reduce((icons: IconComponent, { name }: IconObject) => {
  // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports, unicorn/prefer-module
  icons[name] = require(`@twilio-paste/icons/cjs/${name}.js`)[name];
  return icons;
}, {});

const someIcons = Object.values(IconComponents);
someIcons.length = 66; // cap it

const DesignEfficiency: React.FC = (): React.ReactElement<HTMLElement> => {
  return (
    <SectionContainer>
      <SectionSeparator>Design efficiency</SectionSeparator>

      <Box display="flex" flexDirection={["column", "column", "row"]} justifyContent="space-between">
        <Box
          paddingTop="space190"
          display="flex"
          flexDirection="column"
          maxWidth={["100%", "100%", "size40"]}
          position="relative"
          flexShrink={0}
        >
          <Heading as="h3" variant="heading20">
            Built by designers, for designers
          </Heading>
          <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
            1-to-1 code and design libraries means production-ready design prototypes, too.
          </Text>
          <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
            With our libraries, you can swap themes easily with Figma variable modes, and prep design files for
            efficient design and engineering collaboration.
          </Text>
          <Box fontWeight="fontWeightSemibold" fontSize="fontSize40" lineHeight="lineHeight40">
            <BouncyAnchor text="Find us on Figma Community" href="https://www.figma.com/@twilio" />
          </Box>
          <Box
            marginTop="space170"
            paddingTop="space170"
            display="grid"
            gridTemplateRows="repeat(3, 1fr)"
            gridTemplateColumns="repeat(22, 1fr)"
            columnGap="space50"
            rowGap="space100"
            left={-300}
            top={300}
            position="absolute"
          >
            {someIcons.map((Icon, index) => {
              if (index >= 22 && index < 44) {
                return (
                  <Box key={Icon.displayName} marginLeft="spaceNegative180">
                    <Box size="sizeIcon70">
                      <Icon decorative key={useUID()} size="sizeIcon70" color="colorTextWeaker" />
                    </Box>
                  </Box>
                );
              }
              return <Icon decorative key={useUID()} size="sizeIcon70" color="colorTextWeaker" />;
            })}
          </Box>
        </Box>
        <Box
          display={["none", "none", "block"]}
          marginTop="space150"
          flexGrow={1}
          position="relative"
          right={[0, 0, -55, -200]}
          backgroundColor="colorBackgroundBody"
        >
          <ColorGradientRainbow omitGrays />
        </Box>
      </Box>
    </SectionContainer>
  );
};

export { DesignEfficiency };
