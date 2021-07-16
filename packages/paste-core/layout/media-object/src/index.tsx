import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {isMarginTokenProp} from '@twilio-paste/style-props';
import type {Space} from '@twilio-paste/style-props';

export interface MediaObjectProps
  extends React.HTMLAttributes<any>,
    Pick<BoxProps, 'as' | 'element' | 'marginTop' | 'marginBottom' | 'variant'> {
  children: NonNullable<React.ReactNode>;
  verticalAlign?: 'center' | 'top';
}

const MediaObject = React.forwardRef<HTMLElement, MediaObjectProps>(
  (
    {as = 'span', children, element = 'MEDIA_OBJECT', marginBottom, marginTop, verticalAlign = 'top', ...props},
    ref
  ) => {
    return (
      <Box
        element={element}
        {...safelySpreadBoxProps(props)}
        alignItems={verticalAlign === 'top' ? 'flex-start' : 'center'}
        as={as}
        display="flex"
        marginBottom={marginBottom}
        marginTop={marginTop}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

MediaObject.displayName = 'MediaObject';

MediaObject.propTypes = {
  children: PropTypes.node.isRequired,
  verticalAlign: PropTypes.oneOf(['center', 'top']),
};

export interface MediaFigureProps extends React.HTMLAttributes<any>, Pick<BoxProps, 'as' | 'element' | 'variant'> {
  align?: 'start' | 'end';
  children: NonNullable<React.ReactNode>;
  spacing?: Space;
}

const MediaFigure = React.forwardRef<HTMLElement, MediaFigureProps>(
  ({align, as = 'span', children, element = 'MEDIA_FIGURE', spacing, ...props}, ref) => {
    return (
      <Box
        element={element}
        {...safelySpreadBoxProps(props)}
        as={as}
        display="flex"
        flexShrink={0}
        marginLeft={align === 'end' ? spacing : undefined}
        marginRight={align === 'start' ? spacing : undefined}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

MediaFigure.displayName = 'MediaFigure';

MediaFigure.defaultProps = {
  align: 'start',
  spacing: 'space0',
};

MediaFigure.propTypes = {
  align: PropTypes.oneOf(['start', 'end']),
  children: PropTypes.node.isRequired,
  spacing: isMarginTokenProp,
};

export interface MediaBodyProps extends React.HTMLAttributes<any>, Pick<BoxProps, 'as' | 'element' | 'variant'> {
  children: NonNullable<React.ReactNode>;
}

const MediaBody = React.forwardRef<HTMLElement, MediaBodyProps>(
  ({as = 'span', children, element = 'MEDIA_BODY', ...props}, ref) => {
    return (
      <Box element={element} {...safelySpreadBoxProps(props)} as={as} flex={1} minWidth="size0" ref={ref}>
        {children}
      </Box>
    );
  }
);

MediaBody.displayName = 'MediaBody';

MediaBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export {MediaObject, MediaFigure, MediaBody};
