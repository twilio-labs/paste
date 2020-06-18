import {styled} from '@twilio-paste/styling-library';

const Truncate = styled.span`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
Truncate.displayName = 'Truncate';

export {Truncate};
