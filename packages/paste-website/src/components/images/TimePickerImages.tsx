import { css } from "@twilio-paste/styling-library";
import { useTheme } from "@twilio-paste/theme";
import Image from "next/image";
import * as React from "react";
import type { JSX } from "react";

import Chrome from "../../assets/images/time-picker/chrome.png";
import Firefox from "../../assets/images/time-picker/firefox.png";
import Safari from "../../assets/images/time-picker/safari.png";

export const ChromeImage: React.FC = () => {
  const theme = useTheme();
  return (
    <Image
      src={Chrome}
      alt="Chrome/Edge implementation of time picker"
      width={300}
      placeholder="blur"
      style={css({
        margin: "space20",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      })(theme)}
    />
  );
};

export const SafariImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Image
      src={Safari}
      alt="Safari implementation of time picker"
      style={css({
        margin: "space20",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "300px",
        height: "auto",
      })(theme)}
    />
  );
};

export const FirefoxImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Image
      src={Firefox}
      alt="Firefox implementation of time picker"
      style={css({
        margin: "space20",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "300px",
        height: "auto",
      })(theme)}
    />
  );
};
