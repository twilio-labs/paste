import {styled, themeGet} from '@twilio-paste/styling-library';

export const SiteMain = styled.main`
  position: relative;
  overflow: auto;
  padding-top: ${themeGet('space.space100')};
`;

export const SiteMainInner = styled.div`
  padding: 0 ${themeGet('space.space200')};
`;
