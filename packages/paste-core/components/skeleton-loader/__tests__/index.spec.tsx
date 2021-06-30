import * as React from 'react';
import {matchers} from 'jest-emotion';
import {render} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {SkeletonLoader} from '../src';
import {Default} from '../stories/index.stories';

expect.extend(matchers);

describe('SkeletonLoader', () => {
  it('should render', () => {
    const {getByTestId} = render(<Default />);
    expect(getByTestId('default-skeleton')).toBeDefined();
    expect(getByTestId('default-skeleton')).toHaveStyleRule('background-color', 'colorBackgroundStrong');
    expect(getByTestId('default-skeleton')).toHaveStyleRule('border-radius', 'borderRadius20');
    expect(getByTestId('default-skeleton')).toHaveStyleRule('height', 'sizeIcon20');
  });

  it('should render layout prop styles', (): void => {
    const {getByTestId} = render(
      <Default
        display="block"
        width="size30"
        minWidth="size30"
        maxWidth="size30"
        height="size30"
        minHeight="size30"
        maxHeight="size30"
        size="size30"
      />
    );
    expect(getByTestId('default-skeleton')).toHaveStyleRule('display', 'block');
    expect(getByTestId('default-skeleton')).toHaveStyleRule('width', 'size30');
    expect(getByTestId('default-skeleton')).toHaveStyleRule('min-width', 'size30');
    expect(getByTestId('default-skeleton')).toHaveStyleRule('max-width', 'size30');
    expect(getByTestId('default-skeleton')).toHaveStyleRule('height', 'size30');
    expect(getByTestId('default-skeleton')).toHaveStyleRule('min-height', 'size30');
    expect(getByTestId('default-skeleton')).toHaveStyleRule('max-height', 'size30');
  });

  it('should render size prop styles', (): void => {
    const {getByTestId} = render(<Default size="size30" />);
    expect(getByTestId('default-skeleton')).toHaveStyleRule('height', 'size30');
    expect(getByTestId('default-skeleton')).toHaveStyleRule('width', 'size30');
  });

  it('should render border-radius prop styles', (): void => {
    const {getByTestId} = render(<Default borderRadius="borderRadiusCircle" />);
    expect(getByTestId('default-skeleton')).toHaveStyleRule('border-radius', 'borderRadiusCircle');
  });

  it('should render top left border-radius prop styles', (): void => {
    const {getByTestId} = render(<Default borderTopLeftRadius="borderRadiusCircle" />);
    expect(getByTestId('default-skeleton')).toHaveStyleRule('border-top-left-radius', 'borderRadiusCircle');
  });

  it('should render top right border-radius prop styles', (): void => {
    const {getByTestId} = render(<Default borderTopRightRadius="borderRadiusCircle" />);
    expect(getByTestId('default-skeleton')).toHaveStyleRule('border-top-right-radius', 'borderRadiusCircle');
  });

  it('should render bottom left border-radius prop styles', (): void => {
    const {getByTestId} = render(<Default borderBottomLeftRadius="borderRadiusCircle" />);
    expect(getByTestId('default-skeleton')).toHaveStyleRule('border-bottom-left-radius', 'borderRadiusCircle');
  });

  it('should render bottom right border-radius prop styles', (): void => {
    const {getByTestId} = render(<Default borderBottomRightRadius="borderRadiusCircle" />);
    expect(getByTestId('default-skeleton')).toHaveStyleRule('border-bottom-right-radius', 'borderRadiusCircle');
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const {container} = render(<SkeletonLoader />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
