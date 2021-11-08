import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BadgeVariant} from '@twilio-paste/badge';
import {Badge} from '@twilio-paste/badge';
import {Popover, PopoverContainer, PopoverButton} from '@twilio-paste/popover';
import {useTheme} from '@twilio-paste/theme';

import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import {ProcessDraftIcon} from '@twilio-paste/icons/esm/ProcessDraftIcon';

import {sentenceCase} from '../../../utils/SentenceCase';

const ALPHA_DESCRIPTION =
  'An experimental component that isn’t ready for use in production. API will likely change. This component may be removed if it doesn’t test well.';
const BETA_DESCRIPTION =
  'Component is almost mature, but may have some bugs. Needs production feedback and will experience very minimal API changes.';

interface PackageStatusLegendProps {
  status?: string;
  figmaStatus?: string;
  designCommitteeStatus?: string;
  engineerCommitteeStatus?: string;
}

const PackageStatusBadge: React.FC<{status: string}> = ({status}) => {
  let badgeVariant: BadgeVariant;
  let popoverContent: string;

  if (status === 'beta') {
    badgeVariant = 'info';
    popoverContent = BETA_DESCRIPTION;
  }
  if (status === 'alpha') {
    badgeVariant = 'new';
    popoverContent = ALPHA_DESCRIPTION;
  }

  return (
    <>
      {badgeVariant && popoverContent ? (
        <PopoverContainer>
          <PopoverButton variant="reset">
            <Badge as="span" variant={badgeVariant}>
              <NewIcon decorative />
              <Box as="span">{sentenceCase(status)}</Box>
            </Badge>
          </PopoverButton>
          <Popover aria-label={status}>{popoverContent}</Popover>
        </PopoverContainer>
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
