import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Text } from '@twilio-paste/text';
import { SuccessIcon } from '@twilio-paste/icons/esm/SuccessIcon';

interface PeerReviewStatusProps {
  designStatus?: string | null;
  engineerStatus?: string | null;
}

const PeerReviewStatus: React.FC<PeerReviewStatusProps> = ({ designStatus, engineerStatus }) => {
  if (!designStatus || !engineerStatus) {
    return (
      <Text fontSize="fontSize60" lineHeight="lineHeight60" as="span" color="colorTextWeak">
        Pending
      </Text>
    );
  }
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <SuccessIcon
        display="inline-block"
        decorative={false}
        title="Peer review done"
        color="colorTextSuccess"
        size="sizeIcon60"
      />
    </Box>
  );
};

export { PeerReviewStatus };
