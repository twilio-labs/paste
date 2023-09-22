import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Paragraph } from "@twilio-paste/paragraph";
import { Popover, PopoverBadgeButton, PopoverContainer } from "@twilio-paste/popover";
import { Theme } from "@twilio-paste/theme";
import camelCase from "lodash/camelCase";

import type { TokenCardProps } from "../types";

export const AccessiblePairing: React.FC<Pick<TokenCardProps, "text_contrast_pairing" | "name" | "selectedTheme">> = ({
  text_contrast_pairing,
  name,
  selectedTheme,
}) => {
  return (
    <Box as="div" marginTop="space50">
      <PopoverContainer>
        <PopoverBadgeButton variant="decorative30">
          <span aria-hidden="true">👯‍♀️</span> Accessible color token pairs
        </PopoverBadgeButton>
        <Popover aria-label="Background colors this text color is accessible on">
          <Heading variant="heading50" as="h2">
            Accessible color token pairs
          </Heading>
          <Paragraph>
            Here are some colors that meet accessible contrast ratios when paired with <strong>{name}</strong>.
          </Paragraph>

          <Theme.Provider theme={selectedTheme}>
            <Box display="flex" rowGap="space30" columnGap="space30" flexWrap="wrap">
              {text_contrast_pairing?.map((color) => (
                <Box
                  backgroundColor={camelCase(color) as BoxProps["backgroundColor"]}
                  color={camelCase(name) as BoxProps["color"]}
                  borderRadius="borderRadius20"
                  paddingX="space30"
                  paddingY="space10"
                  fontFamily="fontFamilyCode"
                  fontSize="fontSize20"
                  lineHeight="lineHeight10"
                  borderStyle="solid"
                  borderColor="colorBorderWeak"
                  borderWidth="borderWidth10"
                  key={`color${color}`}
                >
                  ${color}
                </Box>
              ))}
            </Box>
          </Theme.Provider>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
