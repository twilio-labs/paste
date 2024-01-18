import merge from "deepmerge";
import * as React from "react";
import merge from "deepmerge";
import * as React from "react";

import { SidebarCategoryRoutes } from "../../../constants";
import { getNormalizedHeaderData } from "../../../utils/DataUtils";
import type { ApiData } from "../../../utils/DataUtils";
import { GenericHeader } from "../generic-header";
import type { GenericHeaderProps } from "../generic-header";

interface NormalizedPatternHeaderProps extends GenericHeaderProps {
  data: ApiData;
  shouldShowVersion: boolean;
}

const NormalizedPatternHeader: React.FC<React.PropsWithChildren<NormalizedPatternHeaderProps>> = ({
  data,
  categoryRoute = SidebarCategoryRoutes.PATTERNS,
  shouldShowVersion = false,
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
    version,
  } = merge(normalizedData, props);

  return (
    <GenericHeader
      name={name}
      description={description}
      categoryRoute={categoryRoute}
      packageStatus={packageStatus}
      designCommitteeReview={designCommitteeReview}
      engineerCommitteeReview={engineerCommitteeReview}
      figmaStatus={figmaStatus}
      version={shouldShowVersion ? version : undefined}
      productSuitability={productSuitability}
    >
      <PageHeaderSeparator>
        <Separator orientation="horizontal" />
      </PageHeaderSeparator>
    </GenericHeader>
  );
};

export { NormalizedPatternHeader };
