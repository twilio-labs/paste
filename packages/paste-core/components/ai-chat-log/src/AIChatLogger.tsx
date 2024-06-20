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
   * @default null
   * @type {AIChat[]}
   * @memberof AIChatLoggerProps
   */
  aiChats: AIChat[];
  children?: never;
}

export const AIChatLogger = React.forwardRef<HTMLDivElement, AIChatLoggerProps>(({ aiChats, ...props }, ref) => {
  const transitions = useTransition(aiChats, {
    keys: (AIChat: AIChat) => AIChat.id,
    from: (): StyleProps => ({ opacity: 0, x: 0 }),
    enter: { opacity: 1, x: 0 },
    leave: (): StyleProps => ({ opacity: 0, x: 0 }),
    config: {
      mass: 0.7,
      tension: 190,
      friction: 16,
    },
  });

  const animatedAIs = useReducedMotion()
    ? aiChats.map((AIChat) => React.cloneElement(AIChat.content, { key: AIChat.id }))
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
