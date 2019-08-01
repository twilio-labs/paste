import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Link} from 'gatsby';

const CrumbSlashStyled = styled.aside(props => ({
  padding: `0 ${themeGet('space.space20')(props)}`,
  display: 'inline',
  color: themeGet('textColors.colorTextWeak')(props),
}));

const CrumbSlash = () => <CrumbSlashStyled>/</CrumbSlashStyled>;

interface BreadcrumbProps {
  children?: React.ReactElement[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({children}) => {
  return React.Children.map(children, child => (
    <>
      {child}
      <CrumbSlash />
    </>
  ));
};

const BreadcrumbItem = styled(Link)`
  height: 24px;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: normal;
  color: ${themeGet('textColors.colorTextLink')};
`;

export {Breadcrumb, BreadcrumbItem};
