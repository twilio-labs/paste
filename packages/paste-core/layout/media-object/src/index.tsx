import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {Space, isMarginTokenProp} from '@twilio-paste/style-props';

export interface MediaObjectProps
  extends React.HTMLAttributes<any>,
    Pick<BoxProps, 'as' | 'marginTop' | 'marginBottom' | 'element' | 'variant'> {
  verticalAlign?: 'center' | 'top';
}

const MediaObject: React.FC<MediaObjectProps> = ({
  as = 'span',
  children,
  marginBottom,
  marginTop,
  verticalAlign = 'top',
  ...props
}) => {
  return (
    <Box
      element="MEDIA_OBJECT"
      {...safelySpreadBoxProps(props)}
      as={as}
      display="flex"
      alignItems={verticalAlign === 'top' ? 'flex-start' : 'center'}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {children}
    </Box>
  );
};

MediaObject.displayName = 'MediaObject';
if (process.env.NODE_ENV === 'development') {
  MediaObject.propTypes = {
    verticalAlign: PropTypes.oneOf(['center', 'top']),
  };
}

export interface MediaFigureProps extends React.HTMLAttributes<any>, Pick<BoxProps, 'as' | 'element' | 'variant'> {
  align?: 'start' | 'end';
  spacing?: Space;
}

const MediaFigure: React.FC<MediaFigureProps> = ({as = 'span', children, align, spacing, ...props}) => {
  return (
    <Box
      element="MEDIA_FIGURE"
      {...safelySpreadBoxProps(props)}
      as={as}
      display="flex"
      flexShrink={0}
      marginLeft={align === 'end' ? spacing : undefined}
      marginRight={align === 'start' ? spacing : undefined}
    >
      {children}
    </Box>
  );
};

MediaFigure.displayName = 'MediaFigure';
MediaFigure.defaultProps = {
  align: 'start',
  spacing: 'space0',
};
if (process.env.NODE_ENV === 'development') {
  MediaFigure.propTypes = {
    align: PropTypes.oneOf(['start', 'end']),
    spacing: isMarginTokenProp,
  };
}

export interface MediaBodyProps extends React.HTMLAttributes<any>, Pick<BoxProps, 'as' | 'element' | 'variant'> {}

const MediaBody: React.FC<MediaBodyProps> = ({as = 'span', children, ...props}) => {
  return (
    <Box element="MEDIA_BODY" {...safelySpreadBoxProps(props)} as={as} flex={1} minWidth="size0">
      {children}
    </Box>
  );
};

MediaBody.displayName = 'MediaBody';

export {MediaObject, MediaFigure, MediaBody};
