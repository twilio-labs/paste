import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {Theme, withTheme, useTheme} from '../src';
// TODO this should recognise the md file as a module based on ./types/index.d.ts module declaration but it doesn't https://github.com/storybookjs/storybook/issues/2883
// @ts-ignore
import ThemeProviderReadme from '../README.md';

interface ExampleComponentProps {
  theme: ThemeShape;
}
const ExampleComponent: React.FunctionComponent<ExampleComponentProps> = ({theme}): React.ReactElement => (
  <p>What is the default text color using the Paste HOC {theme.textColors.colorText}</p>
);
const ExampleComponentwithTheme = withTheme(ExampleComponent);

const HookExampleComponent = (): React.ReactElement => {
  const theme = useTheme();
  return <p>What is the default text color using the Paste useTheme Hook {theme.textColors.colorText}</p>;
};

storiesOf('Overview|Theme', module)
  .addParameters({
    readme: {
      content: ThemeProviderReadme,
      sidebar: ThemeProviderReadme,
      codeTheme: 'a11y-dark',
    },
  })
  .add('Provider', () => (
    <Theme.Provider>
      <p>Using the Theme Provider to wrap your app</p>
    </Theme.Provider>
  ))
  .add('Consumer', () => (
    <Theme.Consumer>
      {({theme}) => <p>What is the default text color using the Theme Consumer {theme.textColors.colorText}</p>}
    </Theme.Consumer>
  ))
  .add('Hook', () => <HookExampleComponent />)
  .add('HOC', () => <ExampleComponentwithTheme />);
