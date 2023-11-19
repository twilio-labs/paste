import type { BadgeProps } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { NewIcon } from "@twilio-paste/icons/esm/NewIcon";
import { Popover, PopoverBadgeButton, PopoverContainer } from "@twilio-paste/popover";
import { StatusBadge } from "@twilio-paste/status";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { StatusDescriptions } from "../../../constants";

type BadgeVariants = BadgeProps["variant"];
interface PackageStatusLegendProps {
  packageStatus?: string | null;
  figmaStatus?: string | null;
  designCommitteeReview?: string | null;
  engineerCommitteeReview?: string | null;
}

interface StatusData {
  badgeVariant: BadgeVariants;
  popoverContent: string;
}

const statusMap: { [index: string]: StatusData } = {
  Alpha: {
    badgeVariant: "new",
    popoverContent: StatusDescriptions.ALPHA,
  },
  Beta: {
    badgeVariant: "neutral",
    popoverContent: StatusDescriptions.BETA,
  },
};

const PackageStatusBadge: React.FC<React.PropsWithChildren<{ status: string }>> = ({ status }) => {
  const statusData = statusMap[status];
  const uid = useUID();

  if (statusData?.badgeVariant) {
    return (
      <PopoverContainer baseId={`status${uid}`}>
        <PopoverBadgeButton variant={statusData?.badgeVariant}>
          <NewIcon decorative size="sizeIcon10" />
          {status}
        </PopoverBadgeButton>
        <Popover aria-label={uid}>{statusData?.popoverContent}</Popover>
      </PopoverContainer>
    );
  }

  return null;
};

const PackageStatusLegend: React.FC<React.PropsWithChildren<PackageStatusLegendProps>> = ({
  packageStatus,
  figmaStatus,
  designCommitteeReview,
  engineerCommitteeReview,
}) => {
  const shouldShowStatusBadge = packageStatus && packageStatus in statusMap;
  const shouldShowFigmaNeeded = !figmaStatus;
  const shouldShowPeerReviewNeeded = !designCommitteeReview || !engineerCommitteeReview;

  const shouldShowStatus = packageStatus || shouldShowFigmaNeeded || shouldShowPeerReviewNeeded;

  if (shouldShowStatus) {
    return (
      <Box display="flex" alignItems="center" flexGrow={1} columnGap="space40">
        {shouldShowStatusBadge && <PackageStatusBadge status={packageStatus} />}
        {shouldShowFigmaNeeded && (
          <StatusBadge as="span" variant="ProcessDraft">
            Design assets pending
          </StatusBadge>
        )}
        {shouldShowPeerReviewNeeded ? (
          <StatusBadge as="span" variant="ProcessDraft">
            Peer review pending
          </StatusBadge>
        ) : null}
      </Box>
    );
  }

  return null;
};

export { PackageStatusLegend };
