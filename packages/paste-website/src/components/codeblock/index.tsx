import * as React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import {CodeblockTheme} from './theme';

export type Language =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'typescript'
  | 'wasm'
  | 'yaml';

export interface CodeblockProps extends React.ComponentProps<'code'> {
  children: string;
  className: string;
  live?: boolean;
}

const Codeblock: React.FC<CodeblockProps> = ({children, className = 'language-jsx'}) => {
  const language = className.replace(/language-/, '') as Language;

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={CodeblockTheme}>
      {({className: _className, style, tokens, getLineProps, getTokenProps}) => {
        const lastLineIndex = tokens.length - 1;
        return (
          <pre className={_className} style={{...style, padding: '12px 20px'}}>
            {tokens.map((line, i) => {
              // Codeblocks keep adding an extra blank line, this checks for that and removes it
              if (i === lastLineIndex && line.length === 1 && line[0].content === '') {
                return null;
              }

              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`line-${i}`} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={`token-${key}`} {...getTokenProps({token, key})} />
                  ))}
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
};

export {Codeblock};
