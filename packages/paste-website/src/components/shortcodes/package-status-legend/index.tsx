import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Badge} from '@twilio-paste/badge';
import type {BadgeVariants} from '@twilio-paste/badge/src/types';
import {PopoverContainer, PopoverBadgeButton, Popover} from '@twilio-paste/popover';

import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import {ProcessDraftIcon} from '@twilio-paste/icons/esm/ProcessDraftIcon';

import {StatusDescriptions} from '../../../constants';

interface PackageStatusLegendProps {
  packageStatus?: string;
  figmaStatus?: string;
  designCommitteeReview?: string;
  engineerCommitteeReview?: string;
}

interface StatusData {
  badgeVariant: BadgeVariants;
  popoverContent: string;
}

const PackageStatusBadge: React.FC<{status: string}> = ({status}) => {
  const statusMap: {[index: string]: StatusData} = {
    Alpha: {
      badgeVariant: 'new',
      popoverContent: StatusDescriptions.ALPHA,
    },
    Beta: {
      badgeVariant: 'info',
      popoverContent: StatusDescriptions.BETA,
    },
  };

  const statusData = statusMap[status];

  if (statusData?.badgeVariant) {
    return (
      <PopoverContainer baseId="status">
        <PopoverBadgeButton variant={statusData?.badgeVariant}>
          {/* fragment needed bc Badge expects one React node as child */}
          <>
            <NewIcon decorative size="sizeIcon10" />
            {status}
          </>
        </PopoverBadgeButton>
        <Popover aria-label={status}>{statusData?.popoverContent}</Popover>
      </PopoverContainer>
    );
  }

  return null;
};

const PackageStatusLegend: React.FC<PackageStatusLegendProps> = ({
  packageStatus,
  figmaStatus,
  designCommitteeReview,
  engineerCommitteeReview,
}) => {
  const shouldShowFigma = figmaStatus === null;
  const shouldShowPeerReview = designCommitteeReview === null || engineerCommitteeReview === null;

  const shouldShowStatus = packageStatus || shouldShowFigma || shouldShowPeerReview;

  if (shouldShowStatus) {
    return (
      <Box display="flex" alignItems="center" flexGrow={1} columnGap="space40">
        {packageStatus && <PackageStatusBadge status={packageStatus} />}
        {shouldShowFigma && (
          <Badge as="span" variant="default">
            <ProcessDraftIcon decorative size="sizeIcon10" />
            <Box>Design assets pending</Box>
          </Badge>
        )}
        {shouldShowPeerReview ? (
          <Badge as="span" variant="default">
            <ProcessDraftIcon decorative size="sizeIcon10" />
            <Box>Peer review pending</Box>
          </Badge>
        ) : null}
      </Box>
    );
  }

  return null;
};

export {PackageStatusLegend};
