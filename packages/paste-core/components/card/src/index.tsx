import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {PaddingProps, isPaddingTokenProp} from '@twilio-paste/style-props';

export interface CardProps extends React.HTMLAttributes<HTMLElement>, PaddingProps {}

const Card = React.forwardRef<HTMLElement, CardProps>(
  ({children, padding = 'space60', paddingBottom, paddingLeft, paddingRight, paddingTop, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="article"
        borderWidth="borderWidth20"
        borderColor="colorBorderWeaker"
        borderStyle="solid"
        borderRadius="borderRadius20"
        padding={padding}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        backgroundColor="colorBackgroundBody"
      >
        {children}
      </Box>
    );
  }
);

if (process.env.NODE_ENV === 'development') {
  Card.propTypes = {
    padding: isPaddingTokenProp,
    paddingTop: isPaddingTokenProp,
    paddingRight: isPaddingTokenProp,
    paddingBottom: isPaddingTokenProp,
    paddingLeft: isPaddingTokenProp,
  };
}

Card.displayName = 'Card';

export {Card};
