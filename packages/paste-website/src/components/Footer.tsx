import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Link} from 'gatsby';

import {Anchor} from '@twilio-paste/anchor';
import {TWILIO_BLUE} from '../constants';
import {TwilioIcon} from './icons/TwilioIcon';

const StyledFooter = styled.footer`
  margin-top: 96px;
  padding: 120px ${themeGet('space.space200')} 120px;
  background-color: ${themeGet('colors.colorGray10')};
`;

const StyledFooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: ${themeGet('space.space70')};
`;

const Styled2Column = styled.div`
  grid-column: span 2;
`;

const StyledFooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledFooterLink = styled(Link)`
  color: ${themeGet('colors.colorGray80')};
  text-decoration: none;

  &:hover {
    color: ${themeGet('textColors.colorText')};
  }
`;

const Styled4Column = styled.div`
  grid-column: 9 / span 4;
`;

const StyledLinkList = styled.p`
  a {
    margin-right: ${themeGet('space.space70')};
  }
`;

const StyledCopyright = styled.p`
  margin-top: 120px;
  text-align: center;
`;

const StyledFooterLogo = styled(TwilioIcon)`
  margin: 0 auto ${themeGet('space.space70')};
`;

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <StyledFooterGrid>
        <Styled2Column>
          <h4>Tokens</h4>
          <StyledFooterList>
            <li>
              <StyledFooterLink to="/tokens/#background-colors">Background Colors</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#border-colors">Border Colors</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#border-widths">Border Widths</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#colors">Colors</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#fonts">Fonts</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#font-sizes">Font Sizes</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#font-weights">Font Weights</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#radii">Radii</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#shadows">Shadows</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#sizings">Sizings</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#text-colors">Text Colors</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/tokens/#z-indices">Z Indices</StyledFooterLink>
            </li>
          </StyledFooterList>
        </Styled2Column>
        <Styled2Column>
          <h4>Components</h4>
          <StyledFooterList>
            <li>
              <StyledFooterLink to="/components/anchor">Anchor</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/components/button">Button</StyledFooterLink>
            </li>
          </StyledFooterList>
        </Styled2Column>
        <Styled4Column>
          <div>
            <h4>Support</h4>
            <p>
              If you need support, please open a new issue in our GitHub repository. Please try to provide as much
              detail as possible in your issue.
            </p>
            <StyledLinkList>
              <Anchor href="https://github.com/twilio-labs/paste/issues">Ask a Question</Anchor>
              <Anchor href="https://github.com/twilio-labs/paste/issues">Report a Bug</Anchor>
            </StyledLinkList>
          </div>
          <div>
            <h4>Contributing</h4>
            <p>
              The Paste design system is open source and contributions are welcome. Check out the project on GitHub to
              learn more about contributing.
            </p>
            <StyledLinkList>
              <Anchor href="https://github.com/twilio-labs/paste">GitHub</Anchor>
            </StyledLinkList>
          </div>
        </Styled4Column>
      </StyledFooterGrid>
      <StyledCopyright>
        <StyledFooterLogo color={TWILIO_BLUE} size={30} />
        Copyright &copy; 2019 Twilio, Inc.
      </StyledCopyright>
    </StyledFooter>
  );
};

export {Footer};
