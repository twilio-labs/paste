import * as React from 'react';
import Image from 'next/image';
import {css} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';

export const ChromeImage: React.FC = () => {
  const theme = useTheme();
  return (
    <Image
      src="../../assets/images/date-picker/chrome.png"
      alt="Chrome/Edge implementation of date picker"
      width={300}
      placeholder="blur"
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
    <Image
      src="../../assets/images/date-picker/safari.png"
      alt="Safari implementation of date picker"
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
    <Image
      src="../../assets/images/date-picker/firefox.png"
      alt="Firefox implementation of date picker"
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
