import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children: React.ReactNode;
}

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(({children, ...props}, ref) => {
  if (props.selected) {
    console.warn('"selected" is a blocked prop on this component, please use "value" on the select element.');
  }
  return (
    <Box
      as="option"
      ref={ref}
      {...safelySpreadBoxProps(props)}
      size={undefined}
      height={undefined}
      width={undefined}
      background="none"
      color="inherit"
      fontFamily="fontFamilyText"
      lineHeight="lineHeight50"
      paddingTop="space30"
      paddingBottom="space30"
      paddingLeft="space20"
    >
      {children}
    </Box>
  );
});

Option.displayName = 'Option';

if (process.env.NODE_ENV === 'development') {
  Option.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
}

export {Option};
