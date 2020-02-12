import * as React from 'react';
import {Box, BoxProps} from '@twilio-paste/box';
import {Space} from '@twilio-paste/style-props';

export interface MediaObjectProps extends Pick<BoxProps, 'as'> {
  verticalAlign?: 'center' | 'top';
}

const MediaObject: React.FC<MediaObjectProps> = ({as = 'span', children, verticalAlign = 'top'}) => {
  return (
    <Box as={as} display="flex" alignItems={verticalAlign === 'top' ? 'flex-start' : 'center'}>
      {children}
    </Box>
  );
};
MediaObject.displayName = 'MediaObject';

export interface MediaFigureProps extends Pick<BoxProps, 'as'> {
  align?: 'start' | 'end';
  spacing?: Space;
}
const MediaFigure: React.FC<MediaFigureProps> = ({as = 'span', children, align, spacing}) => {
  return (
    <Box
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

export type MediaBodyProps = Pick<BoxProps, 'as'>;
const MediaBody: React.FC<MediaBodyProps> = ({as = 'span', children}) => {
  return (
    <Box as={as} flex={1}>
      {children}
    </Box>
  );
};
MediaBody.displayName = 'MediaBody';

export {MediaObject, MediaFigure, MediaBody};
