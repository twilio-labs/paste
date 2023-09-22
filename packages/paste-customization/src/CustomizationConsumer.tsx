import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import type { CustomTheme } from "./types/CustomTheme";

export interface CustomizationConsumerProps {
  children: ({ theme }: { theme: CustomTheme }) => React.ReactNode;
}

export const CustomizationConsumer: React.FC<CustomizationConsumerProps> = (props) => {
  return <Theme.Consumer {...props} />;
};

CustomizationConsumer.displayName = "PasteCustomizationConsumer";
