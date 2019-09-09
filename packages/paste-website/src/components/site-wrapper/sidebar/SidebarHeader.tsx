import * as React from 'react';
import {Text} from '@twilio-paste/text';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import {themeGet} from 'styled-system';
import {TwilioIcon} from '../../icons/TwilioIcon';
import {TWILIO_RED} from '../../../constants';

const StyledHeader = styled.header`
  padding: 0 ${themeGet('space.space40')} ${themeGet('space.space40')};
  margin-bottom: ${themeGet('space.space40')};
  border-bottom: ${themeGet('borderWidths.borderWidth20')} solid ${themeGet('colors.colorGray30')};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

const StyledH3 = styled(Text)`
  display: flex;
`;

const StyledSpan = styled.span`
  flex: 1;

  &:nth-of-type(2) {
    flex: 0;
    justify-self: flex-end;
    font-weight: ${themeGet('fontWeights.fontWeightNormal')};
  }
`;

interface SidebarHeaderProps {
  siteTitle?: string;
  siteSubTitle?: string;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = props => {
  return (
    <StyledHeader>
      <TwilioIcon color={TWILIO_RED} display="block" size={30} />
      <Text as="h2" fontSize="fontSize50" marginTop="space40" marginBottom="space20">
        <StyledLink to="/">{props.siteTitle}</StyledLink>
      </Text>
      <StyledH3 as="h3" fontSize="fontSize10" textColor="colorTextPlaceholder">
        <StyledSpan>{props.siteSubTitle}</StyledSpan>
      </StyledH3>
    </StyledHeader>
  );
};

export {SidebarHeader};
