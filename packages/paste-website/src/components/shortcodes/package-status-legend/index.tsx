import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Badge} from '@twilio-paste/badge';
import type {BadgeVariants} from '@twilio-paste/badge/src/types';
import {useTheme} from '@twilio-paste/theme';

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

const PackageStatusBadge: React.FC<{status: string}> = ({status}) => {
  let badgeVariant: BadgeVariants | undefined;
  let popoverContent = '';

  if (status === 'Alpha') {
    badgeVariant = 'new';
    popoverContent = StatusDescriptions.ALPHA;
  }

  if (status === 'Beta') {
    badgeVariant = 'info';
    popoverContent = StatusDescriptions.BETA;
  }

  return (
    <>
      {badgeVariant ? (
        <BadgePopoverContainer baseId="status">
          <BadgePopoverButton variant={badgeVariant}>
            <>
              <NewIcon decorative size="sizeIcon10" />
              {status}
            </>
          </BadgePopoverButton>
          <BadgePopover aria-label={status}>{popoverContent}</BadgePopover>
        </BadgePopoverContainer>
      ) : null}
    </>
  );
};

const PackageStatusLegend: React.FC<PackageStatusLegendProps> = ({
  packageStatus,
  figmaStatus,
  designCommitteeReview,
  engineerCommitteeReview,
}) => {
  const theme = useTheme();

  const shouldShowStatus = packageStatus || !figmaStatus || !designCommitteeReview || !engineerCommitteeReview;

  return (
    <>
      {shouldShowStatus && (
        <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1} css={{gap: theme.space.space40}}>
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
      )}
    </>
  );
};

export {PackageStatusLegend};
