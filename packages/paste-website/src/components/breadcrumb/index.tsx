import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Link} from 'gatsby';

const CrumbSlashStyled = styled.span(props => ({
  padding: `0 ${themeGet('space.space20')(props)}`,
  display: 'inline',
  color: themeGet('textColors.colorTextWeak')(props),
}));

const CrumbSlash: React.FC<{}> = () => <CrumbSlashStyled>/</CrumbSlashStyled>;

const Breadcrumb: React.FC<{}> = ({children}) => {
  return (
    <>
      {React.Children.map(children, child => (
        <>
          {child}
          <CrumbSlash />
        </>
      ))}
    </>
  );
};

// TODO use correct tokens for lineHeight after fix
const BreadcrumbItem = styled(Link)`
  font-size: ${themeGet('fontSizes.fontSize20')};
  line-height: ${themeGet('lineHeights.lineHeight20')};
  letter-spacing: normal;
  color: ${themeGet('textColors.colorTextLink')};
`;

export {Breadcrumb, BreadcrumbItem};
