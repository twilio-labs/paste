import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';

export const globalStyles = css`
  body {
    margin: 0;
  }
`;

export const SiteBody = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
`;

export const SiteMain = styled.main`
  padding: ${themeGet('space.space110')} ${themeGet('space.space200')};
  overflow: auto;
`;
