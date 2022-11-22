import {EmotionCSS} from '@twilio-paste/styling-library';

export const pasteFonts = EmotionCSS`
/* -------------------------------------------------------
Variable font.
*/
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url("https://assets.twilio.com/public_assets/paste-fonts/1.4.1/Inter-roman.var.woff2?v=3.15") format("woff2");
}
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-display: swap;
  font-style: italic;
  font-named-instance: 'Italic';
  src: url("https://assets.twilio.com/public_assets/paste-fonts/1.4.1/Inter-italic.var.woff2?v=3.15") format("woff2");
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
  src: url("https://assets.twilio.com/public_assets/paste-fonts/1.4.1/Inter.var.woff2?v=3.15") format("woff2");
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
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-Regular.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-Regular.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: italic;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-RegularItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-RegularItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-Bold.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-Bold.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: italic;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-BoldItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-BoldItl.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-Medium.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-Medium.woff') format('woff');
}
@font-face {
  font-family: 'TwilioSansMono';
  font-style: italic;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-MediumItl.woff2') format('woff2'),
       url('https://assets.twilio.com/public_assets/paste-fonts/1.4.1/TwilioSansMono-MediumItl.woff') format('woff');
}
`;
