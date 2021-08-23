import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {Space} from '@twilio-paste/style-props';
import {isMarginTokenProp} from '@twilio-paste/style-props';

type Orientation = 'horizontal' | 'vertical';
export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement>, Pick<BoxProps, 'element'> {
  id?: never;
  className?: never;
  orientation: Orientation;
  horizontalSpacing?: Space;
  verticalSpacing?: Space;
}

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({element = 'SEPARATOR', orientation, horizontalSpacing, verticalSpacing, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        aria-orientation={orientation}
        element={element}
        margin="space0"
        marginBottom={verticalSpacing}
        marginLeft={horizontalSpacing}
        marginRight={horizontalSpacing}
        marginTop={verticalSpacing}
        as="hr"
        borderWidth="borderWidth0"
        borderColor="colorBorderWeak"
        borderStyle="solid"
        borderBottomWidth={orientation === 'horizontal' ? 'borderWidth10' : null}
        borderLeftWidth={orientation === 'vertical' ? 'borderWidth10' : null}
        width={orientation === 'horizontal' ? 'auto' : null}
        height={orientation === 'vertical' ? 'auto' : null}
        ref={ref}
      />
    );
  }
);

Separator.displayName = 'Separator';

Separator.propTypes = {
  element: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical'] as Orientation[]).isRequired,
  horizontalSpacing: isMarginTokenProp,
  verticalSpacing: isMarginTokenProp,
};

export {Separator};
