/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface BuildIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const BuildIcon: React.FC<BuildIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M17.864 5.625l-.722-.721a.5.5 0 01.068-.765l2.95-2.05a.5.5 0 01.64.057l1.25 1.25a.5.5 0 01.047.653L19.958 6.91a.5.5 0 01-.754.055l-.633-.633-8.191 8.192 1.413 1.413a.5.5 0 01-.708.707l-.53-.53-5.121 5.123a1.747 1.747 0 01-2.475 0 1.748 1.748 0 010-2.474l5.123-5.124-.53-.53a.5.5 0 11.707-.707l1.414 1.414 8.191-8.19zM3.666 19.47a.749.749 0 101.06 1.06l5.122-5.122-1.06-1.06-5.122 5.122zm17.37-15.673l-.648-.648-2.116 1.47 1.23 1.23 1.534-2.052zm-8.661 6.11l-.707.707-3.121-3.12a.5.5 0 01-.107-.548 2.833 2.833 0 00-.605-3.11c-.644-.644-1.497-.921-2.34-.801l1.03 1.162a.5.5 0 01.126.332v1.666a.5.5 0 01-.5.5H4.484a.5.5 0 01-.34-.133l-1.12-1.038c-.113.846.166 1.71.805 2.35a2.825 2.825 0 003.109.588.5.5 0 01.548.106l3.122 3.115-.707.708-2.895-2.889a3.817 3.817 0 01-3.884-.922 3.783 3.783 0 01-.818-4.175.5.5 0 01.8-.171l1.577 1.461h.97v-.977L4.22 3.103a.5.5 0 01.18-.792c1.423-.602 3.027-.297 4.143.817a3.832 3.832 0 01.938 3.885l2.895 2.894zm-.708 4.242l.708-.707 3.122 3.123a.5.5 0 01.107.549 2.832 2.832 0 002.965 3.914l-1.111-1.153a.5.5 0 01-.14-.347v-1.667a.5.5 0 01.5-.5h1.666a.5.5 0 01.34.133l1.194 1.103a2.83 2.83 0 00-3.912-2.986.5.5 0 01-.549-.107l-3.12-3.123.707-.706 2.894 2.895a3.832 3.832 0 014.702 5.144.5.5 0 01-.8.172l-1.651-1.525h-.971v.965l1.555 1.614a.5.5 0 01-.166.808 3.83 3.83 0 01-5.144-4.702l-2.896-2.897z"
            fillRule="nonzero"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

BuildIcon.defaultProps = {
  title: 'Build Icon',
  decorative: true,
};

export {BuildIcon};
