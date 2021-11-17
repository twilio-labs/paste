import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Badge} from '@twilio-paste/badge';
import type {BadgeVariants} from '@twilio-paste/badge/src/types';

import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import {ProcessDraftIcon} from '@twilio-paste/icons/esm/ProcessDraftIcon';

import {BadgePopoverButton, BadgePopoverContainer, BadgePopover} from '../../badgePopover';
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

  const {badgeVariant, popoverContent} = statusMap[status];

  if (badgeVariant) {
    return (
      <BadgePopoverContainer baseId="status">
        <BadgePopoverButton variant={badgeVariant}>
          <>
            <NewIcon decorative size="sizeIcon10" />
            {status}
          </>
        </BadgePopoverButton>
        <BadgePopover aria-label={status}>{popoverContent}</BadgePopover>
      </BadgePopoverContainer>
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
  const shouldShowStatus = packageStatus || !figmaStatus || !designCommitteeReview || !engineerCommitteeReview;

  if (shouldShowStatus) {
    return (
      <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1} columnGap="space40">
        {packageStatus && <PackageStatusBadge status={packageStatus} />}
        {!figmaStatus && (
          <Badge as="span" variant="default">
            <ProcessDraftIcon decorative size="sizeIcon10" />
            <Box>Design assets pending</Box>
          </Badge>
        )}
        {!designCommitteeReview || !engineerCommitteeReview ? (
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
