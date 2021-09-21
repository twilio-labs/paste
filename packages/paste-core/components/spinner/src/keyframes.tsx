import {keyframes} from '@twilio-paste/styling-library';

import {maxStrokeOffset} from './constants';

export const SvgKeyframes = keyframes`
  0%,
  15% {
    stroke-dashoffset: ${maxStrokeOffset};
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 65;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: ${maxStrokeOffset};
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
