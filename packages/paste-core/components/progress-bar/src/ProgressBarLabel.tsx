import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';
import type {Space} from '@twilio-paste/style-props';

import {LABEL_SUFFIX} from './constants';

export interface ProgressBarLabelProps extends HTMLPasteProps<'div'> {
  element?: BoxProps['element'];
  children: string;
  htmlFor: string;
  marginBottom?: Space;
}

export const ProgressBarLabel = React.forwardRef<HTMLLabelElement, ProgressBarLabelProps>(
  ({element = 'PROGRESS_BAR_LABEL', children, htmlFor, marginBottom = 'space20', ...labelProps}, ref) => {
    return (
      <Box
        {...labelProps}
        as="div"
        element={element}
        id={`${htmlFor}${LABEL_SUFFIX}`}
        ref={ref}
        borderBottomWidth="borderWidth0"
        display="block"
        marginBottom={marginBottom}
        paddingLeft="space0"
        paddingRight="space0"
        textTransform="none"
        fontSize="fontSize30"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight30"
        color="colorText"
      >
        {children}
      </Box>
    );
  }
);

ProgressBarLabel.displayName = 'ProgressBarLabel';
