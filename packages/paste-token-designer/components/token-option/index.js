import {ColorTokenInput} from './ColorTokenInput';
import {UnitTokenInput} from './UnitTokenInput';
import {FontTokenInput} from './FontTokenInput';
import {TextTokenInput} from './TextTokenInput';

const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

export const OptionsList = ({bucket, options, handleChange}) => {
  const sortedNames = React.useMemo(() => Object.keys(options).sort(collator.compare), [options]);

  switch (bucket) {
    case 'backgroundColor':
    case 'colors':
    case 'textColors':
    case 'borderColors':
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
    case 'fonts':
      return (
        <>
          {sortedNames.map(tokenName => (
            <FontTokenInput
              bucket={bucket}
              key={tokenName}
              tokenName={tokenName}
              tokenValue={options[tokenName]}
              onChange={handleChange}
            />
          ))}
        </>
      );
    case 'boxShadows':
      return (
        <>
          {sortedNames.map(tokenName => (
            <TextTokenInput
              bucket={bucket}
              key={tokenName}
              tokenName={tokenName}
              tokenValue={options[tokenName]}
              onChange={handleChange}
            />
          ))}
        </>
      );
    case 'radii':
      console.log(options);
      return (
        <>
          {sortedNames.map(tokenName => {
            if (tokenName === 'borderRadiusCircle') {
              return (
                <UnitTokenInput
                  unit="%"
                  bucket={bucket}
                  key={tokenName}
                  tokenName={tokenName}
                  tokenValue={options[tokenName]}
                  onChange={handleChange}
                />
              );
            }
            return (
              <UnitTokenInput
                unit="px"
                bucket={bucket}
                key={tokenName}
                tokenName={tokenName}
                tokenValue={options[tokenName]}
                onChange={handleChange}
              />
            );
          })}
        </>
      );
    case 'borderWidths':
      return (
        <>
          {sortedNames.map(tokenName => (
            <UnitTokenInput
              unit="px"
              bucket={bucket}
              key={tokenName}
              tokenName={tokenName}
              tokenValue={options[tokenName]}
              onChange={handleChange}
            />
          ))}
        </>
      );
    case 'fontSizes':
    case 'lineHeights':
    case 'spacings':
    case 'sizings':
      console.log(options);
      return (
        <>
          {sortedNames.map(tokenName => (
            <UnitTokenInput
              unit="rem"
              bucket={bucket}
              key={tokenName}
              tokenName={tokenName}
              tokenValue={options[tokenName]}
              onChange={handleChange}
            />
          ))}
        </>
      );
    case 'zIndices':
      return (
        <>
          {sortedNames.map(tokenName => (
            <UnitTokenInput
              unit=""
              bucket={bucket}
              key={tokenName}
              tokenName={tokenName}
              tokenValue={options[tokenName]}
              onChange={handleChange}
            />
          ))}
        </>
      );
    case 'fontWeights':
      // Note: sort this programmatically somehow?
      return (
        <>
          <UnitTokenInput
            unit=""
            bucket={bucket}
            key="fontWeightLight"
            tokenName="fontWeightLight"
            tokenValue={options['fontWeightLight']}
            onChange={handleChange}
          />
          <UnitTokenInput
            unit=""
            bucket={bucket}
            key="fontWeightNormal"
            tokenName="fontWeightNormal"
            tokenValue={options['fontWeightNormal']}
            onChange={handleChange}
          />
          <UnitTokenInput
            unit=""
            bucket={bucket}
            key="fontWeightMedium"
            tokenName="fontWeightMedium"
            tokenValue={options['fontWeightMedium']}
            onChange={handleChange}
          />
          <UnitTokenInput
            unit=""
            bucket={bucket}
            key="fontWeightSemibold"
            tokenName="fontWeightSemibold"
            tokenValue={options['fontWeightSemibold']}
            onChange={handleChange}
          />
          <UnitTokenInput
            unit=""
            bucket={bucket}
            key="fontWeightBold"
            tokenName="fontWeightBold"
            tokenValue={options['fontWeightBold']}
            onChange={handleChange}
          />
        </>
      );
    default:
      return null;
  }
};
