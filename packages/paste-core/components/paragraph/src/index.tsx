import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import type {TextProps} from '@twilio-paste/text';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>, Pick<TextProps, 'element'> {
  id?: never;
  className?: never;
  marginBottom?: 'space0';
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({children, element = 'PARAGRAPH', marginBottom, ...props}, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        as="p"
        color="colorText"
        element={element}
        fontSize="fontSize30"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight40"
        marginBottom={marginBottom || 'space70'}
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  element: PropTypes.string,
  marginBottom: PropTypes.oneOf(['space0']) as PropTypes.Validator<'space0' | null | undefined> | undefined,
};

export {Paragraph};
