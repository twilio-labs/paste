import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { SkeletonLoader } from '../src';
import { Default } from '../stories/index.stories';

describe('SkeletonLoader', () => {
  it('should render', () => {
    render(<Default />);
    expect(screen.getByTestId('default-skeleton')).toBeDefined();
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('background-color', 'colorBackgroundStrong');
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('border-radius', 'borderRadius20');
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('height', 'sizeIcon20');
  });

  it('should render layout prop styles', (): void => {
    render(
      <Default
        display="block"
        width="size30"
        minWidth="size30"
        maxWidth="size30"
        height="size30"
        minHeight="size30"
        maxHeight="size30"
        size="size30"
      />,
    );
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('display', 'block');
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('width', 'size30');
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('min-width', 'size30');
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('max-width', 'size30');
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('height', 'size30');
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('min-height', 'size30');
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('max-height', 'size30');
  });

  it('should render size prop styles', (): void => {
    render(<Default size="size30" />);
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('height', 'size30');
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('width', 'size30');
  });

  it('should render border-radius prop styles', (): void => {
    render(<Default borderRadius="borderRadiusCircle" />);
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('border-radius', 'borderRadiusCircle');
  });

  it('should render top left border-radius prop styles', (): void => {
    render(<Default borderTopLeftRadius="borderRadiusCircle" />);
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('border-top-left-radius', 'borderRadiusCircle');
  });

  it('should render top right border-radius prop styles', (): void => {
    render(<Default borderTopRightRadius="borderRadiusCircle" />);
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('border-top-right-radius', 'borderRadiusCircle');
  });

  it('should render bottom left border-radius prop styles', (): void => {
    render(<Default borderBottomLeftRadius="borderRadiusCircle" />);
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('border-bottom-left-radius', 'borderRadiusCircle');
  });

  it('should render bottom right border-radius prop styles', (): void => {
    render(<Default borderBottomRightRadius="borderRadiusCircle" />);
    expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('border-bottom-right-radius', 'borderRadiusCircle');
  });

  describe('Customization', () => {
    it('should have default DOM attribute present', () => {
      render(<Default />);
      expect(screen.getByTestId('default-skeleton').getAttribute('data-paste-element')).toEqual('SKELETON_LOADER');
    });

    it('should be able to create custom element dom attribute', () => {
      render(<Default element="CUSTOM" />);
      expect(screen.getByTestId('default-skeleton').getAttribute('data-paste-element')).toEqual('CUSTOM');
    });

    it('should apply custom style to default element name', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            SKELETON_LOADER: {
              margin: 'space80',
            },
          }}
        >
          <Default />
        </CustomizationProvider>,
      );
      expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('margin', '1.75rem');
    });

    it('should apply custom style to a custom element name', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            CUSTOM_SKELETON_LOADER: {
              padding: 'space30',
            },
          }}
        >
          <Default element="CUSTOM_SKELETON_LOADER" />
        </CustomizationProvider>,
      );
      expect(screen.getByTestId('default-skeleton')).toHaveStyleRule('padding', '0.5rem');
    });
  });
});
