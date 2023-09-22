import { AutoLinkPlugin as LexicalAutoLinkPlugin } from '@twilio-paste/lexical-library';
import * as React from 'react';

const URL_MATCHER =
  /(?:(?:https?:\/\/(?:www\.)?)|(?:www\.))[\w#%+.:=@~-]{1,256}\.[\d()A-Za-z]{1,6}\b[\w#%&()+./:=?@~-]*/;

const EMAIL_MATCHER =
  /(?:(?:[^\s"(),.:;<>@[\\\]]+(?:\.[^\s"(),.:;<>@[\\\]]+)*)|(?:".+"))@(?:(?:\[(?:\d{1,3}\.){3}\d{1,3}])|(?:(?:[\dA-Za-z\-]+\.)+[A-Za-z]{2,}))/;

const MATCHERS = [
  (text: string) => {
    const match = URL_MATCHER.exec(text);
    return (
      match && {
        index: match.index,
        length: match[0].length,
        text: match[0],
        url: match[0],
      }
    );
  },
  (text: string) => {
    const match = EMAIL_MATCHER.exec(text);
    return (
      match && {
        index: match.index,
        length: match[0].length,
        text: match[0],
        url: `mailto:${match[0]}`,
      }
    );
  },
];

export const AutoLinkPlugin = (): JSX.Element | null => {
  return <LexicalAutoLinkPlugin matchers={MATCHERS} />;
};

AutoLinkPlugin.displayName = 'AutoLinkPlugin';
