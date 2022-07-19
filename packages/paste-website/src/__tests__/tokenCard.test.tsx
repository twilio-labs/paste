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
  const testTokenBackgroundInverse = '#121C2D';
  const testExampleTextColor = '#121C2D';
  const textExampleTextColorInverse = '#FFFFFF';

  const BaseTokenCardComponent: React.FC = () => (
    <Theme.Provider theme="default">
      <TokenCard
        name={testTokenName}
        category={testTokenCategory}
        value={testTokenValue}
        comment={testTokenComment}
        backgroundColor={testTokenBackground}
        backgroundColorInverse={testTokenBackgroundInverse}
        exampleTextColor={testExampleTextColor}
        exampleTextColorInverse={textExampleTextColorInverse}
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
    render(
      <Theme.Provider theme="default">
        <TokenCard
          name={testTokenName}
          category={testTokenCategory}
          value={testTokenValue}
          comment={testTokenComment}
          backgroundColor={testTokenBackground}
          backgroundColorInverse={testTokenBackgroundInverse}
          exampleTextColor={testExampleTextColor}
          exampleTextColorInverse={textExampleTextColorInverse}
          useCamelCase
        />
      </Theme.Provider>
    );

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
          backgroundColor={testTokenBackground}
          backgroundColorInverse={testTokenBackgroundInverse}
          exampleTextColor={testExampleTextColor}
          exampleTextColorInverse={textExampleTextColorInverse}
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
          backgroundColorInverse={testTokenBackgroundInverse}
          exampleTextColor={testExampleTextColor}
          exampleTextColorInverse={textExampleTextColorInverse}
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
          backgroundColor={testTokenBackground}
          backgroundColorInverse={testTokenBackgroundInverse}
          exampleTextColor={testExampleTextColor}
          exampleTextColorInverse={textExampleTextColorInverse}
        />
      </Theme.Provider>
    );

    const previewDiv = screen.getByTestId('alertInverse').querySelector('div');
    expect(previewDiv).toHaveStyle(`background-color: ${testTokenBackgroundInverse}`);
  });

  it('should render inverse text color for the color accessibility description on an inverse text color', () => {
    render(
      <Theme.Provider theme="default">
        <TokenCard
          name="color-text-inverse"
          category="text-colors"
          value="rgb(255, 255, 255)"
          comment="Inverse text color for dark backgrounds. Must pass AA color contrast with color-background-body-inverse."
          backgroundColor={testTokenBackground}
          backgroundColorInverse={testTokenBackgroundInverse}
          exampleTextColor={testExampleTextColor}
          exampleTextColorInverse={textExampleTextColorInverse}
        />
      </Theme.Provider>
    );

    expect(screen.getByText('AAA')).toHaveStyle(`color: ${textExampleTextColorInverse}`);
  });
});
