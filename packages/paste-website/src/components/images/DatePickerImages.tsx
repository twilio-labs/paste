import * as React from 'react';
import Image from 'next/image';
import {css} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';

import Chrome from '../../assets/images/date-picker/chrome.png';
import Safari from '../../assets/images/date-picker/safari.png';
import Firefox from '../../assets/images/date-picker/firefox.png';

export const ChromeImage: React.FC = () => {
  const theme = useTheme();
  return (
    <Image
      src={Chrome}
      alt="Chrome/Edge implementation of date picker"
      width={300}
      placeholder="blur"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};

export const SafariImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Image
      src={Safari}
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

export const FirefoxImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Image
      src={Firefox}
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
