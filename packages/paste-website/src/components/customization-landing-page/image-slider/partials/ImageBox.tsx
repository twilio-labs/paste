import {styled} from '@twilio-paste/styling-library';

interface ImageBoxProps {
  clipPath?: string;
  src: string;
  label: string;
}

export const ImageBox = styled.img<ImageBoxProps>(({clipPath}) => ({
  pointerEvents: 'none',
  position: 'absolute',
  objectFit: 'scale-down',
  objectPosition: 'center center',
  width: '100%',
  height: '100%',
  clipPath,
}));

ImageBox.displayName = 'ImageBox';
