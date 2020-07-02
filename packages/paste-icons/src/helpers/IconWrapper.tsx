import {styled, compose, display, size, system} from '@twilio-paste/styling-library';
import {Display, IconSize, TextColor} from '@twilio-paste/style-props';

// I can't name this simply `color` because TS + Emotion doesn't like it
// This sets the CSS `color` by using the `textColors` tokens via the `iconColor` prop
const iconColor = system({
  iconColor: {
    property: 'color',
    scale: 'textColors',
  },
});

export interface IconWrapperProps {
  as?: keyof JSX.IntrinsicElements;
  display?: Display;
  size?: IconSize;
  iconColor?: TextColor;
}

const IconWrapper = styled.span<IconWrapperProps>(
  compose(
    display,
    iconColor,
    size
  )
);

IconWrapper.defaultProps = {
  display: 'inline-flex',
  iconColor: 'currentColor',
  size: 'sizeIcon30',
};

IconWrapper.displayName = 'IconWrapper';
export {IconWrapper};
