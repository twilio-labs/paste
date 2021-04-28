import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {Box} from '@twilio-paste/box';
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

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type HelpTextVariants = ValueOf<typeof HelpTextVariants>;

export interface HelpTextProps extends React.HTMLAttributes<HTMLDivElement> {
  marginTop?: 'space0';
  variant?: HelpTextVariants;
}

const HelpText = React.forwardRef<HTMLDivElement, HelpTextProps>(({marginTop, children, variant, ...props}, ref) => {
  let icon = null;
  switch (variant) {
    case HelpTextVariants.ERROR:
      icon = (
        <Box flexShrink={0}>
          <ErrorIcon color="colorTextError" decorative size="sizeIcon20" />
        </Box>
      );
      break;
    case HelpTextVariants.ERROR_INVERSE:
      icon = (
        <Box flexShrink={0}>
          <ErrorIcon color="colorTextErrorWeak" decorative size="sizeIcon20" />
        </Box>
      );
      break;
    default:
      break;
  }

  let textColor = 'colorTextWeak' as TextColor;
  if (variant === 'error') {
    textColor = 'colorTextError';
  } else if (variant === 'error_inverse') {
    textColor = 'colorTextErrorWeak';
  } else if (variant === 'inverse') {
    textColor = 'colorTextInverseWeak';
  }

  return (
    <Flex marginTop={marginTop || 'space30'} ref={ref}>
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
});

HelpText.displayName = 'HelpText';

if (process.env.NODE_ENV === 'development') {
  HelpText.propTypes = {
    marginTop: PropTypes.oneOf(['space0']),
  };
}

export {HelpText};
