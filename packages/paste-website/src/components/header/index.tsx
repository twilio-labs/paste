import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {StyledHeader, StyledH3, StyledSpan, StyledLink} from './styles';
import {TWILIO_RED} from '../../constants';
import TwilioIcon from '../svg/twilio-icon';

interface HeaderProps {
  siteTitle?: string;
  siteSubTitle?: string;
  siteVersion?: string;
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <StyledHeader>
      <TwilioIcon color={TWILIO_RED} size={30} />
      <Text as="h2" fontSize="fontSize50" marginTop="space40" marginBottom="space20">
        <StyledLink to="/">{props.siteTitle}</StyledLink>
      </Text>
      <StyledH3 as="h3" fontSize="fontSize10" textColor="colorTextPlaceholder" margin={0}>
        <StyledSpan>{props.siteSubTitle}</StyledSpan>
        <StyledSpan>{props.siteVersion}</StyledSpan>
      </StyledH3>
    </StyledHeader>
  );
};

export {Header};
