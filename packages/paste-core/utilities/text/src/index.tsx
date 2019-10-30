import styled from '@emotion/styled';
import {compose, space, display, verticalAlign, overflow, typography, system} from 'styled-system';
import {SpaceProps, Display, VerticalAlign, OverflowProps, TypographyProps} from '@twilio-paste/types';

interface Text extends SpaceProps, OverflowProps, TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  display?: Display;
  verticalAlign?: VerticalAlign;
}

const textColor = system({
  textColor: {
    property: 'color',
    scale: 'textColors',
  },
});
const textDecoration = system({textDecoration: true});

const Text = styled.span<Text>(
  {
    margin: 0,
    padding: 0,
  },
  compose(
    space,
    display,
    verticalAlign,
    overflow,
    textDecoration,
    typography,
    textColor
  )
);

Text.defaultProps = {
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight20',
  textColor: 'colorText',
};

Text.displayName = 'Text';
export {Text};
