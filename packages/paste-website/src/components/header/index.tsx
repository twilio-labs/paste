import * as React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';
import {Text} from '@twilio-paste/text';
import {StyledHeader} from './styled-header';
import TwilioIcon from '../svg/twilio-icon';

interface HeaderProps {
  siteTitle?: string;
  siteSubTitle?: string;
  siteVersion?: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

const Header: React.FC<HeaderProps> = props => {
  return (
    <StyledHeader>
      <TwilioIcon color="#F22F46" size={30} />
      <Text as="h2" fontSize="fontSize50" marginTop={12} marginBottom={4}>
        <StyledLink to="/">{props.siteTitle}</StyledLink>
      </Text>
      <Text as="h3" fontSize="fontSize10" textColor="colorTextPlaceholder" margin={0}>
        <span>{props.siteSubTitle}</span>
        <span>{props.siteVersion}</span>
      </Text>
    </StyledHeader>
  );
};

export {Header};
