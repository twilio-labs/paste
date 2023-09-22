import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Text } from '@twilio-paste/text';
import { SuccessIcon } from '@twilio-paste/icons/esm/SuccessIcon';

interface PackageStatusProps {
  status?: string;
  label: string;
}

const AssetStatus: React.FC<React.PropsWithChildren<PackageStatusProps>> = ({ label, status }) => {
  if (status === 'yes') {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <SuccessIcon
          display="inline-block"
          decorative={false}
          title={label}
          color="colorTextSuccess"
          size="sizeIcon60"
        />
      </Box>
    );
  }
  if (status === 'not applicable') {
    return (
      <Text as="span" color="colorTextWeak" fontSize="fontSize60" lineHeight="lineHeight60">
        (n/a)
      </Text>
    );
  }
  return (
    <Text as="span" color="colorTextWeak" fontSize="fontSize60" lineHeight="lineHeight60">
      Pending
    </Text>
  );
};

export { AssetStatus };
