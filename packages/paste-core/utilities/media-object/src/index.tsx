import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Space} from '@twilio-paste/style-props';

export interface MediaObjectProps {
  verticalAlign?: 'center' | 'top';
}

const MediaObject: React.FC<MediaObjectProps> = ({children, verticalAlign = 'top'}) => {
  return (
    <Box display="flex" alignItems={verticalAlign === 'top' ? 'flex-start' : 'center'}>
      {children}
    </Box>
  );
};
MediaObject.displayName = 'MediaObject';

export interface MediaFigureProps {
  align?: 'start' | 'end';
  spacing?: Space;
}
const MediaFigure: React.FC<MediaFigureProps> = ({children, align, spacing}) => {
  return (
    <Box
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

const MediaBody: React.FC<{}> = ({children}) => {
  return <Box flex={1}>{children}</Box>;
};
MediaBody.displayName = 'MediaBody';

export {MediaObject, MediaFigure, MediaBody};
