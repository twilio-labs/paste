import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Link} from 'gatsby';

import {Anchor} from '@twilio-paste/anchor';
import {TWILIO_BLUE} from '../constants';
import TwilioIcon from './svg/twilio-icon';

const StyledFooter = styled.footer`
  margin-top: 96px;
  padding: 120px ${themeGet('space.space200')} 120px;
  background-color: #f9fafb;
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
  color: #465672;
  text-decoration: none;

  &:hover {
    color: #08152c;
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

function Footer() {
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
            <p>Vinyl venmo gochujang letterpress pabst drinking vinegar, franzen bitters schlitz fam.</p>
            <StyledLinkList>
              <Anchor href="#">Ask a Question</Anchor>
              <Anchor href="#">Report a Bug</Anchor>
            </StyledLinkList>
          </div>
          <div>
            <h4>Support</h4>
            <p>Vinyl venmo gochujang letterpress pabst drinking vinegar, franzen bitters schlitz fam.</p>
            <StyledLinkList>
              <Anchor href="https://github.com/twilio-labs/paste/issues">GitHub Issues</Anchor>
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
}

export {Footer};
