import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {Flex} from '@twilio-paste/flex';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import {TextColor} from '@twilio-paste/style-props';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';

export const HelpTextVariants = {
  DEFAULT: 'default',
  ERROR: 'error',
  ERROR_INVERSE: 'error_inverse',
  INVERSE: 'inverse',
} as const;

export type HelpTextVariants = ValueOf<typeof HelpTextVariants>;

export interface HelpTextProps extends React.HTMLAttributes<HTMLDivElement> {
  marginTop?: 'space0';
  variant?: HelpTextVariants;
}

const HelpText: React.FC<HelpTextProps> = ({marginTop, children, variant, ...props}) => {
  let icon = null;
  switch (variant) {
    case HelpTextVariants.ERROR:
      icon = <ErrorIcon color="colorTextError" decorative size="sizeIcon20" />;
      break;
    case HelpTextVariants.ERROR_INVERSE:
      icon = <ErrorIcon color="colorTextErrorLight" decorative size="sizeIcon20" />;
      break;
    default:
      break;
  }

  let textColor = 'colorTextWeak' as TextColor;
  if (variant === 'error') {
    textColor = 'colorTextError';
  } else if (variant === 'error_inverse') {
    textColor = 'colorTextErrorLight';
  } else if (variant === 'inverse') {
    textColor = 'colorTextInverseWeak';
  }

  return (
    <Flex vAlignContent="center" marginTop={marginTop || 'space30'}>
      {icon}
      <Text
        {...safelySpreadTextProps(props)}
        as="div"
        color={textColor}
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        marginLeft={icon ? 'space20' : undefined}
      >
        {children}
      </Text>
    </Flex>
  );
};

HelpText.displayName = 'HelpText';

if (process.env.NODE_ENV === 'development') {
  HelpText.propTypes = {
    marginTop: PropTypes.oneOf(['space0']),
  };
}

export {HelpText};
