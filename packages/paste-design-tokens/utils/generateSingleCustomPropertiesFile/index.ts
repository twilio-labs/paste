/* This file takes the compiled token files as an input
 * and generates a single css custom property file for all the themes at once.
 * This way, we can set the theme and render it correctly before the JS loads,
 * by utilizing css vars.
 */
import fs from 'fs';
import pickBy from 'lodash/pickBy';
import {writeToFile} from '../../../../tools/utils/writeToFile';
import DefaultTokens from '../../dist/tokens.json';
import DarkTokens from '../../dist/themes/dark/tokens.json';
import SendGridTokens from '../../dist/themes/sendgrid/tokens.json';

type Tokens = {[key: string]: string};

/**
 * Gets all modified tokens between themes
 * @param defaultTheme Our default theme json
 * @param newTheme A custom theme json
 * @returns {} All the tokens in the new theme that differ from the default theme values
 */
const getChangedTokens = (defaultTheme: Tokens, newTheme: Tokens): Tokens => {
  const changedTokens = pickBy(newTheme, (value, key) => {
    if (defaultTheme[key] === value) return false;
    return true;
  });
  return changedTokens;
};

const modifiedDarkThemeTokens = getChangedTokens(DefaultTokens, DarkTokens);
const modifiedSendGridThemeTokens = getChangedTokens(DefaultTokens, SendGridTokens);

/**
 * Converts JSON format to CSS custom properties format
 * @param theme Theme name
 * @param json JSON tokens object
 * @returns string of tokens as custom properties
 */
const JSONtoCustomProperties = (theme: string, json: Tokens): string => {
  const customProperties = Object.keys(json)
    .map((token) => {
      return `  --${token}: ${json[token]};`;
    })
    .join('\n');

  return `
:root.${theme} {
${customProperties}
}`;
};

const darkCSS = JSONtoCustomProperties('dark', modifiedDarkThemeTokens);
const sendgridCSS = JSONtoCustomProperties('sendgrid', modifiedSendGridThemeTokens);

// Write it to disk
fs.readFile(__dirname + '/../../dist/tokens.custom-properties.css', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }

  const finalCSS = `${data}\n${darkCSS}\n${sendgridCSS}`;
  writeToFile(__dirname + '/../../dist/all-custom-properties.css', finalCSS, {
    successMessage: 'Successfully wrote tokens as a CSS custom properties file.',
    errorMessage: 'Failed to generate a CSS custom properties file.',
  });
});
