import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

export interface HeartDoodleIconProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
  decorative?: boolean;
}

const HeartDoodleIcon = React.memo(
  ({ title = "Heart Doodle Icon", decorative = true, className, color, size }: HeartDoodleIconProps) => {
    const titleId = useUID();
    return (
      <span style={{ color, width: size, height: size, display: "inline-block" }} className={className}>
        <svg
          role="img"
          aria-hidden={decorative}
          viewBox="0 0 33 33"
          width="100%"
          height="100%"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M18.292 2.066c3.81-2.53 8.93-1.863 11.828 1.228 5.925 6.315.145 17.381-11.581 25a.49.49 0 11-.534-.822c11.287-7.333 16.755-17.8 11.4-23.508C26.83 1.218 22.24.62 18.835 2.881a8.224 8.224 0 00-1.556 1.353l-.133.152.138.19c.882 1.258 1.39 2.643 1.424 3.908v.236c-.04 2.1-1.058 3.589-2.39 3.61-1.392.022-2.239-1.515-2.009-3.765a8.966 8.966 0 011.427-3.93l.162-.237-.173-.191a8.907 8.907 0 00-1.314-1.154l-.246-.17C10.761.62 6.171 1.217 3.595 3.963c-5.978 6.373 1.695 18.678 14.997 25.601a.49.49 0 11-.452.87C4.348 23.257-3.715 10.325 2.88 3.294 5.78.204 10.9-.464 14.708 2.067a9.878 9.878 0 011.642 1.376l.165.177.151-.168c.412-.444.87-.85 1.372-1.21l.254-.176zm-1.76 3.145l-.12.187a7.968 7.968 0 00-1.129 3.272c-.177 1.738.348 2.691 1.019 2.68.708-.011 1.395-1.015 1.427-2.649.021-1.066-.387-2.28-1.14-3.406l-.057-.084z"
          />
        </svg>
      </span>
    );
  },
);

export default HeartDoodleIcon;
