import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Stack} from '@twilio-paste/stack';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';
import {AssetStatus} from '../../component-status/AssetStatus';
import {PeerReviewStatus} from '../../component-status/PeerReviewStatus';
import type {PackageStatusObject} from '../../../utils/types';

interface PackageStatusLegendProps {
  packageStatus: PackageStatusObject;
}

const PackageStatusLegend: React.FC<PackageStatusLegendProps> = ({packageStatus}) => {
  const {
    Figma,
    Documentation,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Design_committee_review,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Engineer_committee_review,
    Code,
  } = packageStatus[0].node.data;

  return (
    <Box marginBottom="space100">
      <Stack orientation="horizontal" spacing="space60">
        <Box display="flex" alignItems="center">
          <Text as="span" marginRight="space20">
            Code ready:
          </Text>
          <AssetStatus label="Code done" status={Code} />
        </Box>
        <Box display="flex" alignItems="center">
          <Text as="span" marginRight="space20">
            Design assets:
          </Text>
          <AssetStatus label="Design assets done" status={Figma} />
        </Box>
        <Box display="flex" alignItems="center">
          <Text as="span" marginRight="space20">
            Documentation:
          </Text>
          {Documentation === true ? (
            <Box display="flex" alignItems="center" justifyContent="center">
              <SuccessIcon
                display="inline-block"
                decorative={false}
                title="Documentation done"
                color="colorTextSuccess"
                size="sizeIcon30"
              />
            </Box>
          ) : (
            <Text as="span" color="colorTextWeak">
              Pending
            </Text>
          )}
        </Box>
        <Box display="flex" alignItems="center">
          <Text as="span" marginRight="space20">
            Peer review:
          </Text>
          <PeerReviewStatus designStatus={Design_committee_review} engineerStatus={Engineer_committee_review} />
        </Box>
      </Stack>
    </Box>
  );
};

export {PackageStatusLegend};
