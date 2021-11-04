import * as React from 'react';
import {Text} from '@twilio-paste/text';

import {ProcessDraftIcon} from '@twilio-paste/icons/esm/ProcessDraftIcon';

interface PeerReviewStatusProps {
  designCommitteeStatus?: string;
  engineerCommitteeStatus?: string;
}

const PeerReviewStatus: React.FC<PeerReviewStatusProps> = ({designCommitteeStatus, engineerCommitteeStatus}) => {
  // Counts as successfully reviewed if
  // neither is null and they aren't both 'not applicable'

  // One is null, so overall the review is pending
  // if (designCommitteeStatus === null || engineerCommitteeStatus === null) {
  return (
    <>
      {designCommitteeStatus === null || engineerCommitteeStatus === null ? (
        <Text as="span" color="colorTextWeak" display="flex">
          <ProcessDraftIcon decorative />
          Peer review pending
        </Text>
      ) : null}
    </>
  );
  // }
  // Neither is null, both are 'not applicable', so it's n/a
  // if (designCommitteeStatus === 'not applicable' && engineerCommitteeStatus === 'not applicable') {
  //   return (
  //     <Text as="span" color="colorTextWeak">
  //       (n/a)
  //     </Text>
  //   );
  // }

  // return (
  //   <Box display="flex" alignItems="center" justifyContent="center">
  //     <SuccessIcon
  //       display="inline-block"
  //       decorative={false}
  //       title="Peer review done"
  //       color="colorTextSuccess"
  //       size="sizeIcon30"
  //     />
  //   </Box>
  // );
};

export {PeerReviewStatus};
