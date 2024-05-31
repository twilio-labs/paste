import { animated, useReducedMotion, useTransition } from "@twilio-paste/animation-library";
import { Box } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { AIChatLog } from "./AIChatLog";
import type { AIChat } from "./useAIChatLogger";

const AnimatedAI = animated(Box);
type StyleProps = React.ComponentProps<typeof AnimatedAI>["style"];

export interface AIChatLoggerProps extends HTMLPasteProps<"div"> {
  /**
   * Array of AIs in the log. Use with useAIChatLogger()
   *
   * @default 'AI_ATTACHMENT'
   * @type {BoxProps['element']}
   * @memberof AIAttachmentProps
   */
  AIs: AIChat[];
  children?: never;
}

const buildTransitionX = (AIChat: AIChat): number => {
  if (AIChat.variant === "bot") return -100;
  if (AIChat.variant === "user") return 100;
  return 0;
};

export const AIChatLogger = React.forwardRef<HTMLDivElement, AIChatLoggerProps>(({ AIs, ...props }, ref) => {
  const transitions = useTransition(AIs, {
    keys: (AIChat: AIChat) => AIChat.id,
    from: (AIChat: AIChat): StyleProps => ({ opacity: 0, x: buildTransitionX(AIChat) }),
    enter: { opacity: 1, x: 0 },
    leave: (AIChat: AIChat): StyleProps => ({ opacity: 0, x: buildTransitionX(AIChat) }),
    config: {
      mass: 0.7,
      tension: 190,
      friction: 16,
    },
  });

  const animatedAIs = useReducedMotion()
    ? AIs.map((AIChat) => React.cloneElement(AIChat.content, { key: AIChat.id }))
    : transitions((styles: StyleProps, AIChat: AIChat, { key }: { key: string }) => (
        <AnimatedAI as="div" style={styles} key={key}>
          {AIChat.content}
        </AnimatedAI>
      ));

  return (
    <AIChatLog {...props} ref={ref}>
      {animatedAIs}
    </AIChatLog>
  );
});

AIChatLogger.displayName = "AIChatLogger";
