import {keyframes} from '@twilio-paste/styling-library';

export const SvgKeyframes = keyframes`
  0%,
  25% {
    stroke-dashoffset: 282;
    transform: rotate(0);
  }

  50%,
  70% {
    stroke-dashoffset: 45;
    transform: rotate(20deg);
  }

  100% {
    stroke-dashoffset: 281;
    transform: rotate(360deg);
  }
`;

export const CircleKeyframes = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;
