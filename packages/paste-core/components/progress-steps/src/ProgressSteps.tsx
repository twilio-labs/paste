import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import type {Orientation} from './types';
import {ProgressStepsContext} from './ProgressStepsContext';

const VerticalStyles: BoxProps = {
  flexDirection: 'column',
  rowGap: 'space30',
  alignItems: 'flex-start', // to prevent children from stretching full width
};
const HorizontalStyles: BoxProps = {
  alignItems: 'center',
  columnGap: 'space30',
  flexWrap: 'nowrap',
};

export interface ProgressStepsProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  orientation?: Orientation;
}

export const ProgressSteps = React.forwardRef<HTMLDivElement, ProgressStepsProps>(
  ({element = 'PROGRESS_STEPS', orientation = 'horizontal', ...props}, ref) => {
    return (
      <ProgressStepsContext.Provider value={{orientation}}>
        <Box
          {...safelySpreadBoxProps(props)}
          ref={ref}
          element={element}
          display="flex"
          role="list"
          {...(orientation === 'horizontal' ? HorizontalStyles : VerticalStyles)}
        >
          {props.children}
        </Box>
      </ProgressStepsContext.Provider>
    );
  }
);
ProgressSteps.displayName = 'ProgressSteps';
