import {styled, compose, size, system} from '@twilio-paste/styling-library';
import {IconSize, TextColor} from '@twilio-paste/style-props';

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
  size?: IconSize;
  iconColor?: TextColor;
}

const IconWrapper = styled.span<IconWrapperProps>(
  {
    display: 'inline-flex',
  },
  compose(
    iconColor,
    size
  )
);

IconWrapper.defaultProps = {
  size: 'sizeIcon30',
  iconColor: 'currentColor',
};

IconWrapper.displayName = 'IconWrapper';
export {IconWrapper};
