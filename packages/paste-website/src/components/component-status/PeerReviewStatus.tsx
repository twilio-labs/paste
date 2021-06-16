import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';

interface PeerReviewStatusProps {
  designStatus: string;
  engineerStatus: string;
}

const PeerReviewStatus: React.FC<PeerReviewStatusProps> = ({designStatus, engineerStatus}) => {
  if (designStatus === null || engineerStatus === null) {
    return (
      <Text as="span" color="colorTextWeak">
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
        size="sizeIcon30"
      />
    </Box>
  );
};

export {PeerReviewStatus};
