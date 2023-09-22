import * as React from 'react';
import { InformationIcon } from '@twilio-paste/icons/esm/InformationIcon';
import type { InformationIconProps } from '@twilio-paste/icons/esm/InformationIcon';

type IconSizeExampleProps = Pick<InformationIconProps, 'size' | 'color'>;

export const IconSizeExample: React.FC<React.PropsWithChildren<IconSizeExampleProps>> = ({ size, color }) => {
  return <InformationIcon decorative color={color} size={size} title="Description of icon" />;
};
