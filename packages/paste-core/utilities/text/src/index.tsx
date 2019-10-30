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
    typography,
    textColor
  )
);

Text.defaultProps = {
  fontSize: 'fontSize20',
  lineHeight: 'lineHeight20',
  textColor: 'colorText',
};

Text.displayName = 'Text';
export {Text};
