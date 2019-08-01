import styled from '@emotion/styled';
import {space, Theme, themeGet} from 'styled-system';
import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface MediaObjectProps extends Theme {
  isCentered?: boolean;
}

const MediaObject = styled.div<MediaObjectProps>`
  align-items: ${(props: MediaObjectProps) => (props.isCentered ? 'center' : 'flex-start')};
  display: flex;
`;

export interface MediaFigureProps extends Theme {
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

interface MarginProps {
  m?: keyof ThemeShape['space'];
  margin?: keyof ThemeShape['space'];
  mt?: keyof ThemeShape['space'];
  marginTop?: keyof ThemeShape['space'];
  mr?: keyof ThemeShape['space'];
  marginRight?: keyof ThemeShape['space'];
  mb?: keyof ThemeShape['space'];
  marginBottom?: keyof ThemeShape['space'];
  ml?: keyof ThemeShape['space'];
  marginLeft?: keyof ThemeShape['space'];
  mx?: keyof ThemeShape['space'];
  my?: keyof ThemeShape['space'];
}

interface PaddingProps {
  p?: keyof ThemeShape['space'];
  padding?: keyof ThemeShape['space'];
  pt?: keyof ThemeShape['space'];
  paddingTop?: keyof ThemeShape['space'];
  pr?: keyof ThemeShape['space'];
  paddingRight?: keyof ThemeShape['space'];
  pb?: keyof ThemeShape['space'];
  paddingBottom?: keyof ThemeShape['space'];
  pl?: keyof ThemeShape['space'];
  paddingLeft?: keyof ThemeShape['space'];
  px?: keyof ThemeShape['space'];
  py?: keyof ThemeShape['space'];
}

export interface MediaBodyProps extends Theme, MarginProps, PaddingProps {}

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

export {Media};
