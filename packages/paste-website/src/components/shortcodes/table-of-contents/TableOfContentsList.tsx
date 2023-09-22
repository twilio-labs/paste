import Scrollspy from 'react-scrollspy';
import type { ScrollspyProps } from 'react-scrollspy';
import { styled, themeGet } from '@twilio-paste/styling-library';

export const TableOfContentsList: React.FC<React.PropsWithChildren<ScrollspyProps>> = styled(Scrollspy)`
  position: sticky;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${themeGet('borderColors.colorBorderWeak')};
  /* Fix overflowing on long pages.
   * 220px is how tall the page is above this nav once you scroll.
   */
  max-height: calc(100vh - 220px);
  overflow: auto;
`;
