import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {HEADER_HEIGHT} from './constants';

export const SiteMain = styled.main`
  position: relative;
  overflow: auto;
  margin-top: ${HEADER_HEIGHT};
  padding-top: ${themeGet('space.space100')};
`;

export const SiteMainInner = styled.div`
  padding: 0 ${themeGet('space.space200')};
`;
