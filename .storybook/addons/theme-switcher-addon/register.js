/* This file contains the code for the addon's panel */
import * as React from 'react';
import addonAPI from '@storybook/addons';
import {Themes, Events, ADDON_CODENAME, THEME_STORAGE_KEY} from './constants';

function findKeyByValue(value) {
  return Object.keys(Themes).find(key => Themes[key] === value);
}

class ThemeSwitcherPanel extends React.Component {
  state = {
    theme: localStorage.getItem(THEME_STORAGE_KEY) || Themes.CONSOLE,
  };

  onChangeTheme = e => {
    const {channel} = this.props;
    const theme = Themes[e.target.value];

    this.setState({
      theme,
    });

    // This is how we notify the preview frame wrapper (./index.js)
    channel.emit(Events.CHANGE_THEME, theme);
  };

  componentWillUnmount() {
    // Save the current theme to localStorage
    const {theme} = this.state;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  render() {
    // If this isn't the focused panel, render nothing
    if (!this.props.active) {
      return null;
    }

    const {theme} = this.state;

    // Get all theme options
    const options = Object.keys(Themes).map((value, i) => (
      <option key={i} value={value}>
        {value.toLowerCase()}
      </option>
    ));

    return (
      <aside css={{margin: '10px'}}>
        <label css={{fontWeight: 700, marginRight: '4px'}}>Theme Selector:</label>
        <select value={findKeyByValue(theme)} onChange={this.onChangeTheme}>
          {options}
        </select>
      </aside>
    );
  }
}

addonAPI.register(ADDON_CODENAME, storybookAPI => {
  addonAPI.addPanel(`${ADDON_CODENAME}/panel`, {
    title: 'Theme Switcher',
    render: ({active}) => (
      <ThemeSwitcherPanel
        key="theme-switcher-panel"
        channel={addonAPI.getChannel()}
        api={storybookAPI}
        active={active}
      />
    ),
  });
});
