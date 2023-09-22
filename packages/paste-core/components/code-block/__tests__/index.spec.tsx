import { render, screen } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import * as React from 'react';

import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTab,
  CodeBlockTabList,
  CodeBlockTabPanel,
  CodeBlockWrapper,
} from '../src';
import { CopyButton, getCopyButtonText } from '../src/CopyButton';
import { ExternalLinkButton } from '../src/ExternalLinkButton';

const jsCode = `(num) => num + 1`;

const rubyCode = `#!/usr/bin/ruby

# Import the library. This is a really really long line that should be wrapped.
require 'tk'

# Root window.
root = TkRoot.new  {
  title 'Push Me'
  background '#111188'
}

# Add a label to the root window.
lab = TkLabel.new(root) {
  text "Hey there,\nPush a button!"
  background '#3333AA'
  foreground '#CCCCFF'
}
`;

describe('CodeBlock', () => {
  it('should render', () => {
    render(
      <Theme.Provider theme="default">
        <CodeBlock code={rubyCode} language="ruby" />
      </Theme.Provider>,
    );

    const copyButton = screen.getByRole('button', { name: 'Copy code block' });
    expect(copyButton).toBeDefined();

    const rubyText = screen.getByText('#!/usr/bin/ruby');
    expect(rubyText).toBeDefined();
  });

  it('should render a code block with a link', () => {
    render(
      <Theme.Provider theme="default">
        <CodeBlock code={rubyCode} language="ruby" externalLink="https://www.google.com" />
      </Theme.Provider>,
    );

    const copyButton = screen.getByRole('button', { name: 'Copy code block' });
    expect(copyButton).toBeDefined();

    const link = screen.getByRole('link', { name: 'Open code block in new page' });
    expect(link).toBeDefined();
  });

  describe('i18n', () => {
    it('should use i18n labels for copy button and external link', () => {
      render(
        <Theme.Provider theme="default">
          <CodeBlock
            code={rubyCode}
            language="ruby"
            externalLink="https://www.google.com"
            i18nCopyLabelAfter="after"
            i18nCopyLabelBefore="before"
            i18nLinkLabel="external link"
          />
        </Theme.Provider>,
      );

      const copyButton = screen.getByRole('button', { name: 'before' });
      expect(copyButton).toBeDefined();

      const link = screen.getByRole('link', { name: 'external link' });
      expect(link).toBeDefined();
    });
  });
});

describe('CodeBlockHeader', () => {
  it('should render a heading', () => {
    render(
      <>
        <CodeBlockHeader>My code block</CodeBlockHeader>
        <CodeBlockHeader as="h2">Another code block</CodeBlockHeader>
      </>,
    );

    const headerLevel3 = screen.getByRole('heading', { name: 'My code block' });
    expect(headerLevel3).toBeDefined();
    expect(headerLevel3.tagName).toBe('H3');

    const headerLevel2 = screen.getByRole('heading', { name: 'Another code block' });
    expect(headerLevel2).toBeDefined();
    expect(headerLevel2.tagName).toBe('H2');
  });
});

describe('CodeBlockTabs', () => {
  it('should render an accessible tab set', () => {
    render(
      <Theme.Provider theme="default">
        <CodeBlockWrapper>
          <CodeBlockTabList>
            <CodeBlockTab>JavaScript</CodeBlockTab>
            <CodeBlockTab>Ruby</CodeBlockTab>
          </CodeBlockTabList>
          <CodeBlockTabPanel>
            <CodeBlock code={jsCode} language="javascript" data-testid="js-block" />
          </CodeBlockTabPanel>
          <CodeBlockTabPanel>
            <CodeBlock code={rubyCode} language="ruby" data-testid="ruby-block" />
          </CodeBlockTabPanel>
        </CodeBlockWrapper>
      </Theme.Provider>,
    );

    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeDefined();

    const javascriptTab = screen.getByRole('tab', { name: 'JavaScript' });
    expect(javascriptTab).toBeDefined();
    expect(javascriptTab.getAttribute('aria-selected')).toBe('true');

    const javascriptTabPanel = screen.getByTestId('js-block').parentElement;
    expect(javascriptTabPanel).toBeDefined();
    expect(javascriptTab.getAttribute('aria-controls')).toBe(javascriptTabPanel?.id);
    expect(javascriptTabPanel?.getAttribute('aria-labelledby')).toBe(javascriptTab.id);

    const rubyTab = screen.getByRole('tab', { name: 'Ruby' });
    expect(rubyTab).toBeDefined();
    expect(rubyTab.getAttribute('aria-selected')).toBe('false');

    const rubyTabPanel = screen.getByTestId('ruby-block').parentElement;
    expect(rubyTabPanel).toBeDefined();
    expect(rubyTab.getAttribute('aria-controls')).toBe(rubyTabPanel?.id);
    expect(rubyTabPanel?.getAttribute('aria-labelledby')).toBe(rubyTab.id);
  });
});

describe('CopyButton', () => {
  it('should render', () => {
    render(
      <Theme.Provider theme="default">
        <CopyButton text="hello world" />
      </Theme.Provider>,
    );

    const button = screen.getByRole('button');
    const tooltip = screen.getByRole('tooltip', { hidden: true });

    expect(button).toBeDefined();
    expect(tooltip).not.toBeVisible();
  });

  describe('getCopyButtonText', () => {
    it('returns the correct string depending on the copied arg', () => {
      const getText = getCopyButtonText('before', 'after');

      expect(getText(false)).toBe('before');
      expect(getText(true)).toBe('after');
    });
  });
});

describe('ExternalLinkButton', () => {
  it('should render', () => {
    render(
      <Theme.Provider theme="default">
        <ExternalLinkButton href="https://www.google.com" />
      </Theme.Provider>,
    );

    const link = screen.getByRole('link');
    const tooltip = screen.getByRole('tooltip', { hidden: true });

    expect(link).toBeDefined();
    expect(link.getAttribute('href')).toBe('https://www.google.com');
    expect(tooltip).not.toBeVisible();
  });
});
