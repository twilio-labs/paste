import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

export interface TerminalProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
  decorative?: boolean;
}

const Terminal = React.memo(({ title = "Terminal", decorative = true, className, color, size }: TerminalProps) => {
  const uid = useUID();
  return (
    <div style={{ color, width: size, height: size }} className={className}>
      <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
        <title id={uid}>{title}</title>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 7V3H1v4h22zm0 1H1v13h22V8zM6.146 10.854a.5.5 0 01.708-.708l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708-.708L8.293 13l-2.147-2.146zM12.5 14a.5.5 0 110-1h4a.5.5 0 110 1h-4zM14 6a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zM0 2.5A.5.5 0 01.5 2h23a.5.5 0 01.5.5v19a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-19z"
        />
      </svg>
    </div>
  );
});

export { Terminal };
