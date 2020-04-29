import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Space, isSpaceTokenProp} from '@twilio-paste/style-props';

export type Orientation = 'horizontal' | 'vertical';

export interface StackProps {
  id?: never;
  className?: never;
  orientation: Orientation;
  spacing?: Space;
}

const Stack: React.FC<StackProps> = ({children, orientation, spacing, ...props}) => {
  const count = React.useMemo(() => React.Children.count(children), [children]);

  return (
    <Box {...safelySpreadBoxProps(props)} display={orientation === 'horizontal' ? 'flex' : 'block'} flexWrap="wrap">
      {React.Children.map(children, (child, index) => {
        return (
          <Box
            marginBottom={orientation === 'vertical' && count !== index + 1 ? spacing : null}
            marginRight={orientation === 'horizontal' && count !== index + 1 ? spacing : null}
          >
            {child}
          </Box>
        );
      })}
    </Box>
  );
};

Stack.displayName = 'Stack';

if (process.env.NODE_ENV === 'development') {
  Stack.propTypes = {
    orientation: PropTypes.oneOf(['horizontal', 'vertical'] as Orientation[]).isRequired,
    spacing: isSpaceTokenProp,
  };
}

export {Stack};
