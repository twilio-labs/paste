/* This file contains the code for the addon's decorator that wraps each story */
import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import addonsAPI, {makeDecorator} from '@storybook/addons';
import {Events, Themes, THEME_STORAGE_KEY} from './constants';

class ThemeWrapper extends React.Component {
  state = {
    theme: localStorage.getItem(THEME_STORAGE_KEY) || Themes.CONSOLE,
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
      <Theme.Provider theme={this.state.theme} customBreakpoints={[]}>
        {this.props.children}
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
