import * as React from 'react';
import {MediaBody} from '../src';
import type {MediaBodyProps} from '../src';

export interface CustomizableMediaBodyProps extends MediaBodyProps {
  element?: string;
  variant?: 'primary' | 'secondary';
}

export const CustomizableMediaBody: React.FC<CustomizableMediaBodyProps> = ({children, element, variant, ...props}) => {
  return (
    <MediaBody element={element} variant={variant} {...props}>
      {children}
    </MediaBody>
  );
};
