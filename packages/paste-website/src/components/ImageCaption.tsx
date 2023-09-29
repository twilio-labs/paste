import { Box } from "@twilio-paste/box";
import { DetailText } from "@twilio-paste/detail-text";
import * as React from "react";

export const ImageCaption: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box marginBottom="space110">
    <DetailText marginTop="space0">{children}</DetailText>
  </Box>
);
