import { keyframes } from "@twilio-paste/styling-library";

import { circleCircumference } from "./constants";
/*
 * Stroke dash offset is set with percentages of the circle circumference;
 * If we set our offset to be 100% of the circle circumference (or equal to the circumference), no visible stroke is drawn.
 * If we set our offset to be 99.9% of the circle circumference, the drawn stroke is very close to a zero point, which creates a filled in circle.
 * Using percentages and the circle circumference allows us to ensure the stroke is drawn responsively, and will scale well.
 */
export const SvgKeyframes = keyframes`
  0%,
  15% {
    stroke-dashoffset: ${circleCircumference * 0.9999};
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: ${circleCircumference * 0.2};
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: ${circleCircumference * 0.9999};
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

export const SafariSvgKeyframes = keyframes`
  0%,  
  75% {
    stroke-dashoffset: 90%;
  }
  
  100% {
    stroke-dashoffset: 90%;
    transform: rotate(360deg);
  }
`;
