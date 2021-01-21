import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {Space, isMarginTokenProp} from '@twilio-paste/style-props';

export interface MediaObjectProps extends Pick<BoxProps, 'as' | 'marginTop' | 'marginBottom'> {
  children: NonNullable<React.ReactNode>;
  verticalAlign?: 'center' | 'top';
}

const MediaObject = React.forwardRef<HTMLElement, MediaObjectProps>(
  ({as = 'span', children, marginBottom, marginTop, verticalAlign = 'top'}, ref) => {
    return (
      <Box
        as={as}
        display="flex"
        alignItems={verticalAlign === 'top' ? 'flex-start' : 'center'}
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
if (process.env.NODE_ENV === 'development') {
  MediaObject.propTypes = {
    children: PropTypes.node.isRequired,
    verticalAlign: PropTypes.oneOf(['center', 'top']),
  };
}

export interface MediaFigureProps extends Pick<BoxProps, 'as'> {
  align?: 'start' | 'end';
  children: NonNullable<React.ReactNode>;
  spacing?: Space;
}

const MediaFigure = React.forwardRef<HTMLElement, MediaFigureProps>(({as = 'span', children, align, spacing}, ref) => {
  return (
    <Box
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
});

MediaFigure.displayName = 'MediaFigure';
MediaFigure.defaultProps = {
  align: 'start',
  spacing: 'space0',
};
if (process.env.NODE_ENV === 'development') {
  MediaFigure.propTypes = {
    align: PropTypes.oneOf(['start', 'end']),
    children: PropTypes.node.isRequired,
    spacing: isMarginTokenProp,
  };
}

// export type MediaBodyProps = Pick<BoxProps, 'as'>;
export interface MediaBodyProps extends Pick<BoxProps, 'as'> {
  children: NonNullable<React.ReactNode>;
}

const MediaBody = React.forwardRef<HTMLElement, MediaBodyProps>(({as = 'span', children}, ref) => {
  return (
    <Box as={as} flex={1} minWidth="size0" ref={ref}>
      {children}
    </Box>
  );
});

MediaBody.displayName = 'MediaBody';
if (process.env.NODE_ENV === 'development') {
  MediaBody.propTypes = {
    children: PropTypes.node.isRequired,
  };
}

export {MediaObject, MediaFigure, MediaBody};
