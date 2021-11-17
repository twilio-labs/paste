import Scrollspy from 'react-scrollspy';
import {styled, themeGet} from '@twilio-paste/styling-library';

export const TableOfContentsList = styled(Scrollspy)`
  position: sticky;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${themeGet('borderColors.colorBorderWeak')};
`;
