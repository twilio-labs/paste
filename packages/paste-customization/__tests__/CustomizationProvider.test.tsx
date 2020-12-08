import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '../src';

const ThemeConsumerExample = (): React.ReactElement => {
  return <Theme.Consumer>{({theme}) => <p>Color: {theme.textColors.colorTextLink}</p>}</Theme.Consumer>;
};

describe('CustomizationProvider', () => {
  it('should render without crashing', (): void => {
    ReactDOM.render(<CustomizationProvider />, document.createElement('div'));
  });

  it('should override a value in the theme with a custom property', () => {
    render(
      <CustomizationProvider theme={{textColors: {colorTextLink: 'hotpink'}}}>
        <ThemeConsumerExample />
      </CustomizationProvider>
    );
    // @ts-ignore
    expect(document.querySelector('p').textContent).toEqual('Color: hotpink');
  });
});
