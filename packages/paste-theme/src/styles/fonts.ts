import { css } from "@twilio-paste/styling-library";

export const pasteFonts = css`
/* -------------------------------------------------------
Variable font.
*/
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url("https://assets.twilio.com/public_assets/paste-fonts/1.5.2/Inter-roman.var.woff2?v=3.19") format("woff2");
}
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-display: swap;
  font-style: italic;
  font-named-instance: 'Italic';
  src: url("https://assets.twilio.com/public_assets/paste-fonts/1.5.2/Inter-italic.var.woff2?v=3.19") format("woff2");
}
/* --------------------------------------------------------------------------
[EXPERIMENTAL] Multi-axis, single variable font.

Slant axis is not yet widely supported (as of February 2019) and thus this
multi-axis single variable font is opt-in rather than the default.

When using this, you will probably need to set font-variation-settings
explicitly, e.g.

  * { font-variation-settings: "slnt" 0deg }
  .italic { font-variation-settings: "slnt" 10deg }

*/
@font-face {
  font-family: 'Inter var experimental';
  font-weight: 100 900;
  font-display: swap;
  font-style: oblique 0deg 8deg;
  src: url("https://assets.twilio.com/public_assets/paste-fonts/1.5.2/Inter.var.woff2?v=3.19") format("woff2");
}

/*
Twilio Sans Mono
*/
@font-face {
  font-family: 'TwilioSansMono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-Regular.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-Regular.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: italic;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-RegularItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-RegularItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-Bold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-Bold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: italic;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-BoldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-BoldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-Medium.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-Medium.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: italic;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-MediumItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansMono-MediumItl.woff') format('woff');
}

/*
Twilio Sans Text
*/
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 300;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Light.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Light.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 300;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-LightItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-LightItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Regular.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Regular.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-RegularItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-RegularItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Medium.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Medium.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-MediumItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-MediumItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Semibold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Semibold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-SemiboldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-SemiboldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Bold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Bold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-BoldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-BoldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Extrabold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-Extrabold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansText';
  font-style: italic;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-ExtraboldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansText-ExtraboldItl.woff') format('woff');
}

/*
Twilio Sans Display
*/
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 300;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Light.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Light.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 300;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-LightItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-LightItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Regular.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Regular.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-RegularItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-RegularItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Medium.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Medium.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-MediumItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-MediumItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Semibold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Semibold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-SemiboldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-SemiboldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Bold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Bold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-BoldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-BoldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Extrabold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-Extrabold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansDisplay';
  font-style: italic;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-ExtraboldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.5.2/TwilioSansDisplay-ExtraboldItl.woff') format('woff');
}
`;
