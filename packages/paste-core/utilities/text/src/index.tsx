import styled from '@emotion/styled';
import {compose, space, layout, typography, system} from 'styled-system';
import {SpaceProps, LayoutProps, TypographyProps} from '@twilio-paste/types';

interface Text extends SpaceProps, LayoutProps, TypographyProps {
  as?: keyof JSX.IntrinsicElements;
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
    layout,
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
