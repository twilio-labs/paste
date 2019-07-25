import * as React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {StyledHeader} from './styled-header';

interface HeaderProps {
  siteTitle?: string;
}

const StyledHeaderLink = styled(Link)`
  color: ${themeGet('textColors.colorText')};

  &:visited {
    color: ${themeGet('textColors.colorText')};
  }
`;

const Header: React.FC<HeaderProps> = props => {
  return (
    <StyledHeader>
      <h1>
        <StyledHeaderLink to="/">{props.siteTitle}</StyledHeaderLink>
      </h1>
    </StyledHeader>
  );
};

export {Header};
