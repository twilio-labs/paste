import * as React from 'react';
import {MediaObject} from '../src';
import type {MediaObjectProps} from '../src';

export interface CustomizableMediaObjectProps extends MediaObjectProps {
  element?: string;
  variant?: 'primary' | 'secondary';
}

export const CustomizableMediaObject: React.FC<CustomizableMediaObjectProps> = ({
  children,
  element,
  variant,
  ...props
}) => {
  return (
    <MediaObject element={element} variant={variant} {...props}>
      {children}
    </MediaObject>
  );
};
