import * as React from 'react';

interface ThemeSwitcherProps {
  children?: React.ReactElement;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const [theme, setTheme] = React.useState('console');

  const updateTheme = (newTheme: string): void => {
    setTheme(newTheme);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    updateTheme(e.currentTarget.value);
  };

  return (
    <form action="#">
      <fieldset>
        <input
          checked={theme === 'console'}
          type="radio"
          id="console"
          name="theme"
          onChange={handleChange}
          value="console"
        />
        <label htmlFor="console">Console</label>
        <input
          checked={theme === 'sendgrid'}
          type="radio"
          id="sendgrid"
          name="theme"
          onChange={handleChange}
          value="sendgrid"
        />
        <label htmlFor="sendgrid">SendGrid</label>
      </fieldset>
    </form>
  );
};
