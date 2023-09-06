import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';

interface PeerReviewStatusProps {
  designStatus?: string;
  engineerStatus?: string;
}

const PeerReviewStatus: React.FC<React.PropsWithChildren<PeerReviewStatusProps>> = ({designStatus, engineerStatus}) => {
  /*
   * Counts as successfully reviewed if
   * neither is null and they aren't both 'not applicable'
   */

  // One is null, so overall the review is pending
  if (!designStatus || !engineerStatus) {
    return (
      <Text as="span" color="colorTextWeak">
        Pending
      </Text>
    );
  }
  // Neither is null, both are 'not applicable', so it's n/a
  if (designStatus === 'not applicable' && engineerStatus === 'not applicable') {
    return (
      <Text as="span" color="colorTextWeak">
        (n/a)
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
