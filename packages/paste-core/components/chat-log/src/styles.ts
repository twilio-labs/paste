import type {BoxStyleProps} from '@twilio-paste/box';
import type {MessageVariants} from './types';

export const bubbleVariantStyles: {
  [key in MessageVariants]: {
    backgroundColor: BoxStyleProps['backgroundColor'];
  };
} = {
  inbound: {
    backgroundColor: 'colorBackground',
  },
  outbound: {
    backgroundColor: 'colorBackgroundPrimaryWeakest',
  },
};

export const messageVariantStyles: {
  [key in MessageVariants]: {
    marginLeft?: BoxStyleProps['marginLeft'];
    marginRight?: BoxStyleProps['marginRight'];
  };
} = {
  inbound: {
    marginRight: 'space70',
  },
  outbound: {
    marginLeft: 'space70',
  },
};
