import styled from '@emotion/styled';
import {space, Theme, themeGet} from 'styled-system';
import {MarginProps, PaddingProps} from '@twilio-paste/types';

interface MediaObjectProps extends Theme {
  isCentered?: boolean;
}

const MediaObject = styled.div<MediaObjectProps>`
  align-items: ${(props: MediaObjectProps) => (props.isCentered ? 'center' : 'flex-start')};
  display: flex;
`;

interface MediaFigureProps extends Theme {
  align?: 'start' | 'end';
  spacing?: 'space20' | 'space30';
}

const getMargin = (props: MediaFigureProps): string => {
  const direction = props.align === 'end' ? 'left' : 'right';
  const spacing = themeGet(`space.${props.spacing}`)(props);
  return `margin-${direction}: ${spacing}`;
};

const MediaFigure = styled.div<MediaFigureProps>`
  flex-shrink: 0;
  ${getMargin};
`;

MediaFigure.defaultProps = {
  align: 'start',
  spacing: 'space20',
};

interface MediaBodyProps extends Theme, MarginProps, PaddingProps {}

const MediaBody = styled.div<MediaBodyProps>`
  flex: 1;
  min-width: ${themeGet('minWidths.size0')};
  ${space};
`;

const Media = {
  Object: MediaObject,
  Figure: MediaFigure,
  Body: MediaBody,
};

export {Media, MediaBodyProps, MediaFigureProps, MediaObjectProps};
