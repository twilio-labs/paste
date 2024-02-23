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
  return {
    ...icons,
    // eslint-disable-next-line import/no-dynamic-require,global-require, @typescript-eslint/no-var-requires
    [`${name}`]: require(`@twilio-paste/icons/esm/${name}.js`)[name],
  };
}, {});

const DesignEfficiency: React.FC = (): React.ReactElement => {
  const someIcons = Object.values(IconComponents);
  someIcons.length = 66;
  return (
    <SectionContainer>
      <SectionSeparator>Design efficiency</SectionSeparator>
      <Box display="flex" flexDirection={["column", "column", "row"]} justifyContent="space-between">
        <Box
          paddingTop="space190"
          display="flex"
          flexDirection="column"
          maxWidth="size50"
          flexShrink={0}
          position="relative"
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
            <BouncyAnchor
              text="Find us on Figma Community"
              href="https://www.figma.com/community/file/1207476064127503112/twilio-paste-components"
            />
          </Box>
          <Box
            marginTop="space170"
            paddingTop="space170"
            display="grid"
            gridTemplateRows="repeat(3, 1fr)"
            gridTemplateColumns="repeat(22, 1fr)"
            columnGap="space50"
            rowGap="space100"
            left={-200}
            top={300}
            position="absolute"
          >
            {someIcons.map((Icon) => (
              <Icon decorative key={useUID()} size="sizeIcon70" color="colorTextWeaker" />
            ))}
          </Box>
        </Box>
        <Box marginTop="space150" flexGrow={1} position="relative" right={-200} backgroundColor="colorBackgroundBody">
          <ColorGradientRainbow omitGrays />
        </Box>
      </Box>
    </SectionContainer>
  );
};

export { DesignEfficiency };
