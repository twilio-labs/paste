import * as React from 'react';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import type {InformationIconProps} from '@twilio-paste/icons/esm/InformationIcon';

type IconSizeExampleProps = Pick<InformationIconProps, 'size'>;

export const IconSizeExample: React.FC<IconSizeExampleProps> = ({size}) => {
  return <InformationIcon decorative={false} size={size} title="Description of icon" />;
};
