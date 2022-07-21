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
  const testExampleBackground = '#ffffff';
  const testExampleBackgroundInverse = '#121C2D';
  const testExampleHighlightColor = '#E1E3EA';
  const testExampleTextColor = '#121C2D';
  const testExampleTextColorInverse = '#FFFFFF';

  const BaseTokenCardComponent: React.FC<{useCamelCase?: boolean}> = ({useCamelCase = false}) => (
    <Theme.Provider theme="default">
      <TokenCard
        name={testTokenName}
        category={testTokenCategory}
        value={testTokenValue}
        comment={testTokenComment}
        exampleBackgroundColor={testExampleBackground}
        exampleBackgroundColorInverse={testExampleBackgroundInverse}
        exampleHighlightColor={testExampleHighlightColor}
        exampleTextColor={testExampleTextColor}
        exampleTextColorInverse={testExampleTextColorInverse}
        useCamelCase={useCamelCase}
      />
    </Theme.Provider>
  );

  it('should render the proper pass-in props', () => {
    render(<BaseTokenCardComponent />);

    expect(screen.getByText(`$${testTokenName}`)).toBeDefined();
    expect(screen.getByText(testTokenValue)).toBeDefined();
    expect(screen.getByText(testTokenComment)).toBeDefined();
  });

  it('should convert token name to camelCase when prop is set', () => {
    render(<BaseTokenCardComponent useCamelCase />);

    expect(screen.getByText(testTokenNameCamelCase)).toBeDefined();
  });

  it('should render the proper hexidecimal alt value for color tokens', () => {
    render(<BaseTokenCardComponent />);

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
          exampleBackgroundColor={testExampleBackground}
          exampleBackgroundColorInverse={testExampleBackgroundInverse}
          exampleTextColor={testExampleTextColor}
          exampleTextColorInverse={testExampleTextColorInverse}
        />
      </Theme.Provider>
    );

    expect(screen.getByText('AA Conditional')).toBeDefined();
  });

  it('should render an inverse background for inverse tokens', () => {
    render(
      <Theme.Provider theme="default">
        <TokenCard
          data-testid="alertInverse"
          name="color-background-inverse-light"
          category="background-colors"
          value="rgba(255, 255, 255, 0.2)"
          comment="Light inverse background color for any container. Must be used on color-background-body-inverse."
          exampleBackgroundColor={testExampleBackground}
          exampleBackgroundColorInverse={testExampleBackgroundInverse}
        />
      </Theme.Provider>
    );

    const previewDiv = screen.getByTestId('alertInverse').querySelector('[data-paste-element=TOKEN_EXAMPLE]');
    expect(previewDiv).toHaveStyle(`background-color: ${testExampleBackgroundInverse}`);
  });

  it('should render inverse text color for the color accessibility description on an inverse text color', () => {
    render(
      <Theme.Provider theme="default">
        <TokenCard
          name="color-text-inverse"
          category="text-colors"
          value="rgb(255, 255, 255)"
          comment="Inverse text color for dark backgrounds. Must pass AA color contrast with color-background-body-inverse."
          exampleBackgroundColor={testExampleBackground}
          exampleBackgroundColorInverse={testExampleBackgroundInverse}
          exampleTextColor={testExampleTextColor}
          exampleTextColorInverse={testExampleTextColorInverse}
        />
      </Theme.Provider>
    );

    expect(screen.getByText('AAA')).toHaveStyle(`color: ${testExampleTextColorInverse}`);
  });

  it('should render the proper highlight color for a token example (line height)', () => {
    render(
      <Theme.Provider theme="default">
        <TokenCard
          data-testid="highlightToken"
          name="line-height-110"
          category="line-heights"
          value="4rem"
          comment="Constant line-height token for line-height 110"
          exampleBackgroundColor={testExampleBackground}
          exampleBackgroundColorInverse={testExampleBackgroundInverse}
          exampleHighlightColor={testExampleHighlightColor}
          exampleTextColor={testExampleTextColor}
          exampleTextColorInverse={testExampleTextColorInverse}
        />
      </Theme.Provider>
    );

    const testElement = screen.getByTestId('highlightToken').querySelector('[data-paste-element=TOKEN_EXAMPLE] > div');
    expect(testElement).toHaveStyle(`background-color: ${testExampleHighlightColor}`);
  });
});
