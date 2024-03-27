import { styled } from "@twilio-paste/styling-library";

import { circleCircumference } from "./constants";
import { CircleKeyframes, SafariSvgKeyframes, SvgKeyframes } from "./keyframes";

export const StyledCircleTrack = styled.circle({
  transformOrigin: "center",
  opacity: 0.25,
});

export const AnimatedStyledCircle = styled.circle<{ show: boolean }>(({ show }) => {
  // `transformOrigin: "center"` does not work on Safari, so only apply the animation on non-Safari browsers
  const isSafari = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
  return {
    transformOrigin: "center",
    animation: isSafari ? "none" : `1.5s ease-in-out infinite both ${CircleKeyframes}`,
    strokeDasharray: circleCircumference,
    opacity: show ? 1 : 0,
  };
});

export const StyledSvg = styled.svg(() => {
  // Use simpler animations for Safari to accomodate transformOrigin bug fix
  const isSafari = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
  return {
    height: "100%",
    width: "100%",
    display: "block",
    animation: isSafari ? `1s infinite linear ${SafariSvgKeyframes}` : `4.25s linear infinite both ${SvgKeyframes}`,
  };
});
