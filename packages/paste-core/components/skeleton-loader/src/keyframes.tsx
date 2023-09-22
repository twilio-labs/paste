import { keyframes } from "@twilio-paste/styling-library";

export const SkeletonLoaderKeyframes = keyframes`
  0% {
    transform: translateX(-100%) skew(155deg);
  }
  50%,
  100% {
    transform: translateX(100%) skew(155deg);
  }
`;
