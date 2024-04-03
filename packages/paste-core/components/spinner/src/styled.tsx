import { styled } from "@twilio-paste/styling-library";

import { circleCircumference } from "./constants";
import { CircleKeyframes, SafariSvgKeyframes, SvgKeyframes } from "./keyframes";

export const StyledCircleTrack = styled.circle({
  transformOrigin: "center",
  opacity: 0.25,
});

/*
 * AnimatedStyledCircle and StyledSvg use different animations for Safari because
 * Safari does not respect the `transformOrigin: "center"` and causes bugs
 */

export const AnimatedStyledCircle = styled.circle<{ show: boolean; isSafari: boolean }>(({ show, isSafari }) => {
  return {
    transformOrigin: "center",
    animation: isSafari ? "none" : `1.5s ease-in-out infinite both ${CircleKeyframes}`,
    strokeDasharray: circleCircumference,
    opacity: show ? 1 : 0,
  };
});

export const StyledSvg = styled.svg<{ isSafari: boolean }>(({ isSafari }) => {
  return {
    height: "100%",
    width: "100%",
    display: "block",
    animation: isSafari ? `1s infinite linear ${SafariSvgKeyframes}` : `4.25s linear infinite both ${SvgKeyframes}`,
  };
});
