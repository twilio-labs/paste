import * as React from 'react';
import {MediaFigure} from '../src';
import type {MediaFigureProps} from '../src';

export interface CustomizableMediaFigureProps extends MediaFigureProps {
  element?: string;
  variant?: 'primary' | 'secondary';
}

export const CustomizableMediaFigure: React.FC<CustomizableMediaFigureProps> = ({
  children,
  element,
  variant,
  ...props
}) => {
  return (
    <MediaFigure element={element} variant={variant} {...props}>
      {children}
    </MediaFigure>
  );
};
