import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Stack} from '@twilio-paste/stack';
import {Badge} from '@twilio-paste/badge';
import type {BadgeVariant} from '@twilio-paste/badge/types';

import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import {ProcessDraftIcon} from '@twilio-paste/icons/esm/ProcessDraftIcon';

import {sentenceCase} from '../../../utils/SentenceCase';
// import {AssetStatus} from '../../component-status/AssetStatus';
import {PeerReviewStatus} from '../../component-status/PeerReviewStatus';

interface PackageStatusLegendProps {
  status?: string;
  figmaStatus?: string;
  designCommitteeStatus?: string;
  engineerCommitteeStatus?: string;
}

const PackageStatusBadge: React.FC<{status: string}> = ({status}) => {
  let badgeVariant: BadgeVariant;

  if (status === 'beta') {
    badgeVariant = 'info';
  }
  if (status === 'alpha') {
    badgeVariant = 'new';
  }

  return (
    <>
      {badgeVariant ? (
        <Badge as="span" variant={badgeVariant}>
          <NewIcon decorative />
          <Box as="span">{sentenceCase(status)}</Box>
        </Badge>
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

  return (
    <Stack orientation="horizontal" spacing="space40">
      {status ? <PackageStatusBadge status={status} /> : null}
      {isFigmaPending ? (
        <Text as="span" color="colorTextWeak" display="flex">
          <ProcessDraftIcon decorative />
          Design assets pending
        </Text>
      ) : null}
      <PeerReviewStatus
        designCommitteeStatus={designCommitteeStatus}
        engineerCommitteeStatus={engineerCommitteeStatus}
      />
    </Stack>
  );
};

export {PackageStatusLegend};
