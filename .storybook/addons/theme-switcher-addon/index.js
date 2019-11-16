/* This file contains the code for the addon's decorator that wraps each story */
import * as React from 'react';
import {css, Global} from '@emotion/core';
import {Theme, ThemeVariants} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import addonsAPI, {makeDecorator} from '@storybook/addons';
import {Events, THEME_STORAGE_KEY} from './constants';

const globalStyles = css`
  @font-face {
    font-family: Colfax;
    font-style: normal;
    font-weight: 300;
    src: url(/fonts/colfax-light.woff2) format('woff2'), url(/fonts/colfax-light.woff) format('woff');
  }

  @font-face {
    font-family: Colfax;
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/colfax-regular.woff2) format('woff2'), url(/fonts/colfax-regular.woff) format('woff');
  }

  @font-face {
    font-family: Colfax;
    font-style: normal;
    font-weight: 600;
    src: url(/fonts/colfax-medium.woff2) format('woff2'), url(/fonts/colfax-medium.woff) format('woff');
  }
`;

class ThemeWrapper extends React.Component {
  state = {
    theme: localStorage.getItem(THEME_STORAGE_KEY) || ThemeVariants.CONSOLE,
  };

  componentDidMount() {
    const {channel} = this.props;
    channel.addListener(Events.CHANGE_THEME, this.handleChangeTheme);
  }

  componentWillUnmount() {
    const {channel} = this.props;
    channel.removeListener(Events.CHANGE_THEME, this.handleChangeTheme);
  }

  handleChangeTheme = theme => {
    this.setState({
      theme,
    });
  };

  render() {
    return (
      <Theme.Provider theme={this.state.theme}>
        <Global styles={globalStyles} />
        <Box padding="space40">{this.props.children}</Box>
      </Theme.Provider>
    );
  }
}

export default makeDecorator({
  name: 'withThemeSwitcher',
  parameterName: 'theme',
  wrapper: (getStory, context) => {
    return <ThemeWrapper channel={addonsAPI.getChannel()}>{getStory(context)}</ThemeWrapper>;
  },
});
