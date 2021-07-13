import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';
import {AssetStatus} from '../component-status/AssetStatus';
import {PeerReviewStatus} from '../component-status/PeerReviewStatus';
import type {PackageData} from './types';

export const ComponentStatus: React.FC<PackageData> = ({
  Figma,
  Documentation,
  Code,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Design_committee_review,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Engineer_committee_review,
}) => {
  return (
    <Stack orientation="vertical" spacing="space20">
      <Box display="flex">
        <Box display="flex" flexBasis="50%">
          <Box flexGrow={0} flexShrink={0} flexBasis="120px">
            Code ready:
          </Box>
          <Box>
            <AssetStatus label="Code done" status={Code} />
          </Box>
        </Box>
        <Box display="flex" flexBasis="50%">
          <Box flexGrow={0} flexShrink={0} flexBasis="120px">
            Design assets:
          </Box>
          <Box>
            <AssetStatus label="Design assets done" status={Figma} />
          </Box>
        </Box>
      </Box>
      <Box display="flex">
        <Box display="flex" flexBasis="50%">
          <Box flexGrow={0} flexShrink={0} flexBasis="120px">
            Documentation:
          </Box>
          <Box>
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
        </Box>
        <Box display="flex" flexBasis="50%">
          <Box flexGrow={0} flexShrink={0} flexBasis="120px">
            Peer review:
          </Box>
          <Box>
            <PeerReviewStatus designStatus={Design_committee_review} engineerStatus={Engineer_committee_review} />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
