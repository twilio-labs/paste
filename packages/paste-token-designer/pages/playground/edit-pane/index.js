import {Box} from '@twilio-paste/core/box';
import {Heading} from '@twilio-paste/core/heading';
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

export function Editor({tokens, handleChange}) {
  const tokenBuckets = getTokenBuckets(tokens);
  return (
    <Box padding="space60" width="100%">
      {tokenBuckets.map(([name, options]) => {
        return (
          <Box key={name}>
            <Heading as="h2" variant="heading20">
              {name}
            </Heading>
            <OptionsList bucket={name} options={options} handleChange={handleChange} />
          </Box>
        );
      })}
    </Box>
  );
}
