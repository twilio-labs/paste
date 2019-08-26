/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface TwoFactorAuthenticationIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const TwoFactorAuthenticationIcon: React.FC<TwoFactorAuthenticationIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          height="100%"
          width="100%"
          viewBox="0 0 1024 1024"
        >
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M614.433 231.034c0 59.002 63.856 95.835 114.941 66.359a76.633 76.633 0 0038.313-66.359c0-59.003-63.856-95.836-114.94-66.36a76.632 76.632 0 00-38.314 66.36m357.594 536.39v-51.085H716.603V458.361C892.488 438.693 981.12 236.04 876.14 93.564 771.161-48.911 551.343-24.339 480.437 137.804c-62.068 141.913 31.162 303.341 185.081 320.557v462.318h306.509v-51.085H716.603v-102.17h255.424M691.06 409.83c-137.622 0-223.649-149.014-154.838-268.195 68.811-119.181 240.865-119.181 309.676 0a178.944 178.944 0 0123.959 89.399c0 98.746-80.05 178.796-178.797 178.796M256.839 792.966c0 59.003 63.856 95.836 114.941 66.36 23.703-13.691 38.314-38.978 38.314-66.36 0-59.002-63.856-95.835-114.941-66.359-23.703 13.691-38.314 38.978-38.314 66.359M52.5 256.576v51.085h255.424v257.978C132.039 585.307 43.407 787.96 148.386 930.436c104.979 142.475 324.797 117.903 395.703-44.24 62.068-141.913-31.162-303.341-185.08-320.557V103.321H52.5v51.085h255.424v102.17H52.5M333.466 614.17c137.623 0 223.65 149.014 154.839 268.195-68.812 119.181-240.865 119.181-309.677 0a178.943 178.943 0 01-23.958-89.399c0-98.746 80.05-178.796 178.796-178.796"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

TwoFactorAuthenticationIcon.defaultProps = {
  title: 'Two Factor Authentication Icon',
  decorative: true,
};

TwoFactorAuthenticationIcon.displayName = 'TwoFactorAuthenticationIcon';

export {TwoFactorAuthenticationIcon};
