import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import {TokenCard} from '../components/tokens-list/token-card';
import {render, screen} from '@testing-library/react';

describe('TokenCard', () => {
  const testTokenName = 'color-background';
  const testTokenNameCamelCase = 'colorBackground';
  const testTokenCategory = 'background-colors';
  const testTokenValue = 'rgb(244, 244, 246)';
  const testTokenHexValue = '#F4F4F6';
  const testTokenComment = 'Background color used for containers.';
  const testTokenBackground = '#ffffff';

  it('should render the proper pass-in props', () => {
    render(
      <Theme.Provider theme="default">
        <TokenCard
          name={testTokenName}
          category={testTokenCategory}
          value={testTokenValue}
          comment={testTokenComment}
          backgroundColor={testTokenBackground}
        />
      </Theme.Provider>
    );

    expect(screen.getByText(testTokenName)).toBeDefined();
    expect(screen.getByText(testTokenValue)).toBeDefined();
    expect(screen.getByText(testTokenComment)).toBeDefined();
  });

  it('should convert token name to camelCase when prop is set', () => {
    render(
      <Theme.Provider theme="default">
        <TokenCard
          name={testTokenName}
          category={testTokenCategory}
          value={testTokenValue}
          comment={testTokenComment}
          backgroundColor={testTokenBackground}
          useCamelCase
        />
      </Theme.Provider>
    );

    expect(screen.getByText(testTokenNameCamelCase)).toBeDefined();
  });

  it('should render the proper hexidecimal alt value for color tokens', () => {
    render(
      <Theme.Provider theme="default">
        <TokenCard
          name={testTokenName}
          category={testTokenCategory}
          value={testTokenValue}
          comment={testTokenComment}
          backgroundColor={testTokenBackground}
        />
      </Theme.Provider>
    );

    expect(screen.getByText(testTokenHexValue)).toBeDefined();
  });

  it('should render the proper px alt value for size related token', () => {
    render(
      <Theme.Provider theme="default">
        <TokenCard
          name="size-110"
          category="sizings"
          value="70.5rem"
          comment="Generic sizing token scale for UI components."
          backgroundColor={testTokenBackground}
        />
      </Theme.Provider>
    );

    expect(screen.getByText('1128px')).toBeDefined();
  });

  it('should render the color contrast score for text colors', () => {
    render(
      <Theme.Provider theme="default">
        <TokenCard
          name="color-text-brand-highlight"
          category="text-colors"
          value="rgb(242, 47, 70)"
          comment="Twilio brand red, accessible on large text only."
          backgroundColor={testTokenBackground}
        />
      </Theme.Provider>
    );

    expect(screen.getByText('AA Conditional')).toBeDefined();
  });
});
