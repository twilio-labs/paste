import styled from '@emotion/styled';
import {compose, size, system} from 'styled-system';
import {IconSize, TextColor} from '@twilio-paste/types';

// I can't name this simply `color` because TS + Emotion doesn't like it
const iconColor = system({
  iconColor: {
    property: 'color',
    scale: 'textColors',
  },
});

export interface IconWrapperProps {
  as?: keyof JSX.IntrinsicElements;
  size?: IconSize;
  iconColor?: TextColor | 'currentColor';
}

const IconWrapper = styled.span<IconWrapperProps>(
  {
    display: 'inline-block',
  },
  compose(
    iconColor,
    size
  )
);

IconWrapper.defaultProps = {
  size: 'sizeIcon20',
  iconColor: 'currentColor',
};

IconWrapper.displayName = 'IconWrapper';
export {IconWrapper};
