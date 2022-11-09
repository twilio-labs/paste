import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {isSpaceTokenProp, ResponsiveProp} from '@twilio-paste/style-props';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import type {StackProps} from './types';
import {getAlignment, getDirection} from './utils';

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({children, orientation, spacing, justifyContent, element = 'STACK', ...props}, ref) => {
    const validChildren = React.useMemo(() => {
      return React.Children.toArray(children).filter(
        (child) => React.isValidElement(child) || typeof child === 'string'
      );
    }, [children]);
    const keySeed = useUIDSeed();

    return (
      <Box
        element={element}
        {...safelySpreadBoxProps(props)}
        display="flex"
        alignItems={getAlignment(orientation)}
        justifyContent={justifyContent}
        rowGap={spacing}
        columnGap={spacing}
        flexDirection={getDirection(orientation)}
        ref={ref}
      >
        {validChildren.map((child, index) => {
          return (
            <Box element={`${element}_CHILD`} key={keySeed(`stack-${index}`)}>
              {child}
            </Box>
          );
        })}
      </Box>
    );
  }
);

Stack.displayName = 'Stack';

Stack.propTypes = {
  orientation: ResponsiveProp(PropTypes.oneOf(['horizontal', 'vertical'])).isRequired,
  justifyContent: ResponsiveProp(
    PropTypes.oneOf([
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
      'left',
      'right',
      'normal',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'inherit',
      'initial',
      'revert',
      'revert-layer',
      'unset',
    ])
  ),
  spacing: isSpaceTokenProp,
  element: PropTypes.string,
};

export {Stack};
