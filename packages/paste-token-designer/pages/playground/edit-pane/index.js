import {Box} from '@twilio-paste/core/box';
import {Disclosure, DisclosureHeading, DisclosureContent} from '@twilio-paste/core/disclosure';
import {OrderedList, ListItem} from '@twilio-paste/core/list';

import {getTokenBuckets} from './getTokenBuckets';

const OptionsList = ({bucket, options, handleChange}) => {
  return (
    <OrderedList>
      {Object.keys(options).map(key => {
        return (
          <ListItem key={key}>
            {key}: <input type="text" value={options[key]} onChange={e => handleChange(bucket, key, e.target.value)} />
          </ListItem>
        );
      })}
    </OrderedList>
  );
};

export function EditPane({tokens, handleChange}) {
  const tokenBuckets = getTokenBuckets(tokens);
  return (
    <Box padding="space60" width="100%" overflow="scroll">
      {tokenBuckets.map(([name, options]) => {
        return (
          <Disclosure key={name}>
            <DisclosureHeading as="h2" variant="heading20">
              {name}
            </DisclosureHeading>
            <DisclosureContent>
              <OptionsList bucket={name} options={options} handleChange={handleChange} />
            </DisclosureContent>
          </Disclosure>
        );
      })}
    </Box>
  );
}
