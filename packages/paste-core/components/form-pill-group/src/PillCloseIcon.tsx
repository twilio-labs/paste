import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';

interface PillCloseIconProps {
  onClick: () => void;
}

export const PillCloseIcon: React.FC<PillCloseIconProps> = ({onClick}) => {
  return (
    <Box
      onClick={onClick}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <CloseIcon decorative size="sizeIcon10" />
    </Box>
  );
};
