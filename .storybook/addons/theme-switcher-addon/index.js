/* This file contains the code for the addon's decorator that wraps each story */
import * as React from 'react';
import {Theme, ThemeVariants} from '@twilio-paste/theme';
import addonsAPI, {makeDecorator} from '@storybook/addons';
import {Events, THEME_STORAGE_KEY} from './constants';

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
    // These are dummy breakpoints for testing
    const breakpoints = ['40em', '52em', '64em', '80em'];
    return (
      <Theme.Provider theme={this.state.theme} customBreakpoints={breakpoints}>
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
