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
  status?: string;
  figmaStatus?: string;
  designCommitteeStatus?: string;
  engineerCommitteeStatus?: string;
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
              <NewIcon decorative />
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
  status,
  figmaStatus,
  designCommitteeStatus,
  engineerCommitteeStatus,
}) => {
  const isFigmaPending = figmaStatus === null;
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1} css={{gap: theme.space.space40}}>
      {status ? <PackageStatusBadge status={status} /> : null}
      {isFigmaPending ? (
        <Badge as="span" variant="default">
          <ProcessDraftIcon decorative />
          <Box>Design assets pending</Box>
        </Badge>
      ) : null}
      {designCommitteeStatus === null || engineerCommitteeStatus === null ? (
        <Badge as="span" variant="default">
          <ProcessDraftIcon decorative />
          <Box>Peer review pending</Box>
        </Badge>
      ) : null}
    </Box>
  );
};

export {PackageStatusLegend};
