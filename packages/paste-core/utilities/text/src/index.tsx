import styled from '@emotion/styled';
import {
  compose,
  display,
  DisplayProps,
  FontStyleProps,
  LetterSpacingProps,
  space,
  system,
  typography,
  TextAlignProps,
} from 'styled-system';
import {FontProps, SpacingProps, TextColorProps, TextDecorationProps} from '@twilio-paste/types';

interface Text
  extends SpacingProps,
    FontProps,
    TextColorProps,
    TextDecorationProps,
    // styled system
    DisplayProps,
    FontStyleProps,
    LetterSpacingProps,
    TextAlignProps {
  as: keyof JSX.IntrinsicElements;
}

const textColor = system({
  textColor: {
    property: 'color',
    scale: 'textColors',
  },
});
const textDecoration = system({textDecoration: true});

const Text = styled.span<Text>(
  {margin: 0, padding: 0},
  compose(
    display,
    space,
    textColor,
    textDecoration,
    typography
  )
);

Text.displayName = 'Text';

Text.defaultProps = {
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight20',
  textColor: 'colorText',
};

export {Text};
