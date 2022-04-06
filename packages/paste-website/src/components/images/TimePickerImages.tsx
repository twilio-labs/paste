import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {css} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';

export const ChromeImage: React.FC = () => {
  const theme = useTheme();
  return (
    <StaticImage
      src="../../assets/images/time-picker/chrome.png"
      alt="Chrome/Edge implementation of time picker"
      width={300}
      placeholder="blurred"
      layout="fixed"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};

export const SafariImage: React.FC = () => {
  const theme = useTheme();
  return (
    <StaticImage
      src="../../assets/images/time-picker/safari.png"
      alt="Safari implementation of time picker"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '300px',
        height: 'auto',
      })(theme)}
    />
  );
};

export const FirefoxImage: React.FC = () => {
  const theme = useTheme();
  return (
    <StaticImage
      src="../../assets/images/time-picker/firefox.png"
      alt="Firefox implementation of time picker"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '300px',
        height: 'auto',
      })(theme)}
    />
  );
};
