import {styled, compose, display, size, system} from '@twilio-paste/styling-library';
import {Display, IconSize, TextColor} from '@twilio-paste/style-props';

// I can't name this simply `color` because TS + Emotion doesn't like it
// This sets the CSS `color` by using the `textColors` tokens via the `color` prop
const color = system({
  color: {
    property: 'color',
    scale: 'textColors',
  },
});

export interface IconWrapperProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  as?: keyof JSX.IntrinsicElements;
  display?: Display;
  size?: IconSize;
  color?: TextColor;
}

// @ts-ignore color is fine
const IconWrapper = styled.span<IconWrapperProps>(
  compose(
    display,
    color,
    size
  )
) as React.FC<IconWrapperProps>;

IconWrapper.defaultProps = {
  display: 'block',
  color: 'currentColor',
  size: 'sizeIcon30',
};

IconWrapper.displayName = 'IconWrapper';
export {IconWrapper};
