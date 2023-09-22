import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

export interface BrushProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
  decorative?: boolean;
}

const Brush = React.memo(({ title = "Brush", decorative = true, className, color, size }: BrushProps) => {
  const uid = useUID();
  return (
    <div style={{ color, width: size, height: size }} className={className}>
      <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
        <title id={uid}>{title}</title>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 23.5a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5v-1.882l-1.053 2.106A.5.5 0 016.5 24h-3a.5.5 0 01-.5-.5v-7.499h-.5a.5.5 0 01-.5-.5v-3.5a2 2 0 012-2h5.023a.5.5 0 00.464-.687A6.815 6.815 0 019 6.786V3a3 3 0 116 0v3.786c0 .867-.165 1.726-.487 2.527a.5.5 0 00.464.687H20a2 2 0 012 2v3.501a.5.5 0 01-.5.5H21V23.5zM4 16.001V23h2.191l1.862-3.724c.236-.472.947-.304.947.224V23h11v-6.999H4zm17-1V12a1 1 0 00-1-1h-5.023a1.5 1.5 0 01-1.392-2.058A5.79 5.79 0 0014 6.786V3a2 2 0 10-4 0v3.786c0 .739.14 1.47.415 2.156a1.5 1.5 0 01-1.392 2.059H4a1 1 0 00-1 1v3h.468L3.5 15h17l.032.001H21zM12 4a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </div>
  );
});

export { Brush };
