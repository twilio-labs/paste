import {keyframes} from '@twilio-paste/styling-library';

// const originalKeyframes = `
//   0%,
//   25% {
//     stroke-dashoffset: 280;
//     transform: rotate(0);
//   }

//   50%,
//   75% {
//     stroke-dashoffset: 75;
//     transform: rotate(45deg);
//   }

//   100% {
//     stroke-dashoffset: 280;
//     transform: rotate(360deg);
//   }
// `;

export const SvgKeyframes = keyframes`
  0%,
  10% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }

  50% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  75% {
    stroke-dashoffset: 0;
    transform: rotate(45deg);
  }

  80% {
    stroke-dashoffset: 20;
    transform: rotate(45deg);
  }

  90% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }`;

export const CircleKeyframes = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;
