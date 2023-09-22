import { css, styled } from "@twilio-paste/styling-library";

export const CodeBlockOverlayShadow = styled.div(
  css({
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    background: `linear-gradient(0, #121C2D 0%, rgba(18, 28, 45, 0) 100%)`,
  }),
);
