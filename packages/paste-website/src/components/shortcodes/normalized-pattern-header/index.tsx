import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import merge from "deepmerge";
import * as React from "react";

import { SidebarCategoryRoutes } from "../../../constants";
import { getNormalizedHeaderData } from "../../../utils/DataUtils";
import type { ApiData } from "../../../utils/DataUtils";
import { GenericHeader } from "../generic-header";
import type { GenericHeaderProps } from "../generic-header";

const PackageValue: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text as="dd" display="inline-block">
      {children}
    </Text>
  );
};

const PackageLabel: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text as="dt" display="inline-block" color="colorTextWeak" css={{ width: "80px" }}>
      {children}
    </Text>
  );
};

interface NormalizedPatternHeaderProps extends GenericHeaderProps {
  data: ApiData;
}

const NormalizedPatternHeader: React.FC<React.PropsWithChildren<NormalizedPatternHeaderProps>> = ({
  data,
  categoryRoute = SidebarCategoryRoutes.PATTERNS,
  ...props
}) => {
  const normalizedData = getNormalizedHeaderData(data);
  const {
    name,
    description,
    packageStatus,
    figmaStatus,
    designCommitteeReview,
    engineerCommitteeReview,
    productSuitability,
  } = merge(normalizedData, props);

  return (
    <>
      <GenericHeader
        name={name}
        description={description}
        categoryRoute={categoryRoute}
        packageStatus={packageStatus}
        designCommitteeReview={designCommitteeReview}
        engineerCommitteeReview={engineerCommitteeReview}
        figmaStatus={figmaStatus}
      />
      {productSuitability && (
        <Box marginBottom="space20" marginTop="space70">
          <PackageLabel>Product</PackageLabel>
          <PackageValue>
            <Stack orientation="horizontal" spacing="space20">
              {productSuitability.map((product: string) => (
                <Badge as="span" variant="decorative10" key={product}>
                  {product}
                </Badge>
              ))}
            </Stack>
          </PackageValue>
        </Box>
      )}
    </>
  );
};

export { NormalizedPatternHeader };
