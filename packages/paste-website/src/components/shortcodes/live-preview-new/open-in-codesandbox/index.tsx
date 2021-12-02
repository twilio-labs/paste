import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {getParameters} from 'codesandbox/lib/api/define';
import {code} from './templates/code';
import {html} from './templates/html';

function getCodesandboxParams(codeString: string, codeImports: string): string {
  return getParameters({
    files: {
      'package.json': {
        // @ts-expect-error Improperly typed library
        content: {
          dependencies: {
            react: 'latest',
            'react-dom': 'latest',
            'react-scripts': 'latest',
            'prop-types': 'latest',
            '@twilio-paste/core': 'latest',
            '@twilio-paste/icons': 'latest',
          },
        },
      },
      'tsconfig.json': {
        // @ts-expect-error Improperly typed library
        content: {
          include: ['./src/*'],
          compilerOptions: {
            lib: ['dom', 'es2015'],
            jsx: 'react',
          },
        },
      },
      // @ts-expect-error Improperly typed library
      'src/index.tsx': {
        content: code(codeString, codeImports),
      },
      // @ts-expect-error Improperly typed library
      'public/index.html': {
        content: html,
      },
    },
  });
}

export const OpenInCodesandboxButton: React.FC<{codeString: string; codeImports: string}> = ({
  codeString,
  codeImports,
}) => {
  const [params, setParams] = React.useState('');

  React.useEffect(() => {
    setParams(getCodesandboxParams(codeString, codeImports));
  }, [codeString]);

  return (
    <form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
      <input type="hidden" name="parameters" value={params} />
      <Button type="submit" variant="secondary" size="small">
        Open in CodeSandbox
      </Button>
    </form>
  );
};
