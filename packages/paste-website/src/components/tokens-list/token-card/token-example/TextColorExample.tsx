import { Box } from "@twilio-paste/box";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Text } from "@twilio-paste/text";
import type { ThemeShape } from "@twilio-paste/theme";
import type { Properties } from "csstype";
import * as React from "react";

import { contrastScore } from "../../../../utils/contrastScore";
import { TextExample } from "./TextExample";

export const TextColorExample: React.FC<
  React.PropsWithChildren<{
    value: keyof ThemeShape["textColors"];
    backgroundColor: Properties["backgroundColor"];
    textColor: Properties["color"];
    textShadow?: Properties["textShadow"];
  }>
> = ({ value, backgroundColor, textColor, textShadow }) => {
  const contrastRating = contrastScore(value, backgroundColor);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextExample color={value} textShadow={textShadow} />
      <Text
        as="p"
        color={textColor as keyof ThemeShape["textColors"]}
        fontSize="fontSize10"
        lineHeight="lineHeight10"
        marginTop="space20"
        marginBottom="space0"
      >
        <ScreenReaderOnly>Accessibility rating: </ScreenReaderOnly>
        {contrastRating}
      </Text>
    </Box>
  );
};
