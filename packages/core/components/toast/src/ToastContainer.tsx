import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import {ToastPortal} from './ToastPortal';
import {ToastContainerPropTypes} from './propTypes';
import type {ToastContainerProps} from './types';

const ToastContainer = React.forwardRef<HTMLDivElement, ToastContainerProps>(({children, ...props}, ref) => {
  return (
    <ToastPortal {...props}>
      <Stack orientation="vertical" spacing="space40" ref={ref}>
        {children}
      </Stack>
    </ToastPortal>
  );
});

ToastContainer.displayName = 'ToastContainer';

ToastContainer.propTypes = ToastContainerPropTypes;

export {ToastContainer};
