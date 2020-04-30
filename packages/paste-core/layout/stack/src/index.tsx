import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Space, isSpaceTokenProp} from '@twilio-paste/style-props';

export type Orientation = 'horizontal' | 'vertical';

export interface StackProps {
  className?: never;
  id?: never;
  orientation?: Orientation;
  spacing?: Space;
}

const Stack: React.FC<StackProps> = ({children, orientation, spacing, ...props}) => {
  const count = React.useMemo(() => React.Children.count(children), [children]);
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Box
      {...safelySpreadBoxProps(props)}
      alignItems={orientation === 'horizontal' ? 'center' : null}
      display={orientation === 'horizontal' ? 'flex' : 'block'}
      flexWrap={orientation === 'horizontal' ? 'wrap' : null}
    >
      {validChildren.map((child, index) => {
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

Stack.defaultProps = {
  orientation: 'vertical',
};

if (process.env.NODE_ENV === 'development') {
  Stack.propTypes = {
    orientation: PropTypes.oneOf(['horizontal', 'vertical'] as Orientation[]),
    spacing: isSpaceTokenProp,
  };
}

export {Stack};
