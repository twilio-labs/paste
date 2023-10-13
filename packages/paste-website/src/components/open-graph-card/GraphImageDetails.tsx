import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import { ComponentStatus } from "./ComponentStatus";
import type { PackageData } from "./types";

export type GraphImageDetailsProps = PackageData;

const GraphImageDetails: React.FC<React.PropsWithChildren<GraphImageDetailsProps>> = (packageData) => {
  return (
    <Box>
      <Text as="div" color="colorTextWeak" fontSize="fontSize60" lineHeight="lineHeight60">
        Status
      </Text>
      <ComponentStatus {...packageData} />
    </Box>
  );
};

export { GraphImageDetails };
