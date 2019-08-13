import * as React from 'react';

interface ThemeSwitcherProps {
  children?: React.ReactElement;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = props => {
  return (
    <form action="#">
      <fieldset>
        <input checked type="radio" id="console" name="theme" />
        <label htmlFor="console">Console</label>
        <input type="radio" id="sendgrid" name="theme" />
        <label htmlFor="sendgrid">SendGrid</label>
      </fieldset>
    </form>
  );
};
