import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {ColorTokenInput} from './ColorTokenInput';
import {FontSizeTokenInput} from './FontSizeTokenInput';
import {FontWeightTokenInput} from './FontWeightTokenInput';

const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

const TokenItem = ({bucket, tokenName, tokenValue, onChange}) => {
  const seed = useUIDSeed();
  console.log(bucket);
  return (
    <Box key={tokenName} marginBottom="space60">
      <Label htmlFor={seed(tokenName)}>{tokenName}:</Label>
      <Input
        id={seed(tokenName)}
        type={bucket === 'fontSizes' ? 'number' : 'text'}
        value={tokenValue}
        onChange={event => {
          const {value} = event.target;
          // TODO validate
          if (value === '') return;
          onChange(bucket, tokenName, event.target.value);
        }}
      />
    </Box>
  );
};

export const OptionsList = ({bucket, options, handleChange}) => {
  if (bucket === 'backgroundColors') {
    const sortedNames = Object.keys(options).sort();
    return (
      <>
        {sortedNames.map(tokenName => (
          <ColorTokenInput
            bucket={bucket}
            key={tokenName}
            tokenName={tokenName}
            tokenValue={options[tokenName]}
            onChange={handleChange}
          />
        ))}
      </>
    );
  }
  if (bucket === 'fontSizes') {
    const sortedNames = Object.keys(options).sort(collator.compare);
    return (
      <>
        {sortedNames.map(tokenName => (
          <FontSizeTokenInput
            bucket={bucket}
            key={tokenName}
            tokenName={tokenName}
            tokenValue={options[tokenName]}
            onChange={handleChange}
          />
        ))}
      </>
    );
  }
  if (bucket === 'fontWeights') {
    // Note: sort this programmatically somehow?
    return (
      <>
        <FontWeightTokenInput
          bucket={bucket}
          key="fontWeightLight"
          tokenName="fontWeightLight"
          tokenValue={options['fontWeightLight']}
          onChange={handleChange}
        />
        <FontWeightTokenInput
          bucket={bucket}
          key="fontWeightNormal"
          tokenName="fontWeightNormal"
          tokenValue={options['fontWeightNormal']}
          onChange={handleChange}
        />
        <FontWeightTokenInput
          bucket={bucket}
          key="fontWeightMedium"
          tokenName="fontWeightMedium"
          tokenValue={options['fontWeightMedium']}
          onChange={handleChange}
        />
        <FontWeightTokenInput
          bucket={bucket}
          key="fontWeightSemibold"
          tokenName="fontWeightSemibold"
          tokenValue={options['fontWeightSemibold']}
          onChange={handleChange}
        />
        <FontWeightTokenInput
          bucket={bucket}
          key="fontWeightBold"
          tokenName="fontWeightBold"
          tokenValue={options['fontWeightBold']}
          onChange={handleChange}
        />
      </>
    );
  }

  const sortedNames = Object.keys(options).sort(collator.compare);
  return (
    <>
      {sortedNames.map(tokenName => (
        <TokenItem
          bucket={bucket}
          key={tokenName}
          tokenName={tokenName}
          tokenValue={options[tokenName]}
          onChange={handleChange}
        />
      ))}
    </>
  );
};
