import styled from '@emotion/styled';
import {compose, space, display, verticalAlign, overflow, typography, system} from 'styled-system';
import {SpaceProps, Display, VerticalAlign, OverflowProps, TypographyProps} from '@twilio-paste/style-props';

interface Text extends React.HTMLAttributes<any>, SpaceProps, OverflowProps, TypographyProps {
  as: keyof JSX.IntrinsicElements;
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

const Text = styled.span(
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
  // we do this because the default typings of emotion styled
  // means Text gets typed as a span, and can't be extended
  // correctly to utilise the as prop. The new HTML element attributes
  // always clash with the span html attributes. To override this,
  // we retype as a basic functional component which is easy to extend
) as React.FC<Text>;

Text.defaultProps = {
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight30',
  textColor: 'colorText',
};

Text.displayName = 'Text';
export {Text};
export * from './SafelySpreadProps';
